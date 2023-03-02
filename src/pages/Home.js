import React, { useState } from "react";
import DeclarationSinistre from "../components/DeclarationSinistre";
import Services from "../components/Services";
import Header from "../components/Header";

const Home = ({ email }) => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [adresse, setAdresse] = useState("");
  const [codePostal, setCodePostal] = useState("");
  const [ville, setVille] = useState("");
  const [pays, setPays] = useState("");

  const handleFormSubmit = (
    submitedAdresse,
    submitedCodePostal,
    submitedVille,
    submitedPays
  ) => {
    setFormSubmitted(true);
    setAdresse(submitedAdresse);
    setCodePostal(submitedCodePostal);
    setVille(submitedVille);
    setPays(submitedPays);
  };

  return (
    <div>
      <Header />
      <br />
      <div className="container">
        {formSubmitted ? (
          <Services
            adresse={adresse}
            codePostal={codePostal}
            ville={ville}
            pays={pays}
          />
        ) : (
          <DeclarationSinistre
            email={email}
            handleFormSubmit={handleFormSubmit}
          />
        )}
      </div>
    </div>
  );
};

export default Home;
