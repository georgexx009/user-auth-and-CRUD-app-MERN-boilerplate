import React from "react";
import "./index.scss";

class Animation extends React.Component {
  constructor(props) {
    super(props);
    this.unMountStyle = this.unMountStyle.bind(this);
    this.mountStyle = this.mountStyle.bind(this);
    this.transitionEnd = this.transitionEnd.bind(this);
    this.state = {
      show: true,
      style: {
        fontSize: 60,
        opacity: 0,
        transition: "all 2s ease",
        color: "white",
      },
    };
  }

  componentWillReceiveProps(newProps) {
    //check for mounted props
    if (!newProps.mounted) return this.unMountStyle();
    //call outro animation when mounted prop is false
    this.setState({
      show: true,
    });
    //call unmount style
    setTimeout(this.mountStyle, 10);
  }

  unMountStyle() {
    this.setState({
      style: {
        fontSize: 60,
        opacity: 0,
        animation: "slide-down 1s ease",
        //transition: "all 1s ease",
        color: "white",
      },
    });
  }

  mountStyle() {
    this.setState({
      style: {
        fontSize: 60,
        opacity: 1,
        animation: "slide-up 1s ease",
        //transition: "all 1s ease",
        color: "white",
      },
    });
  }

  componentDidMount() {
    setTimeout(this.mountStyle, 10);
  }

  transitionEnd() {
    if (!this.props.mounted) {
      this.setState({
        show: false,
      });
    }
  }

  render() {
    return (
      this.state.show && (
        <p style={this.state.style} onTransitionEnd={this.transitionEnd}>
          Hello
        </p>
      )
    );
  }
}

class AnimationContainer extends React.Component {
  constructor(props) {
    super(props);
    this.btnClick = this.btnClick.bind(this);
    this.state = {
      showChild: true,
    };
  }

  btnClick() {
    this.setState({
      showChild: !this.state.showChild,
    });
  }

  render() {
    return (
      <div>
        <button onClick={this.btnClick}>
          {this.state.showChild ? "Unmount" : "Mount"}
        </button>
        <Animation mounted={this.state.showChild} />
      </div>
    );
  }
}

export default AnimationContainer;
