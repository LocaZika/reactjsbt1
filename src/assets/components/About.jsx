import React from "react";
import aboutImg from "../imgs/tablesetting2.jpg";
import "../scss/about.scss";
export default function About() {
  return (
    <>
      <div id="about" className="about">
        <div className="about-img">
          <img src={aboutImg} alt="About" width={600} height={750} />
        </div>
        <div className="about-content">
          <h1>About Catering</h1>
          <br />
          <h5>Tradition since 1889</h5>
          <p className="about-content--history">
            The Catering was founded in blabla by Mr. Smith in lorem ipsum dolor sit amet,
            consectetur adipiscing elit consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
            iruredolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.We only use <span>seasonal</span> ingredients.
          </p>
          <p className="about-content--description">
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
            mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod temporincididunt
            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
            ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        </div>
      </div>
      <hr />
    </>
  );
}
