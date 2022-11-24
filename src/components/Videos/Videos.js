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
import { AiFillCloseCircle, AiOutlinePlayCircle } from "react-icons/ai";
import { Box, Modal } from "@mui/material";
import Backdrop from "@mui/material/Backdrop";
function Videos() {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [open, setOpen] = useState(false);
  const [videoId, setVideoId] = useState("");
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
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
      <h1
        className="videos_heading"
        data-aos="slide-up"
        data-aos-duration="500"
      >
        Our Videos
      </h1>
      {videos.map((item, index) => {
        return (
          <>
            <h1
              key={index}
              className="videos_heading_1"
              data-aos="slide-up"
              data-aos-duraion="500"
            >
              {item.title}
            </h1>
            <div
              className="videos"
              data-aos="slide-up"
              key={index}
              data-aos-duration="500"
            >
              {item.yids.map((item1, index1) => {
                return (
                  <div
                    data-aos="slide-up"
                    data-aos-duration="500"
                    key={index1}
                    className="video"
                  >
                    <img
                      src={`https://img.youtube.com/vi/${item1}/0.jpg`}
                      alt=""
                      className="video_iframe_img"
                    />
                    <AiOutlinePlayCircle
                      size={50}
                      className="play_icon"
                      onClick={() => {
                        handleOpen();
                        setVideoId(item1);
                      }}
                    />
                  </div>
                );
              })}
            </div>
          </>
        );
      })}
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
        <Box className="modal_box">
          <AiFillCloseCircle
            size={40}
            color="red"
            onClick={handleClose}
            style={{ cursor: "pointer" }}
          />
          <iframe
            src={`https://www.youtube.com/embed/${videoId}`}
            width="100%"
            height="auto"
            title="DSC MEC Videos"
            frameBorder="0"
            className="video_iframe"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </Box>
      </Modal>
    </div>
  );
}

export default Videos;
