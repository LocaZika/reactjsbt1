import React from "react";
import "../scss/navigator.scss";

export default function Navigator() {
  return (
    <nav>
      <a href="#home" className="logo">
        Gourmet au Catering
      </a>
      <ul className="navbar">
        <li>
          <a href="#about" className="navbar-link">
            about
          </a>
        </li>
        <li>
          <a href="#menu" className="navbar-link">
            menu
          </a>
        </li>
        <li>
          <a href="#contact" className="navbar-link">
            contact
          </a>
        </li>
      </ul>
    </nav>
  );
}
