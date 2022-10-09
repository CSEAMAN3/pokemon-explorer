import "./reset.css";
import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home";
import Pokelines from "./components/Pokelines/Pokelines";
import BattleArena from "./pages/BattleArena";
import About from "./pages/About";

import axios from "axios";
import { useState } from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [pokemon, setPokemon] = useState({});
  const [form, setForm] = useState({ name: "" });

  const handleChange = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
    console.log(event.target.value);
  };

  const getPokemon = async (event) => {
    event.preventDefault();
    // const API = `http://localhost:8080/pokemon/${form.name}`;
    const API = `https://pokeapi.co/api/v2/pokemon/${form.name.toLowerCase()}`;
    const res = await axios.get(API);
    setPokemon(res.data);
  };

  return (
    <BrowserRouter>
      <div className="App">
        <div className="container">
          <Pokelines />
          <Header />
          <Routes>
            <Route path="/" element={<Home handleChange={handleChange} getPokemon={getPokemon} pokemon={pokemon} />} />
            <Route path="/battle-arena" element={<BattleArena />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
