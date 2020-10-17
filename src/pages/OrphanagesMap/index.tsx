import React from "react";
import { FiPlus } from "react-icons/fi";
import { Link } from "react-router-dom";

import { location } from "../../assets/data/info.json";
import mapaMarkImage from "../../assets/image/map-marker.svg";
import { Map, TileLayer } from "react-leaflet";

import "leaflet/dist/leaflet.css";
import "../../styles/pages/orphanages.css";

const optionsMap = {
  default: "https://a.tile.openstreetmap.org/{z}/{x}/{y}.png",
  mapbox: `https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`,
};

const OrphanagesMap: React.FC = () => {
  return (
    <div id="page-app">
      <aside>
        <header>
          <img src={mapaMarkImage} alt="Happy" />

          <h2>Escolha um orfanato no mapa</h2>
          <p>Muitass crianças estão esperando a sua visita :)</p>
        </header>

        <footer>
          <strong>{location.city}</strong>
          <strong>{location.state}</strong>
        </footer>
      </aside>

      <Map
        center={[38.7448896, -9.1345474]}
        zoom={15}
        style={{
          width: "100%",
          height: "100%",
        }}
      >
        <TileLayer url={optionsMap.mapbox} />
      </Map>

      <Link to="" className="create-orphanage">
        <FiPlus size={32} color="#FFF" />
      </Link>
    </div>
  );
};

export default OrphanagesMap;
