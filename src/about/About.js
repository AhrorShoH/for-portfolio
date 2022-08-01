import React from "react";
import Navbar from "../components/Navbar";
import Photo from "../pictures/my-photo.jpg";
import "../components/main.css";
import "./about.css";

function About() {
  return (
    <div>
      <Navbar />
      <div className="about-page">
        <img src={Photo} id="aboutphoto" title="My Photo" alt="My_Photo" />
        <h4 id="aboutme">
          I’m a passionate frontend developer based in the Angren, Uzbekistan.
        </h4>
        <h6 id="interest">
          My interests: Coding and Listening music.
          <br />I like to acquire new knowledge and create something new every
          day. <br/><br/>Skills I'm using:
        </h6>,
        <h6 id="skills">▶&nbsp; HTML<br/><br/>▶&nbsp; CSS<br/><br/>▶&nbsp; Bootstrap<br/><br/><p>▶&nbsp; JavaScript (ES6+)<br/><br/>
        ▶&nbsp; ReactJS<br/><br/>▶&nbsp; Git, GitHub</p></h6>
      </div>
    </div>
  );
}
export default About;
