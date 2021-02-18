import React, { useState } from "react";
import { NavHashLink as NavLink } from "react-router-hash-link";
import { Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import { GiHamburgerMenu } from "react-icons/gi";

import logo from "../../assets/svg/logo.svg";
import discord from "../../assets/svg/discord.svg";

import "./Navbar.css";

function Navigation() {
  const [tab, setTab] = useState(1);
  const [opacity, setOpacity] = useState(0);

  if (typeof window !== "undefined") {
    window.onscroll = () => {
      let currentScrollPos = window.pageYOffset;
      // let maxScroll = document.body.scrollHeight - window.innerHeight;
      if (currentScrollPos > 0) {
        setOpacity(1);
      } else {
        setOpacity(0);
      }
    };
  }

  return (
    <div className="container-fluid">
      <Navbar expand="lg" fixed="top" style={{ background: "white" }}>
        <Navbar.Brand>
          <NavLink to="/#home" duration={2000}>
            <img
              src={logo}
              alt="Home"
              className="logo-nav"
              style={{ opacity: opacity }}
            />
          </NavLink>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav">
          <GiHamburgerMenu style={{ color: "#808080", fontSize: "1.5rem" }} />
        </Navbar.Toggle>
        <Navbar.Collapse
          className="justify-content-end"
          id="responsive-navbar-nav"
        >
          <Nav className="nav-item">
            <Nav.Link as={Link} to="/#home" className="nav-item">
              <span
                className={tab === 1 ? "tab-selected" : ""}
                onClick={() => setTab(1)}
              >
                Home
              </span>
            </Nav.Link>
            <Nav.Link as={Link} to="/events" className="nav-item">
              <span
                className={tab === 2 ? "tab-selected" : ""}
                onClick={() => setTab(2)}
              >
                Events
              </span>
            </Nav.Link>
            <Nav.Link as={Link} to="/team" className="nav-item">
              <span
                className={tab === 3 ? "tab-selected" : ""}
                onClick={() => setTab(3)}
              >
                Team
              </span>
            </Nav.Link>
            <Nav.Link as={Link} to="/videos" className="nav-item">
              <span
                className={tab === 4 ? "tab-selected" : ""}
                onClick={() => setTab(4)}
              >
                Videos
              </span>
            </Nav.Link>
            <Nav.Link as={Link} to="/#contactus" className="nav-item">
              <span
                className={tab === 5 ? "tab-selected" : ""}
                onClick={() => setTab(5)}
              >
                Contact Us
              </span>
            </Nav.Link>
            <Nav.Link href="https://discord.com/invite/XpQEB5d" target="_blank">
              <img className="discord-container" src={discord} alt="discord" />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default Navigation;
