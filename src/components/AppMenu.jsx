import React from "react";

import "primeicons/primeicons.css";
import "primereact/resources/themes/saga-blue/theme.css";
import "primeflex/primeflex.css";
import { Menubar } from "primereact/menubar";

import { useNavigate } from "react-router-dom";

const AppMenu = (props) => {
  const navigate = useNavigate();

  const items = [
    {
      label: "Home",
      command: () => {
        navigate("/");
      },
    },
    {
      label: "About",
      command: () => {
        navigate("/about");
      },
    },
    {
      label: "Profile",
      command: () => {
        navigate("/profile");
      },
    },
    {
      label: "Register",
      command: () => {
        navigate("/register");
      },
    },
    {
      label: "Login",
      command: () => {
        navigate("/login");
      },
    },
    {
      label: "Logout",
      command: () => {
        navigate("/");
      },
    },
  ];
  return (
    <div>
      <div>
        <div className="card">
          <Menubar model={items} />
        </div>
      </div>
    </div>
  );
};

export default AppMenu;
