import React from 'react';
import PropTypes from 'prop-types';

const Quote = ({ children }) => (
  <blockquote>
    {children}
  </blockquote>
);

Quote.propTypes = {
  children: PropTypes.string.isRequired,
};

export default Quote;
