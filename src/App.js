import './App.css';
import { HomeScreen } from './screens/home/home-screen';
import { BakeriesScreen } from './screens/bakeries/bakeries-screen';
import { Button } from '@mui/material';
import { Link, Route, BrowserRouter } from "react-router-dom";
import { Routes } from "react-router-dom"
import React from 'react';
function App() {
  return (

    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <p>
            Notable Twin Cities Bakeries
          </p>
          <Button color="inherit" component={Link} to="/">Home</Button>
          <Button color="inherit" component={Link} to="/bakeries">Bakeries</Button>
          <Button color="inherit" component={Link} to="/events">Events</Button>
          <Button color="inherit" component={Link} to="/tours">Tours</Button>

          <Routes>
            <Route path="/" />
            <Route path="/bakeries" element={<BakeriesScreen />} />
            <Route path="/events" element={<div>Events</div>} />
            <Route path="/tours" element={<div>Tours</div>} />
          </Routes>
        </header>
      </div>
    </BrowserRouter>

  );
}

export default App;
