import React from "react";
import Navbar from "../components/Navbar";
import "./portfolio.css";
import Image from "../pictures/project-img.jpg";
import Race from "../pictures/race.jpg";

function Portfolio() {
  return (
    <div>
      <Navbar />
      <div className="portfolio-page">
        <h2 id="header-portfolio">My Projects</h2>
        <h3 id="about-project">
          Timer and Calculator site. 
          This site has Stopwatch, Counter, State(Props) and Calculator.<br/>
          Skills: ReactJS, JavaScript.
        </h3>
        <img src={Image} id="project1" title="My-Project" alt="My-Project" />
        <a href="https://github.com/AhrorShoH/Race" target="blank">
            <button id="btn-source">Source</button>
        </a>    
        <a href="https://calculator-timer.netlify.app/" target="blank">
            <button id="btn-demo">Demo</button>
        </a>


        <h3 id="about-project2">
          A racing game made in JavaScript.<br/>
          Skills: JavaScript.
        </h3>
        <img src={Race} id="project2" title="My-Project" alt="My-Project" />
        <a href="https://github.com/AhrorShoH/Mini-project" target="blank">
            <button id="btn-source2">Source</button>
        </a>    
        <a href="https://racing-game-js.netlify.app/" target="blank">
            <button id="btn-demo2">Demo</button>
        </a>
        
      </div>
    </div>
  );
}
export default Portfolio;
