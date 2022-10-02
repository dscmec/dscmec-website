import React from "react";

import {
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";

import footerBackground from "../../assets/svg/footer.svg";
import logo from "../../assets/svg/logo.svg";
import "./Footer.css";

 function Footer() {
  return (
    <div className="footer">
      <img className="footer-background" src={footerBackground} alt="" />
      <div className="footer-container">
        <div className="footer-icons">
          <a
            href="https://www.instagram.com/dscmec/"
            target="_blank"
            rel="noreferrer noopener"
          >
            <FaInstagram className="f-icon" />
          </a>
          <a
            href="https://www.youtube.com/channel/UC3sLPfRwlw6ytRtYT91XKWQ/featured"
            target="_blank"
            rel="noreferrer noopener"
          >
            <FaYoutube className="f-icon" />
          </a>
          <a
            href="https://twitter.com/dsc_mec"
            target="_blank"
            rel="noreferrer noopener"
          >
            <FaTwitter className="f-icon" />
          </a>
          <a
            href="https://www.linkedin.com/showcase/dscmec/"
            target="_blank"
            rel="noreferrer noopener"
          >
            <FaLinkedinIn className="f-icon" />
          </a>
        </div>
        <div className="footer-copyright">
          ©
          <div>
            <img src={logo} className="footer-logo" alt="" />
          </div>
          Developer Student Clubs MEC {new Date().getFullYear()}
        </div>
      </div>
    </div>
  );
}

export default Footer;
