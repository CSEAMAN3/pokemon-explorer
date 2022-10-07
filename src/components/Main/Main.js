import React from "react";
import "./Main.css";

export default function Main({ handleChange, getPokemon, pokemon }) {
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
                {pokemon.abilities?.map((ability, index) => {
                  return <p key={index}>{ability.ability.name}</p>;
                })}
              </div>
              <div className="pokemon-stats">
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
        </div>
      </div>
    </main>
  );
}
