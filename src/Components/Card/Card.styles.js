import styled from 'styled-components';
import { darken, lighten } from 'polished';
import styleSettings from '../../styleSettings';

const {
  colors, sizes, breakPoints, weights,
} = styleSettings;

const Wrapper = styled.div`
  padding: 3rem;
  margin: 2rem 0;
  border-radius: 1rem;
  background-color: ${({ variant }) => {
    switch (variant) {
      case 'light':
        return colors.white;
      case 'medium':
        return colors.veryDarkGrayishBlue;
      case 'dark':
        return colors.veryDarkBlackishBlue;
      default:
        return colors.moderateViolet;
    }
  }};
`;

const StyledHeader = styled.div`
  display: flex;
  align-items: center;
`;

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 2rem;
`;

const StyledTitle = styled.h1`
  margin: 0;
  font-size: 1.5rem;
`;

const StyledSubtitle = styled.h2`
  margin: 0;
  font-size: 1.3rem;
  color: ${darken(0.2, colors.white)};
`;

export {
  Wrapper,
  StyledHeader,
  TitleWrapper,
  StyledTitle,
  StyledSubtitle,
};
