import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { setModalData, generalFetch, setPubsToState } from "../../../actions";
import { urlServer } from "../../../../constants";

import Button from "../Button";
import "./index.scss";

const _Modal = (props) => {
  const cardInfo = props.cardInfo || { title: "", content: "", id: 0 };

  const [title, setTitle] = useState(cardInfo.title);
  const [content, setContent] = useState(cardInfo.content);

  const { headerCard } = props;

  const updateFetchObj = {
    url: `${urlServer}/wiki/${cardInfo.id}`,
    method: "PUT",
    body: {
      title,
      content,
    },
    onSuccess: setPubsToState,
  };

  const createFetchObj = {
    url: `${urlServer}/wiki`,
    method: "POST",
    body: {
      title,
      content,
    },
    onSuccess: setPubsToState,
  };

  const handleChange = function (event) {
    const { name, value } = event.target;
    name === "title" ? setTitle(value) : setContent(value);
  };

  const saveClick = () => {
    console.log(props.type);
    props.generalFetch(props.type === "edit" ? updateFetchObj : createFetchObj);
    props.setModalData({ display: false });
  };

  return (
    <div className="modal">
      <div className="card-modal">
        <header className="header">
          <h2>{headerCard + props.type}</h2>
        </header>

        <div className="body">
          <div className="title-section">
            <label>Title:</label>
            <input
              placeholder="title..."
              value={title}
              name="title"
              onChange={handleChange}
            />
          </div>

          <div className="content-section">
            <label>Content:</label>
            <textarea
              placeholder="content..."
              value={content}
              name="content"
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="footer">
          <Button
            lbl="Cancel"
            handleClick={() => {
              props.setModalData({ display: false });
            }}
            style={{ backgroundColor: "#636363" }}
          />
          <Button lbl="Save" handleClick={saveClick} />
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    cardInfo: state.modalData.cardInfo,
    type: state.modalData.type,
  };
};

const mapDispatchToProps = {
  setModalData,
  generalFetch,
  setPubsToState,
};

const Modal = connect(mapStateToProps, mapDispatchToProps)(_Modal);

export default Modal;
