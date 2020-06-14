import React from 'react';

import { BrowserRouter as Router } from 'react-router-dom';
import { Routes } from 'components/Routes';
import { GlobalStyle } from 'visual/styles/GlobalStyle';

export function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Routes />
      </Router>
    </>
  );
}

export default App;
