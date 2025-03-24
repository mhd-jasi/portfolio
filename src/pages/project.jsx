import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../style/project.css";
import hospital1 from "../photos/hospital1.jpg";
import hotwheel from "../photos/hotwheel.jpg";
import market from "../photos/markting.jpg";
import dashboard from "../photos/dashboard.jpg";
import booking from "../photos/booking.jpg";
import arc from "../photos/arc-int.jpg";

const projects = [
   { img: hospital1, link: "https://github.com/mhd-jasi/jasi_backend_2024", text: "Hospital registration system built with Python" },
   { img: market, link: "https://github.com/mhd-jasi/html-project2.git", text: "Modern landing page using HTML & CSS" },
   { img: hotwheel, link: "https://github.com/mhd-jasi/hotwheels.git", text: "Hot Wheels online shop page using HTML ,CSS & Node.js" },
   { img: dashboard, link: "https://github.com/mhd-jasi/html-project3.git", text: "Business analytics dashboard using HTML & CSS" },
   { img: booking, link: "https://github.com/mhd-jasi/project2.git", text: "Doctor booking system with digital prescription using HTML,CSS & Node.js" },
   { img: arc, link: "https://github.com/mhd-jasi/arc_int.git", text: "Responsive website for architecture & interior design" },
];

const Project = () => {
   useEffect(() => {
      document.body.classList.add("project-bg");
      return () => {
         document.body.classList.remove("project-bg");
      };
   }, []);

   return (
      <div className="project">
         <h1>My Awesome Projects</h1>
         <Swiper
            effect="coverflow"
            grabCursor={true}
            centeredSlides={true}
            slidesPerView="auto"
            coverflowEffect={{
               rotate: 30,
               stretch: 0,
               depth: 100,
               modifier: 1,
               slideShadows: true,
            }}
            pagination={{ clickable: true }}
            navigation={true}
            modules={[EffectCoverflow, Pagination, Navigation]}
            className="swiper-container"
         >
            {projects.map((project, index) => (
               <SwiperSlide key={index} className="swiper-slide">
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                     <img src={project.img} alt="project" />
                     <p>{project.text}</p>
                  </a>
               </SwiperSlide>
            ))}
         </Swiper>
      </div>
   );
};

export default Project;
