import React from 'react';
import { Image } from 'react-bootstrap';

import linkedinIcon from "../../assets/img/icon-linkedin.png";
import './Member.css';

function Member(props){
    return(
        <div className="member">
            <Image className="circle-icon" src={props.img} alt="member" />

            <a href={props.link} target="_blank" rel="noreferrer">
                <Image className="ln-icon" src={linkedinIcon} alt="member" /> 
            </a>
        </div>
    )
}

export default Member;