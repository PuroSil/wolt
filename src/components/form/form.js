import React from 'react';

const Form = ({ content, onSubmit, className }) => {
  return (
    <form onSubmit={onSubmit} className={className}>
      {content}
    </form>
  );
};

export default Form;
