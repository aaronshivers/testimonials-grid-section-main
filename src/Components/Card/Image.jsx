import React from 'react';
import PropTypes from 'prop-types';
import { Img } from './Image.styles';

const Image = ({ src, alt }) => (
  <Img alt={alt} src={src} />
);

Image.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default Image;
