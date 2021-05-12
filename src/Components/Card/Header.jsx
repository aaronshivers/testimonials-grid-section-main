import React from 'react';
import PropTypes from 'prop-types';
import { StyledHeader } from './Card.styles';

const Header = ({ children }) => (
  <StyledHeader>
    {children}
  </StyledHeader>
);

Header.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Header;
