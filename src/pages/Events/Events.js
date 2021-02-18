import React from 'react'

import EventCard from './EventCard/EventCard'
import './Events.css'


const img = 'https://api.time.com/wp-content/uploads/2016/06/game-of-thrones-episode-9-4.jpg'
const desc = 'It is a long established fact that a reader will be distracted by the readable...'

function Events() {
    return (
        <div className="events">
            <h1>Events</h1>
            <div className="event-container">
                <div className="event-upcoming">
                    <h3>Upcoming</h3>
                    <div className="upcoming-cards">
                        <EventCard img={img} title="TITLE" time="8pm" date="FEB 21" desc={desc}/>
                        <EventCard img={img} title="TITLE" time="8pm" date="FEB 21" desc={desc}/>
                        <EventCard img={img} title="TITLE" time="8pm" date="FEB 21" desc={desc}/>
                        <EventCard img={img} title="TITLE" time="8pm" date="FEB 21" desc={desc}/>
                    </div>
                </div>
                <div className="event-archive">
                    <h3>Archive</h3>
                    <div className="archive-cards">
                        <EventCard img={img} title="TITLE" time="8pm" date="FEB 21" desc={desc}/>
                        <EventCard img={img} title="TITLE" time="8pm" date="FEB 21" desc={desc}/>
                        <EventCard img={img} title="TITLE" time="8pm" date="FEB 21" desc={desc}/>
                        <EventCard img={img} title="TITLE" time="8pm" date="FEB 21" desc={desc}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Events
