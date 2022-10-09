import React from "react";
import "./Home.css";

// images
import fireEnergy from "../images/fire.svg";
import grassEnergy from "../images/grass.svg";
import normalEnergy from "../images/normal.svg";
import waterEnergy from "../images/water.svg";
import electricEnergy from "../images/electric.svg";
import iceEnergy from "../images/ice.svg";
import fightingEnergy from "../images/fighting.svg";
import poisonEnergy from "../images/poison.svg";
import groundEnergy from "../images/ground.svg";
import flyingEnergy from "../images/flying.svg";
import psychicEnergy from "../images/psychic.svg";
import bugEnergy from "../images/bug.svg";
import rockEnergy from "../images/rock.svg";
import ghostEnergy from "../images/ghost.svg";
import dragonEnergy from "../images/dragon.svg";
import darkEnergy from "../images/dark.svg";
import steelEnergy from "../images/steel.svg";
import fairyEnergy from "../images/fairy.svg";
import pokemonRed from "../images/pokemon-red-logo.svg";

import { Link } from "react-router-dom";

export default function Home({ handleChange, getPokemon, pokemon }) {
  const allTypes = {
    fire: fireEnergy,
    grass: grassEnergy,
    normal: normalEnergy,
    water: waterEnergy,
    electric: electricEnergy,
    ice: iceEnergy,
    fighting: fightingEnergy,
    poison: poisonEnergy,
    ground: groundEnergy,
    flying: flyingEnergy,
    psychic: psychicEnergy,
    bug: bugEnergy,
    rock: rockEnergy,
    ghost: ghostEnergy,
    dragon: dragonEnergy,
    dark: darkEnergy,
    steel: steelEnergy,
    fairy: fairyEnergy,
  };

  return (
    <main>
      <div className="main-container">
        <h2 className="main-heading">Explore the world of pokemon!</h2>
        <p className="main-content">Search a pokemon, learn all about it.</p>
        <form className="pokemon-form" onSubmit={getPokemon}>
          <input onChange={handleChange} className="search-input" name="name" placeholder="search pokemon" type="text" />
          <button className="explore-btn" type="submit">
            Explore
          </button>
        </form>
        {/* <div className="pokemon-container"> */}
        <div className="pokemon">
          <h2 className="pokemon-name">{pokemon.name}</h2>
          <img
            className="pokemon-img"
            src={pokemon.sprites?.versions?.["generation-v"]["black-white"].animated.front_default}
            alt={pokemon.name}
          />
          <div className={`pokemon-info ${pokemon.abilities ? "" : "hide"}`}>
            <div className="pokemon-type">
              <h3 className="type-heading">Type</h3>
              {pokemon.types?.map((type, index) => {
                return (
                  <div className="type-icon-container" key="index">
                    {/* <p className="pokemon-type"> */}
                    {/* {type.type.name} */}
                    {/* {allTypes.type.name} */}
                    {/* </p> */}
                    <img className="energy-balls" src={allTypes[type.type.name]} alt="pokemon energy" />
                  </div>
                );
              })}
            </div>
            <div className="pokemon-abilities">
              <h3 className="abilities-heading">Abilites</h3>
              {pokemon.abilities?.map((ability, index) => {
                return (
                  <p className="abilities-info" key={index}>
                    {ability.ability.name}
                  </p>
                );
              })}
            </div>
            <div className="pokemon-stats">
              <h3 className="stats-heading">Stats</h3>
              {pokemon.stats?.map((stat, index) => {
                return (
                  <p className="stat-info" key={index}>
                    {stat.stat.name} : {stat.base_stat}
                  </p>
                );
              })}
            </div>
          </div>
        </div>
        <div className="battle-arena-container">
          <Link to="/battle-arena">
            <p className="battle-play-heading">Play Now</p>
            <img className="battle-logo" src={pokemonRed} alt="pokemon logo red" />
          </Link>
          <h4 className="battle-arena-logo-heading">Battle Arena</h4>
        </div>
        <Link to="/about">
          <button className="about-btn">About</button>
        </Link>
      </div>
      {/* </div> */}
    </main>
  );
}
