import React from 'react';
import './button.css';

const Button = ({ type, text, event, style, className }) => {
  return (
    <button type={type} onClick={event} className={`button button__default ${className}`} style={style}>
      {text}
    </button>
  );
};

export default Button;
