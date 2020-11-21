import React from 'react';
import { Button } from 'react-bootstrap';

import logo from '../../assets/img/logo.svg';
import logoFull from '../../assets/svg/logo-full.svg';
import scrollDown from '../../assets/svg/scroll-down.svg';
import mascots from '../../assets/svg/mascots.svg';

import './Landing.css';


function Landing() {
    return (
        <section className="landing container-fluid">
            <div className=" d-none d-lg-block landingRight">
                <img className="mascots" src={mascots} alt="Mascots" />
            </div>
            <div className="row">
                <div className="col-lg-8 col-md-12 landingLeft">
                        <div className="landingLeftHeader">
                            <img src={logoFull} alt="dsc" />
                        </div>
                        <div className="landingLeftInfo">
                            <h4>Helping students bridge the gap between theory and practice</h4>
                        </div>
                        <Button className="joinButton" variant="success">
                                JOIN NOW
                        </Button>
                </div>
            </div>
            <div className="scroll-down">
                <p className="d-none d-md-block d-lg-block d-xl">Powered by Google Developers</p>
                <img src={scrollDown} alt="Scroll Down" />
            </div>
        </section>
    );
}

export default Landing;