import React, { useState, useEffect } from "react";
import "./index.scss";

const unMountStyle = (setFunc) => {
  setFunc({
    opacity: 0,
    animation: "slide-down 1s ease",
  });
};

const mountStyle = (setFunc) => {
  setFunc({
    opacity: 1,
    animation: "slide-up 1s ease",
  });
};

//props: mounted
const AnimationContainer = (props) => {
  const [style, setStyle] = useState({
    opacity: 0,
    animation: "slide-up 1s ease",
  });

  //componentDidMount
  useEffect(() => {
    setTimeout(() => mountStyle(setStyle), 10);
    console.log("component mounted");
  }, []);

  //componetWillReceiveProps
  useEffect(() => {
    if (!props.mounted) {
      return unMountStyle(setStyle);
    }
    setTimeout(() => mountStyle(setStyle), 10);
  }, [props.mounted]);

  const children = React.Children.map(props.children, (child) => {
    console.log("updating style");
    console.log(child.value);
    return React.cloneElement(child, {
      style: style,
    });
  });

  return <>{props.mounted && children}</>;
};

export default AnimationContainer;

/*
	const children = React.Children.map(this.props.children, child => {
		return React.cloneElement(child, {
			someData: this.props.someData,
			someState: this.state.someState,
			someFunction: x => x
		});
	});
*/
