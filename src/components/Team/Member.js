import React from "react";
import { Image } from "react-bootstrap";

import linkedinIcon from "../../assets/img/icon-linkedin.png";
import "./Member.css";

export const Member = (props) => {
  return (
    <>
      <div className="member">
        {props.link && (
          <a
            href={props.link}
            target="_blank"
            rel="noreferrer"
            style={{ position: "absolute", top: "-20px" }}
          >
            <Image className="ln-icon" src={linkedinIcon} alt="member" />
          </a>
        )}

        <Image
          className="circle-icon"
          //  src={`https://drive.google.com/uc?id=${props.img}`}
          src={`https://ik.imagekit.io/ElegantFalcon/Approved-crying-cat-meme-437aqu.jpg?updatedAt=1700311166008`}

          alt="member"
        />

        <div className="details">
          <h4>{props.name}</h4>
          <h5>{props.designation}</h5>
        </div>
      </div>
    </>
  );
};

export const MemberResponsive = (props) => {
  return (
    <>
      <div className="member-responsive">
        {props.link && (
          <a
            href={props.link}
            target="_blank"
            rel="noreferrer"
            style={{ position: "absolute", top: "-20px" }}
          >
            <Image className="ln-icon-resp" src={linkedinIcon} alt="member" />
          </a>
        )}
        <Image
          className="rect-icon"
          src={`${props}`}
          alt="member"
        />

        <h4>{props.name}</h4>
        <h5>{props.designation}</h5>
      </div>
    </>
  );
};
