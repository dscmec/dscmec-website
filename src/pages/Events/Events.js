import React from 'react'

import EventCard from './EventCard/EventCard'
import './Events.css'
import events from '../../data/EventData'
var count=0;
function number()
{
   
    for(var i=0;i<events.length;i++)
    {
        if(events[i].isArchived===false)
        {
            count++;
        }
    }
    console.log(count);
}
function Events() {
    return (
        <div className="events">
            <h1 data-aos="slide-up" data-aos-duration="2000">Events</h1>
            <div className="event-container">
                <div className="event-upcoming">
                    <h3 data-aos="slide-up" data-aos-duration="2000">Upcoming</h3>
                    <div className="upcoming-cards" data-aos="slide-up" data-aos-duration="2000">
                        {number()}
                        {count===0?<h4 data-aos="slide-up" data-aos-duration="2000">There are no upcoming events right now, check back later!</h4>:
                    events.map((item, index) => {
            if(item.isArchived===false){return (
          <EventCard img={item.img} title={item.title} time={item.time} date={item.date} desc={item.desc} isArchived={item.isArchived} reglink={item.reglink} youtube={item.youtube}/>
          );}
      else
      return null;
  }
        )}
                    </div>
                </div>
                <div className="event-archive">
                    <h3 data-aos="slide-up" data-aos-duration="2000">Archive</h3>
                    <div className="archive-cards" data-aos="slide-up" data-aos-duration="2000">
                    {events.map((item, index) => {
              if(item.isArchived===true){return (
            <EventCard img={item.img} title={item.title} time={item.time} date={item.date} desc={item.desc} isArchived={item.isArchived} reglink={item.reglink} youtube={item.youtube}/>
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
