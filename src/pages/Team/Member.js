import React from 'react';
import { Image } from 'react-bootstrap';

import linkedinIcon from "../../assets/img/icon-linkedin.png";
import './Member.css';

export const Member = (props) => {
<<<<<<< HEAD
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
=======
    return(
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
>>>>>>> d8224dacbfab6b95312e01b1cca0ba50382e8e84
        </>
    )
}

export const MemberResponsive = (props) => {
<<<<<<< HEAD
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
=======
    return(
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
>>>>>>> d8224dacbfab6b95312e01b1cca0ba50382e8e84
