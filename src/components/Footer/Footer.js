import React from "react";
import "./Footer.css";
import githubLogo from "../../images/github-icon.svg";

export default function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <h1 className="footer-heading">&#169; Christoher Seaman : Pokemon Explorer</h1>
        <div className="triangle"></div>
        <img className="github-icon" src={githubLogo} alt="github logo link to github profile" />
      </div>
    </footer>
  );
}
