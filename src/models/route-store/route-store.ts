import { Route } from "../route/route";
import axios from "axios";
const xml2js = require("xml-js");

const xmlToGpx = (gpx_string: any) => {
  let tree = xml2js.xml2js(gpx_string, { compact: true });
  return tree.gpx;
};

export const RouteStoreModel = {
  async getRoutes(): Promise<Array<Route>> {
    var routes = [
      {
        name: "laune-rustica",
        title: "Laune Bread to Rustica Bakery",
      } as Route,
    ];
    await Promise.all(
      routes.map(async (route) => {
        // Parse gpx
        const XML_path = `/data/${route.name}.gpx`;
        const response = await axios.get(XML_path, {
          headers: { "Content-Type": "application/xml; charset=utf-8" },
        });

        const gpx_string = response.data;
        route.gpx = xmlToGpx(gpx_string);
        console.log(
          `route updated to ${JSON.stringify(route)} with ${gpx_string}`
        );
      })
    );
    return routes;
  },
};
