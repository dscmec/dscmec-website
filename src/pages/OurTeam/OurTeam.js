import React from "react";
import { useHistory } from "react-router-dom";
import { Button } from "react-bootstrap";

import circles from "../../assets/svg/circles.svg";
import frames from "../../assets/svg/frames.svg";
import frames1 from "../../assets/svg/frames-1.svg";
import shapes1 from "../../assets/svg/shapes-1.svg";
import shapes2 from "../../assets/svg/shapes-2.svg";

import "./OurTeam.css";

function OurTeam() {
  const history = useHistory();
  return (
    <section id="ourteam">
      <div className="ourteam">
        <img src={circles} className="circles" alt="" />
        <img src={frames} className="frames" alt="" />
        <img src={frames1} className="frames-1" alt="" />
        <img src={shapes1} className="shapes-1" alt="" />
        <img src={shapes2} className="shapes-2" alt="" />
        <h1 data-aos="slide-up" data-aos-duration="2000">Our Team</h1>
        <br />
        <p data-aos="slide-up" data-aos-duration="2000">
          The group of high energy individuals banding together to take on the
          world using code and constant vibe checks.
        </p>
        <Button
        data-aos="slide-up" data-aos-duration="2000"
          className="ourteamButton"
          variant="success"
          onClick={() => {
            history.push("/team");
          }}
        >
          MEET THE TEAM
        </Button>
      </div>
    </section>
  );
}

export default OurTeam;
