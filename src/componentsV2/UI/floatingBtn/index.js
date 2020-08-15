import React from "react";
import "./index.scss";

const FloatingBtn = ({ onClick }) => (
  <a
    onClick={() => onClick({ display: true, type: "create" })}
    className="float"
  >
    <i className="fa fa-plus my-float"></i>
  </a>
);

export default FloatingBtn;
