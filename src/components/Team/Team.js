import React, { useEffect, useState } from "react";
import { Carousel } from "react-bootstrap";
import { Member, MemberResponsive } from "./Member";
import "./Team.css";
import firebaseApp from "../../utils/firebase";
import {
  collection,
  getDocs,
  getFirestore,
  orderBy,
  query,
} from "firebase/firestore";
import Loader from "../Loader/Loader";

export default function Team() {
  const [coreTeam, setCoreTeam] = useState([]);
  /*
  const [webTeam, setWebTeam] = useState([]);
  const [appTeam, setAppTeam] = useState([]);
  const [eventsTeam, setEventsTeam] = useState([]);
  const [designTeam, setDesignTeam] = useState([]);
  const [publicityTeam, setPublicityTeam] = useState([]);
  const [contentTeam, setContentTeam] = useState([]);
  */
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    if (coreTeam.length > 0) {
      setLoading(false);
    }
  }, [coreTeam]);
  async function getCoreTeam() {
    const db = getFirestore(firebaseApp);
    const data = await getDocs(
      query(
        collection(db, "/teams/97VDCMk6xdHrjIYm7Yo4/core"),
        orderBy("id", "asc")
      )
    );
    let coreTeamArray = [];
    data.forEach((doc) => {
      coreTeamArray.push(doc.data());
    });
    setCoreTeam(coreTeamArray);
  }
  /*
  async function getWebTeam() {
    const db = getFirestore(firebaseApp);
    const data = await getDocs(
      query(
        collection(db, "/teams/97VDCMk6xdHrjIYm7Yo4/web"),
        orderBy("id", "asc")
      )
    );
    let webTeamArray = [];
    data.forEach((doc) => {
      webTeamArray.push(doc.data());
    });
    setWebTeam(webTeamArray);
  }
  async function getAppTeam() {
    const db = getFirestore(firebaseApp);
    const data = await getDocs(
      query(
        collection(db, "/teams/97VDCMk6xdHrjIYm7Yo4/app"),
        orderBy("id", "asc")
      )
    );
    let appTeamArray = [];
    data.forEach((doc) => {
      appTeamArray.push(doc.data());
    });
    setAppTeam(appTeamArray);
  }
  async function getEventsTeam() {
    const db = getFirestore(firebaseApp);
    const data = await getDocs(
      query(
        collection(db, "/teams/97VDCMk6xdHrjIYm7Yo4/events"),
        orderBy("id", "asc")
      )
    );
    let eventsTeamArray = [];
    data.forEach((doc) => {
      eventsTeamArray.push(doc.data());
    });
    setEventsTeam(eventsTeamArray);
  }
  async function getDesignTeam() {
    const db = getFirestore(firebaseApp);
    const data = await getDocs(
      query(
        collection(db, "/teams/97VDCMk6xdHrjIYm7Yo4/design"),
        orderBy("id", "asc")
      )
    );
    let designTeamArray = [];
    data.forEach((doc) => {
      designTeamArray.push(doc.data());
    });
    setDesignTeam(designTeamArray);
  }
  async function getPublicityTeam() {
    const db = getFirestore(firebaseApp);
    const data = await getDocs(
      query(
        collection(db, "/teams/97VDCMk6xdHrjIYm7Yo4/publicity"),
        orderBy("id", "asc")
      )
    );
    let publicityTeamArray = [];
    data.forEach((doc) => {
      publicityTeamArray.push(doc.data());
    });
    setPublicityTeam(publicityTeamArray);
  }
  async function getContentTeam() {
    const db = getFirestore(firebaseApp);
    const data = await getDocs(
      query(
        collection(db, "/teams/97VDCMk6xdHrjIYm7Yo4/content"),
        orderBy("id", "asc")
      )
    );
    let contentTeamArray = [];
    data.forEach((doc) => {
      contentTeamArray.push(doc.data());
    });
    setContentTeam(contentTeamArray); 
  } */
  useEffect(() => {
    getCoreTeam();
    /*
    getWebTeam();
    getAppTeam();
    getEventsTeam();
    getDesignTeam();
    getPublicityTeam();
    getContentTeam();*/
  }, []);

  return loading ? (
    <Loader />
  ) : (
    <>
      <TeamNormal
        coreTeam={coreTeam}
        /*
        webTeam={webTeam}
        appTeam={appTeam}
        eventsTeam={eventsTeam}
        designTeam={designTeam}
        publicityTeam={publicityTeam}
        contentTeam={contentTeam}
        */
      />
      <TeamResponsive
        coreTeam={coreTeam}
        /*
        webTeam={webTeam}
        appTeam={appTeam}
        eventsTeam={eventsTeam}
        designTeam={designTeam}
        publicityTeam={publicityTeam}
        contentTeam={contentTeam}
        */
      />
    </>
  );
}

