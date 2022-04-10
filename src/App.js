import React, { useEffect, useState, useRef } from "react";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import * as s from "./styles/globalStyles";
import Home from "./pages/HomePage/Home";
import Fonts from "./styles/fontStyles";
import ReactGA from 'react-ga';
ReactGA.initialize('G-3X4313YHG0');




function App() {
  return (
    <>
    <Fonts/>
      <Router>
        <Home/>
      </Router>
    </>
  );
}

export default App;
