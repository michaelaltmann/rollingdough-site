import { BakeryStoreModel } from "../../models/bakery-store/bakery-store";
import Grid from "@mui/material/Grid";
import React from "react";
import { Card, CardContent, CardHeader, CardMedia } from "@mui/material";
import { Bakery } from "../../models/bakery/bakery";
export const BakeriesScreen = () => {
  const buildImages = (item: Bakery): JSX.Element => {
    if (item.images) {
      return (
        <CardMedia component="img" image={item.images[0].url} height={200} />
      );
    } else {
      return <React.Fragment />;
    }
  };
  const items = BakeryStoreModel.getBakeries();
  items.sort((x, y) => x.name.localeCompare(y.name));
  return (
    <Grid container direction="column" alignItems="center">
      {" "}
      {items.map((item) => {
        const key = item.name;
        return (
          <Card
            style={{
              width: 325,
              margin: 5,
              position: "relative",
              height: 450,
            }}
            key={key}
          >
            <CardHeader title={item.name}></CardHeader>
            {buildImages(item)}
          </Card>
        );
      })}
    </Grid>
  );
};