const TeamNormal = (props) => {
  return (
    <div className="team-normal">
      <h1 className="team-heading" data-aos="slide-up" data-aos-duration="2000">
        Meet Our Team
      </h1>
      <div
        className="lead-container"
        data-aos="slide-up"
        data-aos-duration="2000"
      >
        {props.coreTeam.map((item, index) => {
          return (
            <Member
              key={index}
              img={item.img}
              link={item.link}
              name={item.name}
              designation={item.designation}
            />
          );
        })}
      </div>

      { /*
      <div
        className="team-container"
        data-aos="slide-up"
        data-aos-duration="2000"
      > 
        <h1 data-aos="slide-up" data-aos-duration="2000">
          Web Team
        </h1>
        <div
          className="lead-container"
          data-aos="slide-up"
          data-aos-duration="2000"
        >
          {props.webTeam.map((item, index) => {
            if (item.isLead === true) {
              return (
                <Member
                  key={index}
                  img={item.img}
                  link={item.link}
                  name={item.name}
                  designation={item.designation}
                />
              );
            } else return null;
          })}
        </div>
        <div className="row" data-aos="slide-up" data-aos-duration="2000">
          {props.webTeam.map((item, index) => {
            if (item.isLead === false) {
              return (
                <Member
                  key={index}
                  img={item.img}
                  link={item.link}
                  name={item.name}
                  designation={item.designation}
                />
              );
            } else return null;
          })}
        </div>
      </div>
      <div
        className="team-container"
        data-aos="slide-up"
        data-aos-duration="2000"
      >
        <h1 data-aos="slide-up" data-aos-duration="2000">
          App Team
        </h1>
        <div
          className="lead-container"
          data-aos="slide-up"
          data-aos-duration="2000"
        >
          {props.appTeam.map((item, index) => {
            if (item.isLead === true) {
              return (
                <Member
                  key={index}
                  img={item.img}
                  link={item.link}
                  name={item.name}
                  designation={item.designation}
                />
              );
            } else return null;
          })}
        </div>
        <div className="row" data-aos="slide-up" data-aos-duration="2000">
          {props.appTeam.map((item, index) => {
            if (item.isLead === false) {
              return (
                <Member
                  key={index}
                  img={item.img}
                  link={item.link}
                  name={item.name}
                  designation={item.designation}
                />
              );
            } else return null;
          })}
        </div>
      </div>
      <div
        className="team-container"
        data-aos="slide-up"
        data-aos-duration="2000"
      >
        <h1 data-aos="slide-up" data-aos-duration="2000">
          Events Team
        </h1>
        <div
          className="lead-container"
          data-aos="slide-up"
          data-aos-duration="2000"
        >
          {props.eventsTeam.map((item, index) => {
            if (item.isLead === true) {
              return (
                <Member
                  key={index}
                  img={item.img}
                  link={item.link}
                  name={item.name}
                  designation={item.designation}
                />
              );
            } else return null;
          })}
        </div>
        <div className="row" data-aos="slide-up" data-aos-duration="2000">
          {props.eventsTeam.map((item, index) => {
            if (item.isLead === false) {
              return (
                <Member
                  key={index}
                  img={item.img}
                  link={item.link}
                  name={item.name}
                  designation={item.designation}
                />
              );
            } else return null;
          })}
        </div>
      </div>
      <div
        className="team-container"
        data-aos="slide-up"
        data-aos-duration="2000"
      >
        <h1 data-aos="slide-up" data-aos-duration="2000">
          Design Team
        </h1>
        {props.designTeam.map((item, index) => {
          if (item.isLead === true) {
            return (
              <Member
                key={index}
                img={item.img}
                link={item.link}
                name={item.name}
                designation={item.designation}
              />
            );
          } else return null;
        })}
        <div className="row" data-aos="slide-up" data-aos-duration="2000">
          {props.designTeam.map((item, index) => {
            if (item.isLead === false) {
              return (
                <Member
                  key={index}
                  img={item.img}
                  link={item.link}
                  name={item.name}
                  designation={item.designation}
                />
              );
            } else return null;
          })}
        </div>
      </div>
      <div
        className="team-container"
        data-aos="slide-up"
        data-aos-duration="2000"
      >
        <h1 data-aos="slide-up" data-aos-duration="2000">
          Publicity Team
        </h1>
        {props.publicityTeam.map((item, index) => {
          if (item.isLead === true) {
            return (
              <Member
                key={index}
                img={item.img}
                link={item.link}
                name={item.name}
                designation={item.designation}
              />
            );
          } else return null;
        })}
        <div className="row" data-aos="slide-up" data-aos-duration="2000">
          {props.publicityTeam.map((item, index) => {
            if (item.isLead === false) {
              return (
                <Member
                  key={index}
                  img={item.img}
                  link={item.link}
                  name={item.name}
                  designation={item.designation}
                />
              );
            } else return null;
          })}
        </div>
      </div>
      <div
        className="team-container"
        data-aos="slide-up"
        data-aos-duration="2000"
      >
        <h1 data-aos="slide-up" data-aos-duration="2000">
          Content Team
        </h1>
        {props.contentTeam.map((item, index) => {
          if (item.isLead === true) {
            return (
              <Member
                key={index}
                img={item.img}
                link={item.link}
                name={item.name}
                designation={item.designation}
              />
            );
          } else return null;
        })}
        <div className="row" data-aos="slide-up" data-aos-duration="2000">
          {props.contentTeam.map((item, index) => {
            if (item.isLead === false) {
              return (
                <Member
                  key={index}
                  img={item.img}
                  link={item.link}
                  name={item.name}
                  designation={item.designation}
                />
              );
            } else return null;
          })}
        </div> 
      </div>
      */}
    </div>
  );
};

