import React from "react";
import "./Home.css";

import { Link } from "react-router-dom";

export default function Home({ handleChange, getPokemon, pokemon }) {
  return (
    <main>
      <div className="main-container">
        <h2 className="main-heading">Explore the world of pokemon!</h2>
        <p className="main-content">Search a pokemon, learn all about it.</p>
        <form onSubmit={getPokemon}>
          <input onChange={handleChange} className="search-input" name="name" placeholder="search pokemon" type="text" />
          <button className="explore-btn" type="submit">
            Explore
          </button>
        </form>
        <div className="pokemon-container">
          <div className="pokemon">
            <h2 className="pokemon-name">{pokemon.name}</h2>
            <img src={pokemon.sprites?.front_default} alt={pokemon.name} />
            <div className="pokemon-info">
              <div className="pokemon-abilities">
                <h3 className="abilities-heading">Abilites</h3>
                {pokemon.abilities?.map((ability, index) => {
                  return <p key={index}>{ability.ability.name}</p>;
                })}
              </div>
              <div className="pokemon-stats">
                <h3 className="stats-heading">Stats</h3>
                {pokemon.stats?.map((stat, index) => {
                  return (
                    <p key={index}>
                      {stat.stat.name} : {stat.base_stat}
                    </p>
                  );
                })}
              </div>
            </div>
          </div>
          <Link to="/battle-arena">
            <button className="battle-btn">Battle Arena</button>
          </Link>
          <Link to="/about">
            <button className="about-btn">About</button>
          </Link>
        </div>
      </div>
    </main>
  );
}
