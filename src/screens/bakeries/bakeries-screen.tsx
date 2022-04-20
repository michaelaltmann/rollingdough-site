import { BakeryStoreModel } from "../../models/bakery-store/bakery-store";
import Grid from "@mui/material/Grid";
export const BakeriesScreen = () => {
  const items = BakeryStoreModel.getBakeries();
  items.sort((x, y) => x.name.localeCompare(y.name));
  return (
    <Grid container direction="column">
      {" "}
      {items.map((item) => {
        const key = item.name;
        return <div key={key}>{item.name}</div>;
      })}
    </Grid>
  );
};
