import React from "react";
import hamburger from "../assets/imgs/hamburger.jpg";
import "../assets/scss/header.scss";

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
