import React, { useState, useEffect } from "react";

const Services = ({ adresse, codePostal, ville, pays }) => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    const fetchServices = async () => {
      const response = await fetch(
        "http://localhost/assuerplus/searchServices.php",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ adresse, codePostal, ville, pays }),
        }
      );
      const data = await response.json();
      setServices(data);
    };

    fetchServices();
  }, [adresse, codePostal, ville, pays]);

  useEffect(() => {
    console.log("setService ->", services);
  }, [services]);

  return (
    <div>
      <h3 className="display-6">Service de remorquage le(s) plus proche(s)</h3>
      {services.hasOwnProperty("servicesRemorquage") &&
      services.servicesRemorquage.length > 0 ? (
        <div>
          <div>
            {services.servicesRemorquage.map((service_occ) => (
              <div key={service_occ.id}>
                <div className="card my-3">
                  <div className="card-header bg-primary text-white">
                    {service_occ.nom}
                  </div>
                  <div className="card-body">
                    <p>
                      <strong>Adresse :</strong> {service_occ.adresse}
                    </p>
                    <p>
                      <strong>Code postal :</strong> {service_occ.code_postal}
                    </p>
                    <p>
                      <strong>Ville :</strong> {service_occ.ville}
                    </p>
                    <p>
                      <strong>Pays :</strong> {service_occ.pays}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <p>Aucun service trouvé</p>
      )}
      <br />
      <h3 className="display-6">Service de réparation le(s) plus proche(s)</h3>
      {services.hasOwnProperty("servicesReparation") &&
      services.servicesReparation.length > 0 ? (
        <div>
          <div>
            {services.servicesRemorquage.map((service_occ) => (
              <div key={service_occ.id}>
                <div className="card my-3">
                  <div className="card-header bg-success text-white">
                    {service_occ.nom}
                  </div>
                  <div className="card-body">
                    <p>
                      <strong>Adresse :</strong> {service_occ.adresse}
                    </p>
                    <p>
                      <strong>Code postal :</strong> {service_occ.code_postal}
                    </p>
                    <p>
                      <strong>Ville :</strong> {service_occ.ville}
                    </p>
                    <p>
                      <strong>Pays :</strong> {service_occ.pays}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <p>Aucun service trouvé</p>
      )}
    </div>
  );
};

export default Services;
