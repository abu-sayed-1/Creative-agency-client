 import React from 'react';
 import "./Slider.css"
import carousel1 from "../../../images/images/carousel-1.png"
import carousel2 from "../../../images/images/carousel-2.png"
import carousel3 from "../../../images/images/carousel-3.png"
import carousel4 from "../../../images/images/carousel-4.png"
import carousel5 from "../../../images/images/carousel-5.png"
 import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay]);
 const Slider = () => {
   return (
      <section className="Slider_container">
  
          <div className="container">
            <div className="my-5 py-5">
            <h5 style={{color:'white'}} className="text_brand text-center">Here are some of <span className="text_brand_color">our works</span></h5>
            </div>
       <Swiper
            spaceBetween={15}
            slidesPerView={3}
            navigation
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            loop={true}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
          >
            <SwiperSlide>
              <img
                style={{ height: "260px", width: "270px" }}
                className="img-fluid"
                src={carousel1}
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                style={{height: "260px", width: "270px"}}
                className="img-fluid"
                src={carousel2}
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                style={{height: "260px",width: "270px"}}
                className="img-fluid"
                src={carousel3}
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                style={{height: "260px",width: "270px" }}
                className="img-fluid"
                src={carousel4}
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                style={{height: "260px",width: "270px"}}
                className="img-fluid"
                src={carousel5}
                alt=""
              />
            </SwiperSlide>
          </Swiper>
     </div>
      </section>
   );
 };
 
 export default Slider;