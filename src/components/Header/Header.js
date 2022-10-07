import React from "react";
import "./Header.css";
import logo from "../images/pokelogo.svg";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <Link to="/">
          <img className="logo" src={logo} alt="logo" />
          <h2 className="header-heading">explorer</h2>
        </Link>
      </div>
    </header>
  );
}
