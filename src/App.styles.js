import styled, { createGlobalStyle } from 'styled-components';
import styleSettings from './styleSettings';

const { sizes, colors, breakPoints } = styleSettings;

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Barlow+Semi+Condensed:wght@500;600&display=swap');

  * {
    box-sizing: border-box;
  }

  html {
    font-size: 10px;
  }

  body {
    background-color: ${colors.lightGrayishBlue};
    font-size: ${sizes.medium};
    font-family: 'Barlow Semi Condensed', sans-serif;
    color: ${colors.white};
  }

  button {
    cursor: pointer;

    &:disabled {
      cursor: default;
    }
  }
`;

const Container = styled.div`
  margin: 0 auto;
  padding: ${sizes.extraLarge};

  @media(min-width: ${breakPoints.desktop}) {
    display: flex;
    align-items: center;
  }
`;

export {
  GlobalStyle as default,
  Container,
};
