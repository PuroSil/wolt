import React from 'react';
import './button.css';
const Button = ({ type, text }) => {
  return (
    <button type={type} className="button button__default">
      {text}
    </button>
  );
};

export default Button;
