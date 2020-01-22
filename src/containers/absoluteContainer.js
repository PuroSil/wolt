import React from 'react';
import './containers.css';

const AbsoluteContainer = ({ content }) => {
  return (
    <div className="container__absolute">
      {content}
    </div>
  );
};

export default AbsoluteContainer;
