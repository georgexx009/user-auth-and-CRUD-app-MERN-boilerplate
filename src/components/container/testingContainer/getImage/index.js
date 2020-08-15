import React, { useEffect } from "react";
import ImagePresenter from "../../../presentational/imagePresenter";

const GetImage = () => {
  const imgUrl = "https://www.google.com/images/srpr/logo11w.png";
  const imgUrl2 = "http://localhost:3001/wiki/file";

  return (
    <div>
      <p>get image</p>
      <ImagePresenter width="480px" height="300px" img={imgUrl2} />
    </div>
  );
};

export default GetImage;
