import React, { Component } from "react";
import { connect } from "react-redux";
import { setModalData, generalFetch, setPubsToState } from "../../../actions";
import { urlServer } from "../../../../constants";

import Button from "../../presentational/Button";
import "./index.scss";

class _ModalContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "title",
      content: "content",
    };
    this.handleChange = this.handleChange.bind(this);
    this.saveClick = this.saveClick.bind(this);
  }

  componentDidMount() {
    this.setState({
      title: this.props.cardInfo.title,
      content: this.props.cardInfo.content,
    });
  }
  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }
  saveClick() {
    const fetchObj = {
      url: `${urlServer}/wiki/${this.props.cardInfo.id}`,
      method: "PUT",
      body: {
        title: this.state.title,
        content: this.state.content,
      },
      onSuccess: setPubsToState,
    };
    this.props.generalFetch(fetchObj);
    this.props.setModalData({ display: false });
  }

  render() {
    return (
      <div className="modal">
        <div className="card-modal">
          <header className="header">
            <h2>Edit card</h2>
          </header>
          <div className="body">
            <div className="title-section">
              <label>Title:</label>
              <input
                placeholder="title..."
                value={this.state.title}
                name="title"
                onChange={this.handleChange}
              />
            </div>
            <div className="content-section">
              <label>Content:</label>
              <textarea
                placeholder="content..."
                name="content"
                onChange={this.handleChange}
                value={this.state.content}
              />
            </div>
          </div>
          <div className="footer">
            <Button
              lbl="Close"
              handleClick={() => {
                this.props.setModalData({ display: false });
              }}
              style={{ backgroundColor: "#636363" }}
            />
            <Button lbl="Save" handleClick={this.saveClick} />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  cardInfo: state.modalData.cardInfo,
});

const ModalContainer = connect(mapStateToProps, {
  setModalData,
  generalFetch,
  setPubsToState,
})(_ModalContainer);

export default ModalContainer;
