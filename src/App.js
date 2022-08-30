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
import ProtectedRoutes from "./ProtectedRoutes";

let App = () => {
  return (
    <>
      <React.StrictMode>
        <AppMenu />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/about" element={<About />} />
          <Route element={<ProtectedRoutes />}>
            <Route path="/landing" element={<LandingPage />} />
            <Route path="profile" element={<Profile />} />
          </Route>
        </Routes>
      </React.StrictMode>
    </>
  );
};

export default App;
