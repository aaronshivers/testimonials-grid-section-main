import styled from 'styled-components';
import styleSettings from '../../styleSettings';

const {
  colors, sizes, breakPoints, weights,
} = styleSettings;

const Img = styled.img`
  border: 3px solid ${colors.lightGrayishBlue};
  border-radius: 50%;
  width: 5rem;
  height: 5rem;
`;

export { Img };
