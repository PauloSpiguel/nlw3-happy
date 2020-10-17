import React from "react";
import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";
import logoImg from "../../assets/image/logo.svg";

import { location } from "../../assets/data/info.json";

import "../../styles/pages/landing.css";

const Landing: React.FC = () => {
  return (
    <div id="page-landing">
      <div className="content-wrapper">
        <img src={logoImg} alt="Happy" />

        <main>
          <h1>Leve felicidade para o mundo</h1>
          <p>Visite orfanatos e mude o dia de muitas crianças.</p>
        </main>

        <div className="location">
          <strong>{location.city}</strong>
          <span>{location.state}</span>
        </div>

        <Link to="/app" className="enter-app">
          <FiArrowRight size={24} color="rgba(0,0,0,0.6)" />
        </Link>
      </div>
    </div>
  );
};

export default Landing;
