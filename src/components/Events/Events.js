import {
  collection,
  getDocs,
  getFirestore,
  orderBy,
  query,
} from "firebase/firestore";
import React, { useEffect, useState } from "react";
import firebaseApp from "../../utils/firebase";
import Loader from "../Loader/Loader";
import EventCard from "./EventCard/EventCard";
import "./Events.css";

function Events() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  async function getEvents() {
    const db = getFirestore(firebaseApp);
    const data = await getDocs(
      query(collection(db, "events"), orderBy("id", "desc"))
    );
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
    setLoading(false);
  }, [events]);

  const upcomingEventsCount = events.filter((item) => !item.isArchived).length;

  return loading ? (
    <Loader />
  ) : (
    <div className="events">
      <div
        data-aos="slide-up"
        data-aos-duration="2000"
        className="events-heading"
      >
        Events
      </div>
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
            {upcomingEventsCount === 0 ? (
              <h4 data-aos="slide-up" data-aos-duration="2000">
                There are no upcoming events right now !!
              </h4>
            ) : (
              events
                .filter((item) => !item.isArchived)
                .reverse()
                .map((item, index) => (
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
                ))
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
            {events
              .filter((item) => item.isArchived)
              .reverse()
              .map((item, index) => (
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
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Events;
