import React from "react";
//import img from "../../../../assests/lambo.jpg";
import "./index.scss";

const ImagePresenter = ({ width, height, img }) => {
  return (
    <div className="image-presenter" style={{ width, height }}>
      <img src={img} />
    </div>
  );
};

export default ImagePresenter;
