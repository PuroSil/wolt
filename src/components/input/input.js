import React from 'react';
import './input.css';

const Input = ({ required, type, placeholder, event, value, change, className }) => {
  return (
    <input 
      className={className}
      required={required} 
      type={type} 
      placeholder={placeholder} 
      onInput={event}
      value={value}
      onChange={change}
    />
  );
};

export default Input;
