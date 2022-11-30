import { collection, getDocs, getFirestore, orderBy, query } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import firebaseApp from "../../utils/firebase";
import EventCard from "../Events/EventCard/EventCard";
import Loader from "../Loader/Loader";
import "./EventHome.css";

function EventHome() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  async function getEvents() {
    const db = getFirestore(firebaseApp);
    const data = await getDocs(query(collection(db, "events"),orderBy("id", "desc")));
    let eventsArray = [];
    data.forEach((doc) => {
      eventsArray.push(doc.data());
    });
    setEvents(eventsArray);
  }
  useEffect(() => {
    getEvents();
  }, []);
  useEffect(() => {
    if (events.length > 0) {
      setLoading(false);
    }
  }, [events]);
  var count = 0;
  function number() {
    for (var i = 0; i < events.length; i++) {
      if (events[i].isArchived === false) {
        count++;
      }
    }
  }
  return loading ? (
    <Loader />
  ) : (
    <div className="events">
      <h1 data-aos="slide-up" data-aos-duration="2000" className="events-heading">
        Events
      </h1>
      <div className="event-container">
        <div className="event-upcoming">
          <h3 data-aos="slide-up" data-aos-duration="2000">
            Upcoming
          </h3>
          <div
            className="upcoming-cards"
            data-aos="slide-up"
            data-aos-duration="2000"
          >
            {number()}
            {count === 0 ? (
              <h4 data-aos="slide-up" data-aos-duration="2000">
                There are no upcoming events right now !!
              </h4>
            ) : (
              events.map((item, index) => {
                if (item.isArchived === false) {
                  return (
                    <EventCard
                      key={index}
                      event={item}
                      img={item.img}
                      title={item.title}
                      time={item.time}
                      date={item.date}
                      desc={item.desc}
                      isArchived={item.isArchived}
                      reglink={item.reglink}
                      youtube={item.youtube}
                      link={item.link}
                    />
                  );
                } else return "";
              })
            )}
          </div>
        </div>
        <div className="event-archive">
          <h3 data-aos="slide-up" data-aos-duration="2000">
            Archive
          </h3>
          <div
            className="archive-cards"
            data-aos="slide-up"
            data-aos-duration="2000"
          >
            {events.slice(0,4).map((item, index) => {
              if (item.isArchived === true) {
                return (
                  <EventCard
                    key={index}
                    event={item}
                    img={item.img}
                    title={item.title}
                    time={item.time}
                    date={item.date}
                    desc={item.desc}
                    isArchived={item.isArchived}
                    reglink={item.reglink}
                    youtube={item.youtube}
                    link={item.link}
                  />
                );
              } else return "";
            })}
          </div>
        </div>
      </div>
      <div className="explore_btn_2"  data-aos="slide-up"
            data-aos-duration="2000" onClick={()=>{
                window.location.href="/events";
            }}>View All</div>
    </div>
  );
}

export default EventHome;
