import React from "react";
import logo from "../assets/voiture.png";

function Header() {
  return (
    <nav className="navbar navbar-dark bg-info">
      <div className="container-fluid">
        <div className="d-flex justify-content-start align-items-center">
          <img
            src={logo}
            alt="AssuerPlus"
            className="m-5"
            width="100"
            height="80"
          />
          <h1 className="display-3 text-light ">AssuerPlus</h1>
          <img
            src={logo}
            alt="AssuerPlus"
            className="m-5"
            width="100"
            height="80"
          />
        </div>
      </div>
    </nav>
  );
}

export default Header;
