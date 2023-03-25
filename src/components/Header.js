import React from "react";
import logo from "../assets/voiture.png";

function Header() {
  return (
    <nav className="navbar navbar-dark bg-info" style={{ overflowX: "hidden" }}>
      <div className="container-fluid">
        <div className="row d-flex justify-content-center align-items-center">
          <div className="col-3 text-center">
            <img
              src={logo}
              alt="AssuerPlus"
              className="img-fluid"
              style={{ maxWidth: "60%", maxHeight: "60%" }}
            />
          </div>
          <div className="col-6 text-center">
            <h1 className="display-3 text-light ">AssuerPlus</h1>
          </div>
          <div className="col-3 text-center">
            <img
              src={logo}
              alt="AssuerPlus"
              className="img-fluid"
              style={{ maxWidth: "60%", maxHeight: "60%" }}
            />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
