import {
  collection,
  getDocs,
  getFirestore,
  orderBy,
  query,
} from "firebase/firestore";
import React, { useEffect, useRef, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import firebaseApp from "../../utils/firebase";
import Loader from "../Loader/Loader";
import "./Execomm.css";
import { Member, MemberResponsive } from "./Member";
import "./Team.css";

export default function Team() {
  const [coreTeam, setCoreTeam] = useState([]);
  const [year, setYear] = useState("2022-2023");
  const years = ["2022-2023"];
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
    getCoreTeam();
  }, [year]);
  useEffect(() => {
    if (coreTeam.length > 0) {
      setLoading(false);
    }
  }, [coreTeam]);
  async function getCoreTeam() {
    const db = getFirestore(firebaseApp);
    const data = await getDocs(
      query(collection(db, `/execomm/${year}/core-team`), orderBy("id", "asc"))
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
        year={year}
        years={years}
        setYear={setYear}
        getCoreTeam={getCoreTeam}
        loading={loading}
        setLoading={setLoading}
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
        year={year}
        years={years}
        setYear={setYear}
        getCoreTeam={getCoreTeam}
        loading={loading}
        setLoading={setLoading}
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
  const [show, setShow] = useState(false);
  const ref = useRef(null);

  const handleClickOutside = (event) => {
    if (ref.current && !ref.current.contains(event.target)) {
      setShow(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div className="team-normal execomm-special">
      <h1 className="team-heading" data-aos="slide-up" data-aos-duration="2000">
        Ex-Executive Committee
      </h1>
      {props.loading ? (
        <Loader />
      ) : (
        <>
          <div ref={ref} className="year-select-options-container">
            <div onClick={() => setShow(!show)} className="year-select-title">
              <h2>{props.year}</h2>
              <IoIosArrowDown size={40} />
            </div>
            {show ? (
              <ul data-aos="fade-down" className="year-select-options">
                {props.years.map((item, index) => {
                  return (
                    <li
                      key={index}
                      onClick={() => {
                        if (item !== props.year) {
                          props.setYear(item);
                          props.setLoading(true);
                        }
                      }}
                    >
                      {item}
                    </li>
                  );
                })}
              </ul>
            ) : null}
          </div>
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
          {/*
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
        </>
      )}
    </div>
  );
};

const TeamResponsive = (props) => {
  const [show, setShow] = useState(false);
  const ref = useRef(null);

  const handleClickOutside = (event) => {
    if (ref.current && !ref.current.contains(event.target)) {
      setShow(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div className="team-responsive execomm-special">
      <h1
        data-aos="slide-up"
        data-aos-duration="2000"
        className="team-heading-resp"
      >
        Ex-Executive Committee
      </h1>
      {props.loading ? (
        <Loader />
      ) : (
        <>
          <div ref={ref} className="year-select-options-container">
            <div onClick={() => setShow(!show)} className="year-select-title">
              <h2>{props.year}</h2>
              <IoIosArrowDown size={25} />
            </div>
            {show ? (
              <ul data-aos="fade-down" className="year-select-options">
                {props.years.map((item, index) => {
                  return (
                    <li
                      key={index}
                      onClick={() => {
                        if (item !== props.year) {
                          props.setYear(item);
                          props.setLoading(true);
                        }
                      }}
                    >
                      {item}
                    </li>
                  );
                })}
              </ul>
            ) : null}
          </div>
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
        </>
      )}
    </div>
  );
};
