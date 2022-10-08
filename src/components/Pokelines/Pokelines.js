import React from "react";
import "./Pokelines.css";

import pokeball from "../../images/pokball.svg";

export default function Pokelines() {
  return (
    <>
      <div className="top-verticle-line">
        <div className="top-img-container">
          <img className="pokeball" src={pokeball} alt="pokemonball" />
        </div>
      </div>
      <div className="bottom-verticle-line">
        <div className="bottom-img-container">
          <img className="pokeball" src={pokeball} alt="pokemonball" />
        </div>
      </div>
    </>
  );
}
