import React from "react";
import Navbar from "../components/Navbar";
import Photo from "../pictures/myphoto.jpg";
import { GoMarkGithub } from "react-icons/go";
import { BsLinkedin, BsInstagram, BsTelegram } from "react-icons/bs";
import "../components/main.css";
import "./about.css";

function About() {
  return (
    <div>
      <Navbar />
      <div className="about-page">
        <h2 id="me">Get to know me :)</h2>
        <img src={Photo} id="aboutphoto" title="My Photo" alt="My_Photo" />
        <h3 id="aboutme">
          Hello, I'm AhrorSHoH Umrzoqov. I'm 19. I'm from Uzbekistan. I'm live
          in Angren, Tashkent region. I am a Frontend programmer. My interest in
          Frontend programming is high.
        </h3>
        <div className="contact">
          <a href="https://github.com/AhrorShoH" target="blank">
            <GoMarkGithub id="icongithub" />
          </a>
          <a href="https://www.linkedin.com/in/umirzakoff-shax/" target="blank">
            <BsLinkedin id="iconlinkedin" />
          </a>
          <a href="https://instagram.com/umirzakoff_shax/" target="blank">
            <BsInstagram id="iconinstagram" />
          </a>
          <a href="https://t.me/umirzakoff_shax/" target="blank">
            <BsTelegram id="icontelegram" />
          </a>
        </div>
      </div>
    </div>
  );
}
export default About;
