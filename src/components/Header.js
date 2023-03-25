import React from "react";
import logo from "../assets/voiture.png";

function Header() {
  return (
    <nav className="navbar navbar-dark bg-info" style={{ overflowX: "hidden" }}>
      <div className="container-fluid">
        <div className="d-flex justify-content-start align-items-center">
          <img
            src={logo}
            alt="AssuerPlus"
            className="m-5 img-fluid"
            style={{ maxWidth: "100px", maxHeight: "80px" }}
          />
          <h1 className="display-3 text-light ">AssuerPlus</h1>
          <img
            src={logo}
            alt="AssuerPlus"
            className="m-5 img-fluid"
            style={{ maxWidth: "100px", maxHeight: "80px" }}
          />
        </div>
      </div>
    </nav>
  );
}

export default Header;
