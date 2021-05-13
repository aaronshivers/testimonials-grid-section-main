import styled from 'styled-components';
import styleSettings from '../../styleSettings';

const {
  breakPoints,
} = styleSettings;

const Wrapper = styled.main`
  @media (min-width: ${breakPoints.desktop}) {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-gap: 2rem;
    grid-template-areas:
    "one one two five"
    "three four four five";
`;

export {
  Wrapper as default,
};
