import React from 'react'

import EventCard from './EventCard/EventCard'
import './Events.css'
import events from '../../data/EventData'


function Events() {
    return (
        <div className="events">
            <h1>Events</h1>
            <div className="event-container">
                <div className="event-upcoming">
                    <h3>Upcoming</h3>
                    <div className="upcoming-cards">
                    {events.map((item, index) => {
              if(item.isArchived===false){return (
            <EventCard img={item.img} title={item.title} time={item.time} date={item.date} desc={item.desc}/>
            );}
        else
        return null;
    }
          )}
                    </div>
                </div>
                <div className="event-archive">
                    <h3>Archive</h3>
                    <div className="archive-cards">
                    {events.map((item, index) => {
              if(item.isArchived===true){return (
            <EventCard img={item.img} title={item.title} time={item.time} date={item.date} desc={item.desc}/>
            );}
        else
        return null;
    }
          )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Events
