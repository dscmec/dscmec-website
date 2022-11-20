import { Backdrop, Box, Modal } from "@mui/material";
import React, { useState } from "react";
import { AiFillCloseCircle, AiFillYoutube } from "react-icons/ai";
import { HiOutlineLink } from "react-icons/hi";
import "./EventCard.css";

function EventCard({
  event,
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
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div className="eventCard">
      <div className="event-card-image">
        <div className="image-overlay"></div>
        <img src={`https://drive.google.com/uc?id=${event.img}`} alt="" />
      </div>
      <h1>{title}</h1>
      <div className="card-center">
        <p>{date}</p>
        <p>{time}</p>
      </div>
      <p>{desc}</p>
      <div className="card-bottom">
        <div className="explore_btn" onClick={handleOpen}>
          Explore
        </div>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Box className="modal_box_1">
          <AiFillCloseCircle
            size={40}
            color="red"
            onClick={handleClose}
            style={{ cursor: "pointer" }}
          />
          <div className="modal_content">
            <div className="modal_content_poster">
              <img
                src={`https://drive.google.com/uc?id=${event.img}`}
                className="modal_content_poster"
                alt=""
              />
            </div>
            <div className="modal_content_para">
              <div className="modal_header_text">{event.title}</div>
              <div className="modal_content_text">
                {event.desc}
              </div>
              <div className="modal_buttons">
                {!isArchived && (
                  <div className="register_btn">Register Here</div>
                )}
                {isArchived && youtube && (
                  <div className="youtube_btn">
                    <AiFillYoutube size={25} />
                    YouTube
                  </div>
                )}
                {isArchived && link && (
                  <div className="youtube_btn_1">
                    <HiOutlineLink size={25} />
                    Resources
                  </div>
                )}
              </div>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
}

export default EventCard;
