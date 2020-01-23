import React from 'react';

const ImageElement = ({ className, src, alt }) => {
  return (
    <img className={className} src={src} alt={alt} />
  );
};

export default ImageElement;