const TeamResponsive = (props) => {
  return (
    <div className="team-responsive">
      <h1
        data-aos="slide-up"
        data-aos-duration="2000"
        className="team-heading-resp"
      >
        Meet Our Team
      </h1>
      <div
        className="lead-container-resp"
        data-aos="slide-up"
        data-aos-duration="2000"
      >
        {props.coreTeam.map((item, index) => {
          return (
            <MemberResponsive
              key={index}
              img={item.img}
              link={item.link}
              name={item.name}
              designation={item.designation}
            />
          );
        })}
      </div>
      {/* 
      <div
        className="team-container-resp"
        data-aos="slide-up"
        data-aos-duration="2000"
      > 
        <h1 data-aos="slide-up" data-aos-duration="2000">
          Web Team
        </h1>
        <Carousel>
          {props.webTeam.map((item, index) => {
            return (
              <Carousel.Item key={index}>
                <MemberResponsive
                  img={item.img}
                  link={item.link}
                  name={item.name}
                  designation={item.designation}
                />
              </Carousel.Item>
            );
          })}
        </Carousel>
        </div> 
      <div
        className="team-container-resp"
        data-aos="slide-up"
        data-aos-duration="2000"
      >
        <h1 data-aos="slide-up" data-aos-duration="2000">
          App Team
        </h1>
        <Carousel>
          {props.appTeam.map((item, index) => {
            return (
              <Carousel.Item key={index}>
                <MemberResponsive
                  img={item.img}
                  link={item.link}
                  name={item.name}
                  designation={item.designation}
                />
              </Carousel.Item>
            );
          })}
        </Carousel>
      </div>
      <div
        className="team-container-resp"
        data-aos="slide-up"
        data-aos-duration="2000"
      >
        <h1 data-aos="slide-up" data-aos-duration="2000">
          Events Team
        </h1>
        <Carousel>
          {props.eventsTeam.map((item, index) => {
            return (
              <Carousel.Item key={index}>
                <MemberResponsive
                  img={item.img}
                  link={item.link}
                  name={item.name}
                  designation={item.designation}
                />
              </Carousel.Item>
            );
          })}
        </Carousel>
      </div>
      <div
        className="team-container-resp"
        data-aos="slide-up"
        data-aos-duration="2000"
      >
        <h1 data-aos="slide-up" data-aos-duration="2000">
          Design Team
        </h1>
        <Carousel>
          {props.designTeam.map((item, index) => {
            return (
              <Carousel.Item key={index}>
                <MemberResponsive
                  img={item.img}
                  link={item.link}
                  name={item.name}
                  designation={item.designation}
                />
              </Carousel.Item>
            );
          })}
        </Carousel>
      </div>
      <div
        className="team-container-resp"
        data-aos="slide-up"
        data-aos-duration="2000"
      >
        <h1 data-aos="slide-up" data-aos-duration="2000">
          Publicity Team
        </h1>
        <Carousel>
          {props.publicityTeam.map((item, index) => {
            return (
              <Carousel.Item key={index}>
                <MemberResponsive
                  img={item.img}
                  link={item.link}
                  name={item.name}
                  designation={item.designation}
                />
              </Carousel.Item>
            );
          })}
        </Carousel>
      </div>
      <div
        className="team-container-resp"
        data-aos="slide-up"
        data-aos-duration="2000"
      >
        <h1 data-aos="slide-up" data-aos-duration="2000">
          Content Team
        </h1>
        <Carousel>
          {props.contentTeam.map((item, index) => {
            return (
              <Carousel.Item key={index}>
                <MemberResponsive
                  img={item.img}
                  link={item.link}
                  name={item.name}
                  designation={item.designation}
                />
              </Carousel.Item>
            );
          })}
        </Carousel>
      </div>
        */}
    </div> 
  );
};