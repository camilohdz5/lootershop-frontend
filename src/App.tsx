// vendors
import React from 'react';
import { createGlobalStyle } from 'styled-components';

// Router
import Router from './router';

// Global Styles
const GlobalStyles: any = createGlobalStyle`
  body {
    background-color: var(--main-bg-color);
    color: var(--main-font-color);
  }
`;

function App(): JSX.Element {
  return (
    <>
      <GlobalStyles />
      <Router />
    </>
  );
}

export default App;
