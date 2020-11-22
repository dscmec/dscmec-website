import React from 'react'
import { Button } from 'react-bootstrap';

import './ContactUs.css'

function OurTeam() {
    return (
        <div className="contactus">
            <h1>Contact US</h1>
            <br />
            <p>
                Posting tips, updates, the occasional tidbit of wisdom and more,
                we are just a few click away at these social media accounts
            </p>
            <Button className="contactusButton" variant="success">
                SAY HI!
            </Button>
        </div>
    )
}

export default OurTeam
