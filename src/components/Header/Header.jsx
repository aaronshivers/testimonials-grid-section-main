import React from 'react';
import PropTypes from 'prop-types';
import {
  Image,
  SubTitle,
  Title, TitleWrapper,
  Wrapper,
} from './Header.styles';

const Header = ({
  title, subtitle, image, variant,
}) => (
  <Wrapper>
    <Image src={image} alt={title} />
    <TitleWrapper>
      <Title variant={variant}>{title}</Title>
      <SubTitle variant={variant}>{subtitle}</SubTitle>
    </TitleWrapper>
  </Wrapper>
);

Header.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  variant: PropTypes.oneOf(['primary', 'light', 'medium', 'dark']).isRequired,
};

export default Header;
