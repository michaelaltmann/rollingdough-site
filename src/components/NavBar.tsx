import React from "react";
import { Link } from "react-router-dom";

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";

export const NavBar = () => {
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Link to="/">Home</Link>
          <Link to="/bakeries">Bakeries</Link>
          <Link to="/events">Events</Link>
          <Link to="/tours">Tours</Link>
        </Toolbar>
      </AppBar>
    </div>
  );
};
