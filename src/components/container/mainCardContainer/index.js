import React, { Component } from "react";
import { Route } from "react-router-dom";
import Card from "../../presentational/Card/index";
import Button from "../../presentational/Button/index";
import ModalContainer from "../modalContainer";
import FloatingBtn from "../../presentational/FloatingBtn";
import { connect } from "react-redux";
import { generalFetch, setPubsToState, setModalData } from "../../../actions";
import { urlServer } from "../../../../constants";
import "./index.scss";

import Modal from "../../presentational/modal";

const getObj = {
  url: `${urlServer}/wiki`,
  method: "GET",
  onSuccess: setPubsToState,
};

class _MainCardContainer extends Component {
  constructor() {
    super();

    this.clickDelete = this.clickDelete.bind(this);
    this.clickEdit = this.clickEdit.bind(this);
  }
  componentDidMount() {
    this.props.generalFetch(getObj);
  }

  clickDelete(id) {
    const fetchObj = {
      url: `${urlServer}/wiki/${id}`,
      method: "DELETE",
      onSuccess: setPubsToState,
    };

    this.props.generalFetch(fetchObj);
  }

  clickEdit() {
    this.props.setModalData({
      display: true,
      cardInfo: {
        id: this.props._id,
        title: this.props.title,
        content: this.props.content,
      },
    });
  }

  render() {
    const { cardInfo } = this.props;
    //const display = this.props.modalData.display ? <ModalContainer /> : null;
    return (
      <div className="main-card-container">
        {this.props.modalData.display && <Modal headerCard="Edit Card" />}
        {cardInfo.map((card, i) => (
          <Card
            key={i}
            title={card.title}
            content={card.content}
            id={card._id}
            clickEdit={this.props.setModalData}
            clickDelete={this.clickDelete}
          />
        ))}
        <FloatingBtn onClick={this.props.setModalData} />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  cardInfo: state.cardInfo,
  modalData: state.modalData,
});

const MainCardContainer = connect(mapStateToProps, {
  generalFetch,
  setModalData,
})(_MainCardContainer);

export default MainCardContainer;
