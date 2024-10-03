import React, { useRef } from "react";
import "./WorkExperience.css";
import ExperienceCard from "./ExperienceCard/ExperienceCard.jsx";
import { WORK_EXPERINCE } from "../../utils/data.js";
import Slider from "react-slick";

const WorkExperience = () => {
  const slideRef = useRef();
  const setting = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    respoonsive: [
      {
        breakpoint: 769,
        setting: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const slideRight = () => {
    slideRef.current.slickNext();
  };

  const slideLeft = () => {
    slideRef.current.slickPrev();
  };

  return (
    <section className="experience-container">
      <h5>Expérience</h5>
      <div className="experience-content">
        <div className="arrow-right" onClick={slideRight}>
          <span className="material-symbols-outlined">chevron_right</span>
        </div>
        <div className="arrow-left" onClick={slideLeft}>
          <span className="material-symbols-outlined">chevron_left</span>
        </div>

        <Slider ref={slideRef} {...setting}>
          {WORK_EXPERINCE.map((item) => (
            <ExperienceCard key={item.title} details={item} />
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default WorkExperience;
