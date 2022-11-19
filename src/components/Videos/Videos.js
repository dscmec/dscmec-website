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
function Videos() {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [open, setOpen] = useState(false);
  const [videoId, setVideoId] = useState("");
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "fit-content",
    display:"flex",
    flexDirection:"column",
    alignItems:"flex-end",
    height: "fit-content",
    borderRadius: "10px",
    bgcolor: "background.paper",
    border: "none",
    outline:"none",
    rowGap:"1rem",
    boxShadow: 24,
    p: 3,
  };
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
                  <div
                    data-aos="slide-up"
                    data-aos-duraion="4000"
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
      >
        <Box sx={style}>
        <AiFillCloseCircle size={40} color="red" onClick={handleClose} style={{cursor:"pointer"}}/>
          <object
            data={`https://www.youtube.com/embed/${videoId}`}
            width="100%"
            height="auto"
            title="DSC MEC Videos"
            frameBorder="0"
            className="video_iframe"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></object>
        </Box>
      </Modal>
    </div>
  );
}

export default Videos;
