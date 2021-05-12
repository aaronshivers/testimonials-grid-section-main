import React from 'react';
import PropTypes from 'prop-types';
import Paragraph from './Paragraph';
import Title from './Title';
import Subtitle from './Subtitle';
import Quote from './Quote';
import Image from './Image';
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

Card.Title = Title;
Card.Subtitle = Subtitle;
Card.Paragraph = Paragraph;
Card.Quote = Quote;
Card.Image = Image;

export default Card;
