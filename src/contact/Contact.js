import React from "react";
import "./contact.css";
import { FiGithub, FiLinkedin, FiFacebook, FiInstagram } from "react-icons/fi";
import { FaTelegramPlane } from "react-icons/fa";

function Contact() {
  return (
    <div>
      <div className="icons">
        <a href="https://github.com/AhrorShoH" target="blank">
          <FiGithub id="icongithub" />
        </a>
        <br />
        <a href="https://www.linkedin.com/in/umirzakoff-shax/" target="blank">
          <FiLinkedin id="iconlinkedin" />
        </a>
        <br />
        <a href="https://instagram.com/umirzakoff_shax/" target="blank">
          <FiInstagram id="iconinstagram" />
        </a>
        <br />
        <a href="https://t.me/umirzakoff_shax/" target="blank">
          <FaTelegramPlane id="icontelegram" />
        </a><br/>
        <a href="https://www.facebook.com/Umirzakoff.Shax/" target="blank">
          <FiFacebook id="iconfacebook" />
        </a>
      </div>
      <div className="mail">
        <a href="mailto:umrzoqovahrorbek@gmail.com" id="mail">
          umrzoqovahrorbek@gmail.com
        </a>
      </div>
    </div>
  );
}
export default Contact;
