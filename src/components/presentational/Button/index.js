import React from 'react';
import PropTypes from 'prop-types';
import './index.scss';

const Button = ({
  lbl = 'default',
  style,
  handleClick,
  type = '',
  ...extras
}) => (
  <button
    style={style}
    onClick={handleClick}
    type={type}
    disabled={extras.disabled}
    className={`${extras.disabled && 'disableBtn'}`}
  >
    {lbl}
  </button>
);

Button.propTypes = {
  style: PropTypes.object,
  handleClick: PropTypes.func,
};

export default Button;
