import React, { useState } from "react";
import DeclarationSinistre from "../components/DeclarationSinistre";
import Services from "../components/Services";
import Header from "../components/Header";

const Home = ({ email }) => {
  // Déclaration des états locaux avec useState
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [adresseSinistre, setAdresseSinistre] = useState("");
  const [codePostalSinistre, setCodePostalSinistre] = useState("");
  const [villeSinistre, setVilleSinistre] = useState("");
  const [paysSinistre, setPaysSinistre] = useState("");

  // Fonction appelée lorsque le formulaire de déclaration de sinistre est soumis
  const handleFormSubmit = (
    submitedAdresse,
    submitedCodePostal,
    submitedVille,
    submitedPays
  ) => {
    // Mise à jour des états locaux avec les valeurs saisies dans le formulaire
    setFormSubmitted(true);
    setAdresseSinistre(submitedAdresse);
    setCodePostalSinistre(submitedCodePostal);
    setVilleSinistre(submitedVille);
    setPaysSinistre(submitedPays);
  };

  return (
    <div>
      <Header />
      <br />
      <div className="container">
        {formSubmitted ? (
          <Services
            adresse={adresseSinistre}
            codePostal={codePostalSinistre}
            ville={villeSinistre}
            pays={paysSinistre}
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
