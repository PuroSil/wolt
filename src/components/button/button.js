import React from 'react';
import './button.css';

const Button = ({ type, text, event, style }) => {
  return (
    <button type={type} onClick={event} className="button button__default" style={style}>
      {text}
    </button>
  );
};

export default Button;
