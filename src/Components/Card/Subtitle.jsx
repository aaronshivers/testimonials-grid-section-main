import React from 'react';
import PropTypes from 'prop-types';

const Subtitle = ({ children }) => (
  <h2>
    {children}
  </h2>
);

Subtitle.propTypes = {
  children: PropTypes.string.isRequired,
};

export default Subtitle;
