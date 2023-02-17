import React from "react";
import About from "./About";
import Contact from "./Contact";
import Menu from "./Menu";
import "../scss/main.scss";
export default function Main() {
  return (
    <main>
      <About />
      <Menu />
      <Contact />
    </main>
  );
}
