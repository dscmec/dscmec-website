import React from "react";

import ripplesYellow from "../../assets/svg/ripples-yellow.svg";
import "./Focus.css";

function Focus() {
  return (
    <section id="focus">
      <div className="focus">
        <img src={ripplesYellow} alt="" className="ripples-yellow" />
        <h1>Our Focus</h1>
        <br />
        <p>
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
