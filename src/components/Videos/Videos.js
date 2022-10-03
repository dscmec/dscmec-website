import {
  collection,
  getDocs,
  getFirestore,
  orderBy,
  query,
} from "firebase/firestore";
import { useEffect, useState } from "react";
import firebaseApp from "../../utils/firebase";
import Loader from "../Loader/Loader";
import "./Videos.css";
function Videos() {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);

  async function getVideos() {
    const db = getFirestore(firebaseApp);
    const data = await getDocs(
      query(collection(db, "videos"), orderBy("id", "desc"))
    );
    let videosArray = [];
    data.forEach((doc) => {
      videosArray.push(doc.data());
    });
    setVideos(videosArray);
  }
  useEffect(() => {
    getVideos();
  }, []);
  useEffect(() => {
    if (videos.length > 0) {
      setLoading(false);
    }
  }, [videos]);
  return loading ? (
    <Loader />
  ) : (
    <div className="videos_container">
      <h1 className="videos_heading" data-aos="slide-up" data-aos-duraion="500">
        Our Videos
      </h1>
      {videos.map((item, index) => {
        return (
          <>
            <h1
              key={index}
              className="videos_heading_1"
              data-aos="slide-up"
              data-aos-duraion="4000"
            >
              {item.title}
            </h1>
            <div className="videos" data-aos="slide-up" data-aos-duraion="4000">
              {item.yids.map((item1, index1) => {
                return (
                  <div data-aos="slide-up" data-aos-duraion="4000" key={index1}>
                    {" "}
                    <iframe
                      className="video_iframe"
                      src={item1.replace("watch?v=", "embed/")}
                      title="DSC MEC Videos"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                );
              })}
            </div>
          </>
        );
      })}
    </div>
  );
}

export default Videos;
