import React from 'react';
import './index.scss';

const IconBtn = ({ children, handleClick = () => {} }) => {
  return (
    <div onClick={handleClick} className="icon-btn">
      {children}
    </div>
  );
};

export default IconBtn;
