import styled from 'styled-components';
import styleSettings from '../../styleSettings';

const {
  colors, sizes, breakPoints, weights,
} = styleSettings;

const Wrapper = styled.div`
  padding: 3rem;
  margin: 3rem 0;
  border-radius: 1rem;
  box-shadow: 2rem 2rem 4rem ${colors.lightGray};
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

  @media (min-width: ${breakPoints.desktop}) {
    margin: 0;

    :nth-child(1) {
      grid-area: one;
    }

    :nth-child(2) {
      grid-area: two;
    }

    :nth-child() {
      grid-area: three;
    }

    :nth-child(4) {
      grid-area: four;
    }

    :nth-child(5) {
      grid-area: five;
    }
  }
`;

export {
  Wrapper,
};
