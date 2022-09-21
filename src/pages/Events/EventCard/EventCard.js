import React from 'react'
import {AiFillYoutube} from 'react-icons/ai'
import './EventCard.css'

function EventCard({ img, title, date, time, desc,isArchived ,reglink,youtube}) {
    return (
        <div className="eventCard" >
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
            {(isArchived===false)?(<a href={reglink} target="_blank" rel="noreferrer" className='register_btn'>
          Register Here
        </a>):((youtube)?<a className='youtube_btn' href={youtube}><AiFillYoutube color='#FF0000' size={40}/></a>:<div style={{width:"50px",height:"50px"}}></div>)}
        </div>
    )
}

export default EventCard
