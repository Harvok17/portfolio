import React from "react";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/src/core/styles.scss";
import { SliderWrapper } from "../styledComponents";
import "./Slider.styles.scss";

const Slider = ({ images }) => {
  return (
    <SliderWrapper>
      <AwesomeSlider bullets={false} className="aws-btn" fillParent={true}>
        {images.map((image, i) => (
          <div key={i} data-src={image} />
        ))}
      </AwesomeSlider>
    </SliderWrapper>
  );
};

export default Slider;
