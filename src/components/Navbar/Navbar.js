import React, { useState } from "react";
import { NavHashLink as HashLink } from "react-router-hash-link";
import { Link, NavLink } from "react-router-dom";
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
          <HashLink to="/#home" duration={2000}>
            <img
              src={logo}
              alt="Home"
              className="logo-nav"
              style={{ opacity: opacity }}
            />
          </HashLink>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav">
          <GiHamburgerMenu style={{ color: "#808080", fontSize: "1.5rem" }} />
        </Navbar.Toggle>
        <Navbar.Collapse
          className="justify-content-end"
          id="responsive-navbar-nav"
        >
          <Nav className="nav-item">
            <NavLink as={Link} to="/" className="nav-item">
                Home
            </NavLink>
            <NavLink as={Link} to="/events" className="nav-item" activeStyle={{borderBottom:'2px solid #4285f4'}}>
                Events
            </NavLink>
            <NavLink as={Link} to="/team" className="nav-item" activeStyle={{borderBottom:'2px solid #4285f4'}}>
                Team
            </NavLink>
            <NavLink as={Link} to="/videos" className="nav-item" activeStyle={{borderBottom:'2px solid #4285f4'}}>
                Videos
            </NavLink>
            <NavLink as={Link} to="/#contactus" className="nav-item" >
                Contact Us
            </NavLink>

            <a href="https://discord.com/invite/XpQEB5d" target="_blank" rel="noreferrer">
              <img className="discord-container" src={discord} alt="discord" />
            </a>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default Navigation;
