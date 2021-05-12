import styled from 'styled-components';
import styleSettings from '../../styleSettings';

const {
  colors, sizes, breakPoints, weights,
} = styleSettings;

const Wrapper = styled.div`
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

export { Wrapper };
