import React from 'react'

import './EventCard.css'

function EventCard({ img, title, date, time, desc }) {
    return (
        <div className="eventCard">
            <div className="event-card-image">
                <div className="image-overlay"></div>
                <img src={img} alt=""/>
            </div>
            <h1>{title}</h1>
            <div className="card-center">
                <p>{date}</p>
                <p>{time}</p>
            </div>
            <p>{desc}</p>
        </div>
    )
}

export default EventCard
