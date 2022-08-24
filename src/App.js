import React from "react";
import "./App.css";

//Prime React Configuration
import "primereact/resources/themes/bootstrap4-light-blue/theme.css"; //theme
import "primereact/resources/primereact.min.css"; //core css
import "primeicons/primeicons.css"; //Icons
import "primeflex/primeflex.css"; //Flex

import Home from "./components/Home";
import Landing from "./components/Landing-page.jsx";
import AppMenu from "./components/AppMenu";

import { Routes, Route } from "react-router-dom";

let App = () => {
  return (
    <div className="container">
      <AppMenu />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<Landing />} />
        </Routes>
    </div>
  );
};

export default App;
