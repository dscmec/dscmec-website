import React from "react";
import { Button } from "react-bootstrap";

import dotTri from "../../assets/svg/dot-tri.svg";
import objects from "../../assets/svg/objects.svg";
import triangles from "../../assets/svg/triangles.svg";
import shapes2 from "../../assets/svg/shapes-2.svg";

import "./ContactUs.css";

function OurTeam() {
  return (
    <section id="contactus">
      <div className="contactus">
        <img src={objects} className="objects" alt="" />
        <img src={dotTri} className="dot-tri" alt="" />
        <img src={triangles} className="triangles" alt="" />
        <img src={shapes2} className="shapes-2" alt="" />
        <h1>Contact US</h1>
        <br />
        <p>
          Posting tips, updates, the occasional tidbit of wisdom and more, we
          are just a few click away at these social media accounts.
        </p>
        <Button className="contactusButton" variant="success">
          SAY HI!
        </Button>
      </div>
    </section>
  );
}

export default OurTeam;
