import React from 'react';
import { Image } from 'react-bootstrap';

import linkedinIcon from "../../assets/img/icon-linkedin.png";
import './Member.css';

export const Member = (props) => {
    return (
        <>
            <div className="member">
                <Image className="circle-icon" src={props.img} alt="member" />

                <a href={props.link} target="_blank" rel="noreferrer">
                    <Image className="ln-icon" src={linkedinIcon} alt="member" />
                </a>
            </div>
            <div classname="details">
                <h4><strong>{props.name}</strong></h4>
                <h5>{props.designation}</h5>
            </div>
        </>
    )
}

export const MemberResponsive = (props) => {
    return (
        <>
            <div className="member-responsive">
                <Image className="rect-icon" src={props.img} alt="member" />
            </div>

            <div classname="details-responsive">
                <h4><strong>{props.name}</strong></h4>
                <h5>{props.designation}</h5>
                <a href={props.link} target="_blank" rel="noreferrer">
                    <Image className="ln-icon-resp" src={linkedinIcon} alt="member" />
                </a>
            </div>
        </>
    )
}