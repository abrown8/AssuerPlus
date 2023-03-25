import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";

const Login = ({ setEmail }) => {
  // Déclaration des états locaux avec useState
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    // Créer un objet qui contient les informations d'identification
    const credentials = {
      email: username,
      password: password,
    };
    console.log(credentials);

    // Envoyer une requête POST à l'URL spécifiée avec les informations d'identification
    fetch("http://localhost/assuerplus/login.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credentials),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          setEmail(username);
          navigate("/home");
        } else {
          setErrorMessage("Identifiants incorrects");
        }
      })
      .catch((error) => {
        console.error(error);
        setErrorMessage(
          "Une erreur s'est produite lors de la connexion : " + error.message
        );
      });
  };

  return (
    <div>
      <Header />
      <br />
      <div className="container mt-5">
        <div className="card">
          <div className="card-header">
            <h3>Connexion</h3>
          </div>
          <div className="card-body">
            {errorMessage && (
              <div className="alert alert-danger">{errorMessage}</div>
            )}
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  type="text"
                  id="email"
                  className="form-control"
                  value={username}
                  onChange={(event) => setUsername(event.target.value)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">
                  Mot de passe
                </label>
                <input
                  type="password"
                  id="password"
                  className="form-control"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                />
              </div>
              <button type="submit" className="btn btn-primary">
                Se connecter
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
