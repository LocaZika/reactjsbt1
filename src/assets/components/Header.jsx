import React from "react";
import hamburger from "../imgs/hamburger.jpg";
import "../scss/header.scss";

export default function header() {
  return (
    <header id="home" className="home">
      <img src={hamburger} alt="hamburger" width="1600" height="800" />
      <div className="home--brand">
        <h1>le catering</h1>
      </div>
    </header>
  );
}
