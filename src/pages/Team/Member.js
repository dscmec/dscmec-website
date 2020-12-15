import React from 'react';
import { Image } from 'react-bootstrap';

import './Member.css';

function Member(props){
    return(
        <div className="member">
            <Image className="circle-icon" src={props.img} alt="member" />
           
        </div>
    )
}

export default Member;