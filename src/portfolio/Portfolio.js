import React from "react";
import Navbar from "../components/Navbar";
import "./portfolio.css";
import Image from "../pictures/project-img.jpg";

function Portfolio() {
  return (
    <div>
      <Navbar />
      <div className="portfolio-page">
        <h2 id="header-portfolio">Get to know my Portfolio</h2>
        <img src={Image} id="project1" title="My-Project" alt="My-Project" />
        <h3 id="about-project">
          Timer and Calculator site. 
          This site has Stopwatch, Counter, State(Props) and Calculator.
        </h3>
        <a href="https://calculator-timer.netlify.app/" target="blank">
            <button id="btn-projects">Source</button>
        </a>
      </div>
    </div>
  );
}
export default Portfolio;
