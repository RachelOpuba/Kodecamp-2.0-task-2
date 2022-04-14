import React from "react";
import logo from "../react-logo.svg";

const Navbar = function () {
  return (
    <>
      <nav className="nav">
        <div className="left">
          <img src={logo} className="logo" />
          <h3>Kodecamp-React</h3>
        </div>
        <div className="right">
          <h4>React Course - Task-2</h4>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
