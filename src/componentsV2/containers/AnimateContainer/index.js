import React, { useState, useEffect } from 'react';
import './index.scss';

const mountStyle = setFunc => {
  setFunc({
    opacity: 1,
    animation: 'slide-up 1s ease',
  });
};

const unMountStyle = setFunc => {
  setFunc({
    opacity: 0,
    animation: 'slide-down 1s ease',
  });
};

const animationEnd = (mounted, setShow) => {
  if (!mounted) {
    setShow(false);
  }
};

const AnimateContainer = props => {
  const [show, setShow] = useState(false);
  const [style, setStyle] = useState({
    opacity: 0,
    animation: 'slide-up 1s ease',
  });

  // //componentDidMount
  // useEffect(() => {
  //   mountStyle(setStyle);
  // }, []);

  //componentWillReceiveProps
  useEffect(() => {
    if (!props.mounted) {
      return unMountStyle(setStyle);
    }
    setShow(true);
    //setTimeout(() => mountStyle(setStyle), 10);
    mountStyle(setStyle);
  }, [props.mounted]);

  return (
    <div className="animate-container">
      {show && (
        <div
          style={style}
          className="sub-container"
          onAnimationEnd={() => animationEnd(props.mounted, setShow)}
        >
          {props.children}
        </div>
      )}
    </div>
  );
};

export default AnimateContainer;
