import React from "react";
import "../styles/TrustedClients.css";

import hcl from "../assets/hcl.png";
import education from "../assets/education.png";
import railways from "../assets/railways.png";
import nixi from "../assets/nixi.png";
import aviation from "../assets/aviation.png";
import tata from "../assets/tata.png";
import bcpl from "../assets/bcpl.png";
import army from "../assets/indianarmy.png";
import drdo from "../assets/drdo.png";

const clients = [
  { image: hcl, name: "HCL Technologies" },
  { image: education, name: "Ministry of Education" },
  { image: railways, name: "Ministry of Railways" },
  { image: nixi, name: "NIXI" },
  { image: aviation, name: "Aviation Authority" },
  { image: tata, name: "TATA" },
  { image: bcpl, name: "BCPL" },
  { image: army, name: "Indian Army" },
  { image: drdo, name: "DRDO" }
];


function TrustedClients() {
  return (
    <section className="trusted-clients">
      <h2>Trusted Clients</h2>
      <div className="clients-grid">
        {clients.map((client, index) => (
          <div key={index} className="client-card">
            <img src={client.image} alt={client.name} />
          </div>
        ))}
      </div>
    </section>
  );
}

export default TrustedClients;