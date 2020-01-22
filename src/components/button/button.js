import React from 'react';

const Button = ({ type, text }) => {
  return (
    <button type={type} className="button button__default">
      {text}
    </button>
  );
};

export default Button;
