import React from 'react';
import PropTypes from 'prop-types';
import Paragraph from './Paragraph';
import Title from './Title';
import Subtitle from './Subtitle';
import Quote from './Quote';
import Image from './Image';

const Card = ({ children }) => (
  <div>
    {children}
  </div>
);

Card.propTypes = {
  children: PropTypes.node.isRequired,
};

Card.Title = Title;
Card.Subtitle = Subtitle;
Card.Paragraph = Paragraph;
Card.Quote = Quote;
Card.Image = Image;

export default Card;
