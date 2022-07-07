import React from "react";
import Navbar from "../components/Navbar";
import "./portfolio.css";
import Image from "../pictures/project-img.jpg";
import Race from "../pictures/race.jpg";
import Display from "../pictures/display.jpg";

function Portfolio() {
  return (
    <div>
      <Navbar />
      <div className="portfolio-page">
        <h2 id="header-portfolio">Get to know my Portfolio</h2>
        <h3 id="about-project">
          Timer and Calculator site. 
          This site has Stopwatch, Counter, State(Props) and Calculator.<br/>
          Skills: ReactJS, JavaScript.
        </h3>
        <img src={Image} id="project1" title="My-Project" alt="My-Project" />
        <a href="https://github.com/Race/" target="blank">
            <button id="btn-source">Source</button>
        </a>    
        <a href="https://umirzakoffshax.42web.io/" target="blank">
            <button id="btn-demo">Demo</button>
        </a>


        <h3 id="about-project2">
          A racing game made in JavaScript.<br/>
          Skills: JavaScript.
        </h3>
        <img src={Race} id="project2" title="My-Project" alt="My-Project" />
        <a href="https://github.com/Mini-project/" target="blank">
            <button id="btn-source2">Source</button>
        </a>    
        <a href="https://calculator-timer.netlify.app/" target="blank">
            <button id="btn-demo2">Demo</button>
        </a>

        <h3 id="about-project3">
          My PC Screen. 
          <br/>
          Skills: ReactJS.
        </h3>
        <img src={Display} id="project3" title="My-Project" alt="My-Project" />
        <a href="https://github.com/Display/" target="blank">
            <button id="btn-source3">Source</button>
        </a>
        
      </div>
    </div>
  );
}
export default Portfolio;
