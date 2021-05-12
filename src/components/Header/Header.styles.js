import styled from 'styled-components';
import { darken, lighten } from 'polished';
import styleSettings from '../../styleSettings';

const {
  colors, sizes, breakPoints, weights,
} = styleSettings;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 1.5rem;
`;

const Title = styled.h1`
  margin: 0;
  font-size: 1.5rem;
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

const SubTitle = styled.h2`
  margin: 0;
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

const Image = styled.img`
  border: 3px solid ${colors.lightGrayishBlue};
  border-radius: 50%;
  width: 4rem;
  height: 4rem;
`;

export {
  Wrapper,
  TitleWrapper,
  Title,
  SubTitle,
  Image,
};
