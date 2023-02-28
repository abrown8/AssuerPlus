import React from "react";
import DeclarationSinistre from "../components/DeclarationSinistre";
import Services from "../components/Services";

const Home = ({ email }) => {
  return (
    <div className="container">
      <h1>Bienvenue sur notre site d'assurance</h1>
      <DeclarationSinistre email={email} />
    </div>
  );
};

export default Home;
