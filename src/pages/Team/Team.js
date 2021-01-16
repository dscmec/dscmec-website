import React from 'react';
import { Carousel } from 'react-bootstrap';

import { Member, MemberResponsive } from "./Member";
import rectangle from '../../assets/img/rectangle-icon.jpg'
import './Team.css'

export default function Team() {
    return (
        <>
            <TeamNormal />
            <TeamResponsive />
        </>
    )

}

const TeamNormal = () => {
    let circleIcon = "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Circle_Grey_Solid.svg/1200px-Circle_Grey_Solid.svg.png";
    let link = "https://www.linkedin.com/"
    let Name = "NAME"
    let designation = "designation"

    return (
        <div className="team-normal">
            <h1 className="team-heading">Meet Our Team</h1>
            <div className="lead-container">
                <Member img={circleIcon} link={link} name={Name} designation={designation} />
            </div>
            <div className="web-team-container">
                <h1>Web Team</h1>
                <Member img={circleIcon} link={link} name={Name} designation={designation} />
                <div className="row">
                    <div className="col-lg-3">
                        <Member img={circleIcon} link={link} name={Name} designation={designation} />
                    </div>
                    <div className="col-lg-3">
                        <Member img={circleIcon} link={link} name={Name} designation={designation} />
                    </div>
                    <div className="col-lg-3">
                        <Member img={circleIcon} link={link} name={Name} designation={designation} />
                    </div>
                    <div className="col-lg-3">
                        <Member img={circleIcon} link={link} name={Name} designation={designation} />
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-3">
                        <Member img={circleIcon} link={link} name={Name} designation={designation} />
                    </div>
                    <div className="col-lg-3">
                        <Member img={circleIcon} link={link} name={Name} designation={designation} />
                    </div>
                    <div className="col-lg-3">
                        <Member img={circleIcon} link={link} name={Name} designation={designation} />
                    </div>
                    <div className="col-lg-3">
                        <Member img={circleIcon} link={link} name={Name} designation={designation} />
                    </div>
                </div>
            </div>
            <div className="design-team-container">
                <h1>Design</h1>
                <div className="dtop">
                    <Member img={circleIcon} link={link} name={Name} designation={designation} />
                </div>
                <div className="row dmid">
                    <div className="col-lg-4">
                        <Member img={circleIcon} link={link} name={Name} designation={designation} />
                    </div>
                    <div className="col-lg-4">
                        <Member img={circleIcon} link={link} name={Name} designation={designation} />
                    </div>
                    <div className="col-lg-4">
                        <Member img={circleIcon} link={link} name={Name} designation={designation} />
                    </div>
                </div>
                <div className="row dlow">
                    <div className="col-lg-6">
                        <Member img={circleIcon} link={link} name={Name} designation={designation} />
                    </div>
                    <div className="col-lg-6">
                        <Member img={circleIcon} link={link} name={Name} designation={designation} />
                    </div>
                </div>
            </div>
            <div className="ml-publicity-team-container">
                <div className="row">
                    <div className="col-sm">
                        <h1 className="mheading">ML/AI</h1>
                        <div className="mtop">
                            <Member img={circleIcon} link={link} name={Name} designation={designation} />
                        </div>
                        <div className="row mbottom">
                            <div className="col-sm">
                                <Member img={circleIcon} link={link} name={Name} designation={designation} />
                            </div>
                            <div className="col-sm">
                                <Member img={circleIcon} link={link} name={Name} designation={designation} />
                            </div>
                        </div>
                    </div>
                    <div className="col-sm">
                        <h1 className="pheading">Publicity</h1>
                        <div>
                            <Member img={circleIcon} link={link} name={Name} designation={designation} />
                        </div>
                        <div className="row">
                            <div className="col-sm">
                                <Member img={circleIcon} link={link} name={Name} designation={designation} />
                            </div>
                            <div className="col-sm">
                                <Member img={circleIcon} link={link} name={Name} designation={designation} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flutter-team-container">
                <h1 className="fheading">Flutter</h1>
                <div className="ftop">
                    <Member img={circleIcon} link={link} name={Name} designation={designation} />
                </div>
                <div className="row fmid">
                    <div className="col-lg-4">
                        <Member img={circleIcon} link={link} name={Name} designation={designation} />
                    </div>
                    <div className="col-lg-4">
                        <Member img={circleIcon} link={link} name={Name} designation={designation} />
                    </div>
                    <div className="col-lg-4">
                        <Member img={circleIcon} link={link} name={Name} designation={designation} />
                    </div>
                </div>
                <div className="row flow">
                    <div className="col-lg-6">
                        <Member img={circleIcon} link={link} name={Name} designation={designation} />
                    </div>
                    <div className="col-lg-6">
                        <Member img={circleIcon} link={link} name={Name} designation={designation} />
                    </div>
                </div>
            </div>
            <div className="org-content-marketing-team-container">
                <div class="row">
                    <div class="col-sm">
                        <h1 className="oheading">Organization</h1>
                        <div className="otop">
                            <Member img={circleIcon} link={link} name={Name} designation={designation} />
                        </div>
                    </div>
                    <div class="col-sm">
                        <h1>Content</h1>
                        <div className="ctop">
                            <Member img={circleIcon} link={link} name={Name} designation={designation} />
                        </div>
                        <div className="cbottom">
                            <Member img={circleIcon} link={link} name={Name} designation={designation} />
                        </div>
                    </div>
                    <div class="col-sm">
                        <h1 className="mheading">Marketing</h1>
                        <div className="matop">
                            <Member img={circleIcon} link={link} name={Name} designation={designation} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="social-wtm-team-container">
                <div class="row">
                    <div class="col-sm">
                        <h1>Social Media</h1>
                        <div className="smtop">
                            <Member img={circleIcon} link={link} name={Name} designation={designation} />
                        </div>
                    </div>
                    <div class="col-sm">
                        <h1>WTM</h1>
                        <div className="wttop">
                            <Member img={circleIcon} link={link} name={Name} designation={designation} />
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

const TeamResponsive = () => {
    let link = "https://www.linkedin.com/"
    let Name = "NAME"
    let designation = "designation"

    return (
        <div className="team-responsive">
            <h1 className="team-heading-resp">Meet Our Team</h1>
            <div className="lead-container-resp">
                <MemberResponsive img={rectangle} link={link} name={Name} designation={designation} />
            </div>
            <div className="web-team-container-resp">
                <h1>Web Team</h1>
                <Carousel>
                    <Carousel.Item>
                        <MemberResponsive img={rectangle} link={link} name={Name} designation={designation} />
                    </Carousel.Item>
                    <Carousel.Item>
                        <MemberResponsive img={rectangle} link={link} name={Name} designation={designation} />
                    </Carousel.Item>
                    <Carousel.Item>
                        <MemberResponsive img={rectangle} link={link} name={Name} designation={designation} />
                    </Carousel.Item>
                    <Carousel.Item>
                        <MemberResponsive img={rectangle} link={link} name={Name} designation={designation} />
                    </Carousel.Item>
                </Carousel>
            </div>
        </div>

    )
}