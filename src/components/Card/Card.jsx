import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper } from './Card.styles';

const Card = ({ children, variant }) => (
  <Wrapper variant={variant}>
    {children}
  </Wrapper>
);

Card.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(['primary', 'light', 'medium', 'dark']).isRequired,
};

export default Card;
