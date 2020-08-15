import React from "react";
import PropTypes from "prop-types";
import "./index.scss";

import Button from "../Button/index";

const styleDltBtn = {
  backgroundColor: "#991f00",
};

const Card = ({ title, content, id, clickDelete, clickEdit }) => (
  <div className="card">
    <div className="card-content">
      <div className="title">
        <h3>{title}</h3>
      </div>
      <div className="content">
        <p>{content}</p>
      </div>
      <div className="footer">
        <Button
          lbl={<i className="fas fa-edit"></i>}
          handleClick={() =>
            clickEdit({
              display: true,
              type: "edit",
              cardInfo: { id, title, content },
            })
          }
        />
        <Button
          lbl={<i className="fas fa-trash"></i>}
          style={styleDltBtn}
          handleClick={() => clickDelete(id)}
        />
      </div>
    </div>
  </div>
);

Card.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string,
  clickDelete: PropTypes.func,
  clickEdit: PropTypes.func,
};

export default Card;
