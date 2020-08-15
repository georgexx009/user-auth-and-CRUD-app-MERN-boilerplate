import React, { useState, useEffect } from "react";

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

const animationEnd = (props, setShow) => {
  if (!props.mounted) {
    setShow(false);
  }
};

const ErrorSnackbar = (props) => {
  const [style, setStyle] = useState({
    opacity: 0,
    animation: "slide-up 1s ease",
  });

  const [show, setShow] = useState(false);

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
    setShow(true);
    setTimeout(() => mountStyle(setStyle), 10);
  }, [props.mounted]);

  return (
    <>
      {show && (
        <div
          onAnimationEnd={() => animationEnd(props, setShow)}
          style={style}
          className="error-snackbar"
        >
          <div className="alert-box">
            <p>Error label</p>
            <button onClick={props.handleAlertCloseBtn}>Close</button>
          </div>
        </div>
      )}
    </>
  );
};

export default ErrorSnackbar;
