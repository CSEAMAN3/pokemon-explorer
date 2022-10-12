import React from "react";
import "./BattleArena.css";

export default function BattleArena({ getPlayer1Pokemon, getPlayer2Pokemon, handleChange, playerOne, playerTwo }) {
  let isAlive = false;
  let player1Points = 100;
  let player2Points = 100;

  const damage = [5, 10, 15, 20, 25, 30];

  return (
    <div className="battle-arena">
      <div className="battle-container">
        <h2 className="welcome-heading">Welcome to pokemon Battle Arena. Battle pokemon, see who wins!</h2>

        <div className="pokemon-container">
          <div className="player-one-container">
            <form className="player-one-form" onSubmit={getPlayer1Pokemon}>
              <input
                className="search-input"
                onChange={handleChange}
                placeholder="Player 1 pokemon"
                name="name"
                type="text"
              />
              <button className="player1-btn">Confirm</button>
            </form>
            <div className={`player-one-content-container ${playerOne.abilities ? "" : "hide"}`}>
              <h3 className="player-one-pokemon-name">{playerOne.name}</h3>
              <img
                className="player1-img"
                src={playerOne.sprites?.versions?.["generation-v"]["black-white"].animated.front_default}
                alt="playerOne.name"
              />
            </div>
          </div>

          <div className="player-two-container">
            <form className="player-two-form" onSubmit={getPlayer2Pokemon}>
              <input
                className="search-input"
                onChange={handleChange}
                placeholder="Player 2 pokemon"
                name="name"
                type="text"
              />
              <button className="player2-btn">Confirm</button>
            </form>
            <div className={`player-two-content-container ${playerTwo.abilities ? "" : "hide"}`}>
              <h3 className="player-two-pokemon-name">{playerTwo.name}</h3>
              <img
                className="player2-img"
                src={playerTwo.sprites?.versions?.["generation-v"]["black-white"].animated.front_default}
                alt="playerTwo.name"
              />
            </div>
          </div>
        </div>
        <div className="battle-btn-container">
          <button className="battle-btn">battle</button>
        </div>
      </div>
    </div>
  );
}
