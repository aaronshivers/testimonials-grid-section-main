import React from 'react';
import PropTypes from 'prop-types';
import { Quote, Statement, Wrapper } from './Body.styles';

const Body = ({ statement, quote, variant }) => (
  <Wrapper>
    <Statement variant={variant}>{statement}</Statement>
    <Quote variant={variant}>{quote}</Quote>
  </Wrapper>
);

Body.propTypes = {
  statement: PropTypes.string.isRequired,
  quote: PropTypes.string.isRequired,
  variant: PropTypes.oneOf(['primary', 'light', 'medium', 'dark']).isRequired,
};

export default Body;
