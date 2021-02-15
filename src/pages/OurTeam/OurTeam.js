import React from "react";
import { useHistory } from "react-router-dom";
import { Button } from "react-bootstrap";

import "./OurTeam.css";

function OurTeam() {
  const history = useHistory();
  return (
    <div className="ourteam">
      <h1>Our Team</h1>
      <br />
      <p>
        The group of high energy individuals banding together to take on the
        world using code and constant vibe checks.
      </p>
      <Button
        className="ourteamButton"
        variant="success"
        onClick={() => {
          history.push("/team");
        }}
      >
        MEET THE TEAM
      </Button>
    </div>
  );
}

export default OurTeam;
