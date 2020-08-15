import React, { useState, useEffect } from 'react';
import './index.scss';
import { unMountStyle, mountStyle, animationEnd } from './utils';

const Snackbar = props => {
  const [style, setStyle] = useState({
    opacity: 0,
    animation: 'slide-up 1s ease',
  });

  const [show, setShow] = useState(false);

  //componentDidMount
  useEffect(() => {
    //setTimeout(() => mountStyle(setStyle), 10);
    mountStyle(setStyle);
    console.log('component mounted');
  }, []);

  //componetWillReceiveProps
  useEffect(() => {
    if (!props.mounted) {
      return unMountStyle(setStyle);
    }
    setShow(true);
    //setTimeout(() => mountStyle(setStyle), 10);
    mountStyle(setStyle);
  }, [props.mounted]);

  return (
    <>
      {show && (
        <div
          onAnimationEnd={() => animationEnd(props, setShow)}
          style={style}
          className="snackbar"
        >
          <div className={`snackbar-box ${props.type}`}>
            <p>{props.label || 'something happened, default message'}</p>
            <i onClick={props.handleAlertCloseBtn} className="fas fa-times"></i>
          </div>
        </div>
      )}
    </>
  );
};

export default Snackbar;
