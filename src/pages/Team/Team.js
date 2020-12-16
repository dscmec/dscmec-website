import React from 'react';

import Member from "./Member";
import './Team.css'

function Team() {
    let circleIcon = "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Circle_Grey_Solid.svg/1200px-Circle_Grey_Solid.svg.png";
    let link = "https://www.linkedin.com/"
    return (
        <div>
            <h1 className="team-heading">Meet Our Team</h1>
            <div className="lead-container">
                <Member img={circleIcon} link={link}/>
            </div>
            <div className="web-team-container">
                <h1>Web Team</h1>
                    <Member img={circleIcon} link={link}/>
                <div className="row">
                    <div className="col-lg-3">
                        <Member img={circleIcon} link={link}/>
                    </div>
                    <div className="col-lg-3">
                        <Member img={circleIcon} link={link}/>
                    </div>
                    <div className="col-lg-3">
                        <Member img={circleIcon} link={link}/>
                    </div>
                    <div className="col-lg-3">
                       <Member img={circleIcon} link={link}/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-3">
                       <Member img={circleIcon} link={link}/>
                    </div>
                    <div className="col-lg-3">
                       <Member img={circleIcon} link={link}/>
                    </div>
                    <div className="col-lg-3">
                       <Member img={circleIcon} link={link}/>
                    </div>
                    <div className="col-lg-3">
                       <Member img={circleIcon} link={link}/>
                    </div>
                </div>
            </div>
            <div className="design-team-container">
                <h1>Design Team</h1>
                <div>
                   <Member img={circleIcon} link={link}/>
                </div>
                <div className="row">
                    <div className="col-lg-4">
                       <Member img={circleIcon} link={link}/>
                    </div>
                    <div className="col-lg-4">
                       <Member img={circleIcon} link={link}/>
                    </div>
                    <div className="col-lg-4">
                       <Member img={circleIcon} link={link}/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-6">
                       <Member img={circleIcon} link={link}/>
                    </div>
                    <div className="col-lg-6">
                       <Member img={circleIcon} link={link}/>
                    </div>
                </div>
            </div>
            <div className="ml-publicity-team container">
                <div className="row">
                    <div className="col-sm">
                        <h1>ML/Ai</h1>
                        <div>
                           <Member img={circleIcon} link={link}/>
                        </div>
                        <div className="row">
                            <div className="col-sm">
                               <Member img={circleIcon} link={link}/>
                            </div>
                            <div className="col-sm">
                               <Member img={circleIcon} link={link}/>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm">
                        <h1>publicity</h1>
                        <div>
                           <Member img={circleIcon} link={link}/>
                        </div>
                        <div className="row">
                            <div className="col-sm">
                               <Member img={circleIcon} link={link}/>
                            </div>
                            <div className="col-sm">
                               <Member img={circleIcon} link={link}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flutter-team-container">
                <h1>Flutter</h1>
                <div>
                   <Member img={circleIcon} link={link}/>
                </div>
                <div className="row">
                    <div className="col-lg-4">
                       <Member img={circleIcon} link={link}/>
                    </div>
                    <div className="col-lg-4">
                       <Member img={circleIcon} link={link}/>
                    </div>
                    <div className="col-lg-4">
                       <Member img={circleIcon} link={link}/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-6">
                       <Member img={circleIcon} link={link}/>
                    </div>
                    <div className="col-lg-6">
                       <Member img={circleIcon} link={link}/>
                    </div>
                </div>
            </div>
            <div className="org-content-marketing-team-container">
                <div class="row">
                    <div class="col-sm">
                        <h1>Organization</h1>
                        <div>
                           <Member img={circleIcon} link={link}/>
                        </div>
                    </div>
                    <div class="col-sm">
                        <h1>Content</h1>
                        <div>
                           <Member img={circleIcon} link={link}/>
                        </div>
                        <div>
                           <Member img={circleIcon} link={link}/>
                        </div>
                    </div>
                    <div class="col-sm">
                        <h1>Marketing</h1>
                        <div>
                           <Member img={circleIcon} link={link}/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="social-wtm-team-container">
                <div class="row">
                    <div class="col-sm">
                        <h1>Social Media</h1>
                        <div>
                           <Member img={circleIcon} link={link}/>
                        </div>
                    </div>
                    <div class="col-sm">
                        <h1>WTM</h1>
                        <div>
                           <Member img={circleIcon} link={link}/>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Team
