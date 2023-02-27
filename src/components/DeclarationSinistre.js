import React, { useState } from "react";

const DeclarationSinistre = () => {
  const [nom, setNom] = useState("");
  const [nomErr, setNomErr] = useState("");
  const [prenom, setPrenom] = useState("");
  const [dateSinistre, setDateSinistre] = useState("");
  const [description, setDescription] = useState("");
  const [photos, setPhotos] = useState([]);
  const [adresse, setAdresse] = useState("");
  const [codePostal, setCodePostal] = useState("");
  const [ville, setVille] = useState("");
  const [pays, setPays] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [nomError, setNomError] = useState("");
  const [prenomError, setPrenomError] = useState("");
  const [dateSinistreError, setDateSinistreError] = useState("");
  const [descriptionError, setDescriptionError] = useState("");
  const [photosError, setPhotosError] = useState("");
  const [adresseError, setAdresseError] = useState("");
  const [codePostalError, setCodePostalError] = useState("");
  const [villeError, setVilleError] = useState("");
  const [paysError, setPaysError] = useState("");

  const handleSubmit = (event) => {
    console.log("handleSubmit Statrt");
    event.preventDefault();

    let hasError = false;

    // Vérification du champ nom
    if (nom.trim() === "") {
      setNomError("Le nom est obligatoire");
      hasError = true;
    } else {
      setNomError("");
    }

    // Vérification du champ prénom
    if (prenom.trim() === "") {
      setPrenomError("Le prénom est obligatoire");
      hasError = true;
    } else {
      setPrenomError("");
    }

    // Vérification du champ date du sinistre
    if (!dateSinistre || dateSinistre === "jj/mm/aaa") {
      setDateSinistreError("La date de sinistre est obligatoire.");
      hasError = true;
    } else {
      setDateSinistreError("");
    }

    // Vérification du champ description
    if (description.trim() === "") {
      setDescriptionError("La description est obligatoire");
      hasError = true;
    } else {
      setDescriptionError("");
    }

    // Vérification du champ adresse
    if (adresse.trim() === "") {
      setAdresseError("L'adresse est obligatoire");
      hasError = true;
    } else {
      setAdresseError("");
    }

    // Vérification du champ code postal
    if (codePostal.trim() === "") {
      if (/^\d{5}$/.test(codePostal)) {
        setCodePostalError("Le code postal est invalide");
      } else {
        setCodePostalError("Le code postal est obligatoire");
      }
      hasError = true;
    } else {
      setCodePostalError("");
    }

    // Vérification du champ ville
    if (ville.trim() === "") {
      setVilleError("La ville est obligatoire");
      hasError = true;
    } else {
      setVilleError("");
    }

    // Vérification du champ pays
    if (pays.trim() === "") {
      setPaysError("Le pays est obligatoire");
      hasError = true;
    } else {
      setPaysError("");
    }

    // Vérification du champ photo
    if (photos.length === 0) {
      setPhotosError("Veuillez sélectionner au moins une photo");
      hasError = true;
    } else {
      if (
        !Array.from(photos).every((photo) => photo.type.startsWith("image/"))
      ) {
        setPhotosError("Veuillez sélectionner des photos au format image");
        hasError = true;
      } else {
        setPhotosError("");
      }
    }

    // Si le formulaire contient des erreurs, on ne fait rien
    if (hasError) {
      return;
    }

    alert("Formulaire correct");
  };

  return (
    <div className="container mt-5">
      <div className="card">
        <div className="card-header">
          <h3>Déclarer un sinistre</h3>
        </div>
        <div className="card-body">
          {successMessage && (
            <div className="alert alert-success">{successMessage}</div>
          )}
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="nom" className="form-label">
                Nom
              </label>
              <input
                type="text"
                id="nom"
                className="form-control"
                value={nom}
                onChange={(event) => setNom(event.target.value)}
              />
            </div>
            {nomError && <div className="alert alert-danger">{nomError}</div>}

            <div className="mb-3">
              <label htmlFor="prenom" className="form-label">
                Prénom
              </label>
              <input
                type="text"
                id="prenom"
                className="form-control"
                value={prenom}
                onChange={(event) => setPrenom(event.target.value)}
              />
            </div>
            {prenomError && (
              <div className="alert alert-danger">{prenomError}</div>
            )}

            <div className="mb-3">
              <label htmlFor="dateSinistre" className="form-label">
                Date du sinistre
              </label>
              <input
                type="date"
                id="dateSinistre"
                className="form-control"
                value={dateSinistre}
                onChange={(event) => setDateSinistre(event.target.value)}
              />
            </div>
            {dateSinistreError && (
              <div className="alert alert-danger">{dateSinistreError}</div>
            )}

            <div className="mb-3">
              <label htmlFor="description" className="form-label">
                Description du sinistre
              </label>
              <textarea
                id="description"
                className="form-control"
                rows="3"
                value={description}
                onChange={(event) => setDescription(event.target.value)}
              ></textarea>
            </div>
            {descriptionError && (
              <div className="alert alert-danger">{descriptionError}</div>
            )}

            <div className="mb-3">
              <label htmlFor="photos" className="form-label">
                Photos de l'accident
              </label>
              <input
                type="file"
                id="photos"
                className="form-control"
                accept="image/*"
                multiple
                onChange={(event) => setPhotos(event.target.files)}
              />
            </div>
            {photosError && (
              <div className="alert alert-danger">{photosError}</div>
            )}

            <div className="mb-3">
              <h4>Lieu de l'accident</h4>
              <div className="row">
                <div className="col-sm-12 mb-3">
                  <label htmlFor="adresse" className="form-label">
                    Adresse postale
                  </label>
                  <input
                    type="text"
                    id="adresse"
                    className="form-control"
                    value={adresse}
                    onChange={(event) => setAdresse(event.target.value)}
                  />
                </div>
                {adresseError && (
                  <div className="alert alert-danger">{adresseError}</div>
                )}
                <div className="col-sm-2 mb-3">
                  <label htmlFor="codePostal" className="form-label">
                    Code postal
                  </label>
                  <input
                    type="text"
                    id="codePostal"
                    className="form-control"
                    value={codePostal}
                    onChange={(event) => setCodePostal(event.target.value)}
                  />
                </div>
                {codePostalError && (
                  <div className="alert alert-danger">{codePostalError}</div>
                )}
                <div className="col-sm-5 mb-3">
                  <label htmlFor="ville" className="form-label">
                    Ville
                  </label>
                  <input
                    type="text"
                    id="ville"
                    className="form-control"
                    value={ville}
                    onChange={(event) => setVille(event.target.value)}
                  />
                </div>
                {villeError && (
                  <div className="alert alert-danger">{villeError}</div>
                )}

                <div className="col-sm-5 mb-3">
                  <label htmlFor="pays" className="form-label">
                    Pays
                  </label>
                  <input
                    type="text"
                    id="pays"
                    className="form-control"
                    value={pays}
                    onChange={(event) => setPays(event.target.value)}
                  />
                </div>
                {paysError && (
                  <div className="alert alert-danger">{paysError}</div>
                )}
              </div>
            </div>
            <button type="submit" className="btn btn-primary">
              Enregistrer
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default DeclarationSinistre;