import React from "react";
import "./Footer.css";
import githubLogo from "../../images/github-icon.svg";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <h1 className="footer-heading">&#169; CWS Pokemon Explorer</h1>
        <div className="triangle"></div>
        <a href="https://github.com/CSEAMAN3" target="_blank" rel="noreferrer">
          <img className="github-icon" src={githubLogo} alt="github logo link to github profile" />
        </a>
      </div>
    </footer>
  );
}
