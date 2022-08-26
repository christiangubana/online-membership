import React from "react";
import "./App.css";

//Prime React Configuration
import "primereact/resources/themes/bootstrap4-light-blue/theme.css"; //theme
import "primereact/resources/primereact.min.css"; //core css
import "primeicons/primeicons.css"; //Icons
import "primeflex/primeflex.css"; //Flex

import Home from "./components/Home";
import AppMenu from "./components/AppMenu";
import LandingPage from "./components/LandingPage";
import Profile from "./components/Profile";
import Register from "./components/Register";
import Login from "./components/Login";
import About from "./components/About";

import { Routes, Route } from "react-router-dom";

let App = () => {
  return (
    <div className="container">
      <AppMenu />
      <React.StrictMode>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/landing" element={<LandingPage />} />
          <Route exact path="/profile" element={<Profile />} />
          {/* <Route exact path="/logout" element={<Logout/>}/> */}
        </Routes>
      </React.StrictMode>
    </div>
  );
};

export default App;
