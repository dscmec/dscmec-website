import React from "react";

import ripplesYellow from "../../assets/svg/ripples-yellow.svg";
import wavesYellow from "../../assets/svg/waves-yellow.svg";
import shapes from "../../assets/svg/shapes.svg";
import dotTriLeft from "../../assets/svg/dot-tri-left.svg";
import dotTriRight from "../../assets/svg/dot-tri-right.svg";

import "./Focus.css";

function Focus() {
  return (
    <section id="focus">
      <div className="focus">
        <img src={ripplesYellow} alt="" className="ripples-yellow" />
        <img src={wavesYellow} alt="" className="waves-yellow-1" />
        <img src={wavesYellow} alt="" className="waves-yellow-2" />
        <img src={shapes} alt="" className="shapes-1" />
        <img src={shapes} alt="" className="shapes-2" />
        <img src={dotTriLeft} alt="" className="dot-tri-left" />
        <img src={dotTriRight} alt="" className="dot-tri-right" />
        <h1 data-aos="slide-up" data-aos-duration="2000">Our Focus</h1>
        <br />
        <p data-aos="slide-up" data-aos-duration="2000">
          DSC MEC seeks to encourage learning dynamically and provide a boost to
          developers stuck in a rut as well as connecting them with a group of
          like-minded peers to take on larger projects to change things for the
          better.
        </p>
      </div>
    </section>
  );
}

export default Focus;
