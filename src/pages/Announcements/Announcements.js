import React, { useState, useEffect } from "react";

import wavesYellow from "../../assets/svg/waves-yellow.svg";
import "./Announcements.css";

function AnnouncementItem({ date, info, variant }) {
  let colorVariant = "";
  if (variant % 4 === 1) colorVariant = "#e05252";
  else if (variant % 4 === 2) colorVariant = "#fbbc04";
  else if (variant % 4 === 3) colorVariant = "#4285f4";
  else colorVariant = "#0f9d58";

  return (
    <div className="announcement-item-container">
      <div
        className="announcement-item-left"
        style={{ background: colorVariant }}
      >
        <span>{date}</span>
      </div>
      <hr
        className="announcement-item-join"
        style={{
          background: colorVariant,
          border: `1px solid ${colorVariant}`,
        }}
      />
      <div
        className="announcement-item-right"
        style={{ border: `2px solid ${colorVariant}` }}
      >
        <span>{info}</span>
      </div>
      <div className="announcement-item-chain" />
    </div>
  );
}

function Announcements() {
  const [announcements, setAnnouncements] = useState([]);
  useEffect(() => {
    fetch("/dscmec-website/announcements.json")
      .then((res) => res.json())
      .then((data) => {
        let truncatedData = [];
        for (let i = 0; i < 4; i++) truncatedData.push(data.announcements[i]);
        setAnnouncements(truncatedData);
      });
  }, []);
  return (
    <section className="container-fluid announcements" id="announcements">
      <div className="col-lg-12 col-md-12 announcements-left">
        <div className="announcements-header">
          <h1>Announcements</h1>
        </div>
        <div className="announcements-body">
          {announcements.map((item, index) => {
            return (
              <AnnouncementItem {...item} key={index} variant={index + 1} />
            );
          })}
        </div>
      </div>
      <img className="waves-yellow-1" src={wavesYellow} alt="" />
      <img className="waves-yellow-2" src={wavesYellow} alt="" />
    </section>
  );
}

export default Announcements;
