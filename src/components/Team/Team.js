import React, { useEffect, useState } from "react";
import { Member } from "./Member";
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
  const [loading, setLoading] = useState(true);

  useEffect(() => {
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
      setLoading(false);
    }

    getCoreTeam();
  }, []);

  return loading ? (
    <Loader />
  ) : (
    <>
      <TeamNormal coreTeam={coreTeam} />
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
    </div>
  );
};
