import React from 'react'
import { Button } from 'react-bootstrap';

import './OurTeam.css'

function OurTeam() {
    return (
        <div className="ourteam">
            <h1>Our Team</h1>
            <br />
            <p>
                The group of high energy individuals banding together to take on the world 
                using code and contsant vibe checks.
            </p>
            <Button className="ourteamButton" variant="success">
                MEET THE TEAM
            </Button>
        </div>
    )
}

export default OurTeam
