import React from 'react';
import './input.css';

const Input = ({ required, type, placeholder, event, value, change, className, name }) => {
  return (
    <input 
      className={className}
      required={required} 
      type={type} 
      placeholder={placeholder} 
      onInput={event}
      value={value}
      onChange={change}
      autoFocus
      id={name}
    />
  );
};

export default Input;
