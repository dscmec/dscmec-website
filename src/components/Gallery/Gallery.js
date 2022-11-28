import React, { useCallback, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import "./Gallery.css";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { doc, getDoc, getFirestore, query } from "firebase/firestore";
import firebaseApp from "../../utils/firebase";
export default function Gallery() {
  const [swiperRef, setSwiperRef] = useState();
  const [gallery, setGallery] = useState([]);
  const handleLeftClick = useCallback(() => {
    if (!swiperRef) return;
    swiperRef.slidePrev();
  }, [swiperRef]);

  const handleRightClick = useCallback(() => {
    if (!swiperRef) return;
    swiperRef.slideNext();
  }, [swiperRef]);
  async function getGallery() {
    const db = getFirestore(firebaseApp);
    const data = await getDoc(
      query(doc(db, "gallery", "SY8duBxREVJWWsrGKAvV"))
    );
    setGallery(data.data());
  }
  useEffect(() => {
    getGallery();
  }, []);
  console.log(gallery);
  return (
    <>
      <div className="gallery-container">
        <div
          data-aos="slide-up"
          data-aos-duration="2000"
          className="gallery-heading"
        >
          Gallery
        </div>
        <div className="gallery-container-1">
          <ArrowBackIosIcon
            className="gallery-icon"
            fontSize="large"
            onClick={handleLeftClick}
          />
          <Swiper
            onSwiper={setSwiperRef}
            grabCursor={true}
            centeredSlides={true}
            spaceBetween={30}
            initialSlide={4}
            loop={true}
            breakpoints={{
              // when window width is >= 640px
              768: {
                slidesPerView: 1,
              },
              1275: {
                slidesPerView: 3,
              },
              // when window width is >= 768px
              882: {
                slidesPerView: 2,
              },
              280: {
                slidesPerView: 1,
              },
            }}
            className="mySwiper"
          >
            {gallery?.images?.map((item, index) => {
              return (
                <SwiperSlide key={index}>
                  <img
                    src={`https://drive.google.com/uc?id=${item}`}
                    style={{ width: "400px", height: "370px" }}
                    alt=""
                  />
                </SwiperSlide>
              );
            })}
          </Swiper>
          <ArrowForwardIosIcon
            className="gallery-icon"
            fontSize="large"
            onClick={handleRightClick}
          />
        </div>
      </div>
    </>
  );
}
