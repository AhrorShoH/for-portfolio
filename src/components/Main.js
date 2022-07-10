import React from "react";
import { GoMarkGithub } from "react-icons/go";
import { BsLinkedin, BsInstagram, BsTelegram } from "react-icons/bs";
import Photo from "../pictures/my-photo.jpg";
import "./main.css";

function Main() {
  return (
    <div className="main">
      <img src={Photo} id="myphoto" title="My Photo" alt="My_Photo"/>
      <h1 id="name" className="react-reveal fadeInUp title">
        Hi, I'm AHRORSHOH
      </h1>
      <br />
      <h3 id="about">
        I'm a Frontend Developer from Tashkent region, Uzbekistan.
      </h3>      
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
  );
}
export default Main;

