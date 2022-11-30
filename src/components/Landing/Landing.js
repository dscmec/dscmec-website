import React from "react";
import { NavHashLink as Link } from "react-router-hash-link";
import logoFull from "../../assets/svg/logo-full.svg";
import scrollDown from "../../assets/svg/scroll-down.svg";
import mascots from "../../assets/svg/mascots.svg";
import mascotsMobile from "../../assets/svg/mascots-mobile.svg";
import logoMobile from "../../assets/img/logo-mobile.png";
import "./Landing.css";

function Landing() {
  return (
    <section className="landing container-fluid" id="home">
      <div
        className=" d-none d-lg-block landingRight"
        data-aos="fade-up-left"
        data-aos-duration="2000"
      >
        <img className="mascots" src={mascots} alt="Mascots" />
      </div>
      <div className="row">
        <div className="col-lg-8 col-md-12 landingLeft">
          <div
            className="landingLeftHeader"
            data-aos="zoom-in"
            data-aos-duration="2000"
          >
            <img src={logoFull} alt="dsc" />
            <img src={logoMobile} className="logo-mobile" alt="" />
          </div>
          <div
            className="landingLeftInfo"
            data-aos="slide-up"
            data-aos-duration="2000"
          >
            <h4>Helping students bridge the gap between theory and practice</h4>
          </div>
          <div
            className="explore_btn_2"
            data-aos="slide-up"
            data-aos-duration="2000"
            onClick={() => {
              window.open(
                "https://gdsc.community.dev/government-model-engineering-college-thrikkakara/",
                "_blank"
              );
            }}
          >
            Join Now
          </div>
        </div>
      </div>
      <div className="scroll-down" data-aos="slide-up" data-aos-duration="2000">
        <p className="d-none d-md-block d-lg-block d-xl">
          Powered by Google Developers
        </p>
        <Link to="/#announcements" smooth={true} spy="true" duration={2000}>
          <img
            src={scrollDown}
            style={{ pointerEvents: "none" }}
            alt="Scroll Down"
          />
        </Link>
      </div>
      <img
        src={mascotsMobile}
        style={{ pointerEvents: "none" }}
        className="mascots-mobile"
        alt="Mascots"
      />
    </section>
  );
}

export default Landing;
