import styled from 'styled-components';
import { darken, lighten } from 'polished';
import styleSettings from '../../styleSettings';

const {
  colors, weights,
} = styleSettings;

const Wrapper = styled.div`
`;

const Statement = styled.p`
  font-weight: ${weights.semiBold};
  font-size: 1.7rem;
  color: ${({ variant }) => {
    switch (variant) {
      case 'light':
        return colors.veryDarkGrayishBlue;
      case 'medium':
      case 'dark':
      case 'primary':
      default:
        return colors.white;
    }
  }};
`;

const Quote = styled.p`
  font-size: 1.3rem;
  color: ${({ variant }) => {
    switch (variant) {
      case 'light':
        return lighten(0.2, colors.veryDarkGrayishBlue);
      case 'medium':
      case 'dark':
      case 'primary':
      default:
        return darken(0.2, colors.white);
    }
  }};
`;

export {
  Wrapper,
  Statement,
  Quote,
};
