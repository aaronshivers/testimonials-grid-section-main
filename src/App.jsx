import React from 'react';
import GlobalStyle, { Container } from './App.styles';
import Main from './Pages/Main';

const App = () => (
  <>
    <GlobalStyle />
    <Container>
      <Main />
    </Container>
  </>
);

export default App;
