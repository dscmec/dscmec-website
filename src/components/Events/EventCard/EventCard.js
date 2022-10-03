import React from "react";
import { AiFillYoutube } from "react-icons/ai";
import { HiOutlineLink } from "react-icons/hi";
import "./EventCard.css";

function EventCard({
  img,
  title,
  date,
  time,
  desc,
  isArchived,
  reglink,
  youtube,
  link,
}) {
  return (
    <div className="eventCard">
      <div className="event-card-image">
        <div className="image-overlay"></div>
        <img src={img} alt="" />
      </div>
      <h1>{title}</h1>
      <div className="card-center">
        <p>{date}</p>
        <p>{time}</p>
      </div>
      <p>{desc}</p>
      <div className="card-bottom">
        {/* {isArchived === false ? (
        <a
          href={reglink}
          target="_blank"
          rel="noreferrer"
          className="register_btn"
        >
          Register Here
        </a>
      ) : (
        (youtube||link) ? (
        youtube?(
        <a href={youtube} className="youtube_btn">
          <AiFillYoutube color="#FF0000" size={40} />
        </a>
      ): (<a  href={link}>
      <HiOutlineLink color="#3667d6" size={45} className="youtube_btn_1"/>
      
    </a>)): (
        <div style={{ width: "50px", height: "50px" }}></div>
      )
      )} */}
        {!isArchived && (
          <a
            href={reglink}
            target="_blank"
            rel="noreferrer"
            className="register_btn"
          >
            Register Here
          </a>
        )}
        {isArchived && youtube && (
          <a href={youtube} className="youtube_btn">
            {" "}
            <AiFillYoutube color="#FF0000" size={40} />
          </a>
        )}
        {isArchived && link && (
          <a href={link} className="youtube_btn_1">
            {" "}
            <HiOutlineLink
              color="#3667d6"
              size={45}
              className="youtube_btn_1"
            />
          </a>
        )}
        {isArchived && !link && !youtube && (
          <div style={{ width: "50px", height: "50px" }}></div>
        )}
      </div>
    </div>
  );
}

export default EventCard;
