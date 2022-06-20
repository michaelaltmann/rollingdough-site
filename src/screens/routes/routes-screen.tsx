import { RouteStoreModel } from "../../models/route-store/route-store";
import Grid from "@mui/material/Grid";
import "leaflet/dist/leaflet.css";
import { MapContainer, Polyline, TileLayer } from "react-leaflet";
import { Card, CardContent, CardHeader, CardMedia } from "@mui/material";
import { Route } from "../../models/route/route";
import { useEffect, useState } from "react";
export const RoutesScreen = () => {
  const [routes, setRoutes] = useState([] as Array<Route>);
  useEffect(() => {
    RouteStoreModel.getRoutes().then((list: Array<Route>) => {
      list.sort((x, y) => x.name.localeCompare(y.name));
      setRoutes(list);
    });
  }, []);

  return (
    <Grid container direction="column" alignItems="center">
      {" "}
      {routes.map((item) => {
        const key = item.name;
        const gpx = {
          trk: [
            {
              trxseg: [
                {
                  trkpt: [
                    { lat: "44.9481396", lon: "-93.2203793", name: "TP001" },
                    { lat: "44.9496442", lon: "-93.3202236", name: "TP428" },
                  ],
                },
              ],
            },
          ],
        };
        const positions = item.gpx
          ? item.gpx.trk.trkseg.trkpt.map((p: any) => [
              p._attributes.lat,
              p._attributes.lon,
            ])
          : [];
        console.log(`Positions ${positions}`);
        return (
          <div key={item.name}>
            <div>{item.title}</div>
            <MapContainer
              center={[44.97, -93.26]}
              zoom={11}
              scrollWheelZoom={false}
            >
              <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
              <Polyline pathOptions={{ color: "blue" }} positions={positions} />
            </MapContainer>
          </div>
        );
      })}
    </Grid>
  );
};
