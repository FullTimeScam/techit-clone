// import React from "react"; 기본 임포트라도 빼도 됨
import Slider from "react-slick";
import SlideBanner from "./SlideBanner";

const SimpleSlider = () => {
  return (
    <Slider
      dots={false}
      infinite={true}
      speed={500}
      slidesToShow={3}
      slidesToScroll={1}
      // className="border-red-100 bg-red-100"
    >
      <SlideBanner />

      <div>
        <h3>2</h3>
      </div>
      <div>
        <h3>3</h3>
      </div>
      <div>
        <h3>4</h3>
      </div>
      <div>
        <h3>5</h3>
      </div>
      <div>
        <h3>6</h3>
      </div>
    </Slider>
  );
};

export default SimpleSlider;
