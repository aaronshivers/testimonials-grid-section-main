import React from 'react';
import PropTypes from 'prop-types';
import { StyledSubtitle } from './Card.styles';

const Subtitle = ({ children }) => (
  <StyledSubtitle>
    {children}
  </StyledSubtitle>
);

Subtitle.propTypes = {
  children: PropTypes.string.isRequired,
};

export default Subtitle;
