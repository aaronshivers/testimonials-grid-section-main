import styled from 'styled-components';
import styleSettings from '../../styleSettings';

const {
  colors, sizes, breakPoints, weights,
} = styleSettings;

const Wrapper = styled.div`
  padding: 3rem;
  margin: 3rem 0;
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

export {
  Wrapper,
};
