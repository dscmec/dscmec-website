import React from "react";

import footerBackground from "../../assets/svg/footer.svg";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <img className="footer-background" src={footerBackground} alt="" />
    </div>
  );
}

export default Footer;
