import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Navbar, Nav } from 'react-bootstrap';
import { GiHamburgerMenu } from "react-icons/gi";


import logo from '../../assets/img/logo.svg';
import discord from '../../assets/svg/discord.svg';

import './Navbar.css'


function Navigation(){
    return(
            <div className="container-fluid">
                <Navbar expand="lg" fixed="top" style={ {"background":"white"} }>
                    <Navbar.Brand href="#home">
                        <img src={ logo } alt="Home"/>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav"> <GiHamburgerMenu style={{color: "#808080", fontSize: "1.5rem"}}/> </Navbar.Toggle>
                    <Navbar.Collapse className="justify-content-end" id="responsive-navbar-nav">
                    <Nav className="nav-item">
                        <Nav.Link as={Link} to="/" className="nav-item">
                            Home
                        </Nav.Link>
                        <Nav.Link href="#events" className="nav-item">
                            Events
                        </Nav.Link>
                        <Nav.Link as={Link} to="/team" className="nav-item">
                            Team
                        </Nav.Link>
                        <Nav.Link  as={Link} to="/videos" className="nav-item">
                            Videos
                        </Nav.Link>
                        <Nav.Link as={Link} to="/contact" className="nav-item">
                            Contact Us
                        </Nav.Link>
                        <Nav.Link href="https://discord.com/" target="_blank">
                                <img className="discord-container" src={ discord } alt="Home"/>
                        </Nav.Link>
                    </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
      
    );
}

export default Navigation;