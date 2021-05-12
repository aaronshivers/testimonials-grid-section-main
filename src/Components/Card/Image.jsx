import React from 'react';
import PropTypes from 'prop-types';

const Image = ({ src, alt }) => {
  console.log(src);
  return (
    <img alt={alt} src={src} />
  );
};

Image.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default Image;
