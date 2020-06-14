import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import { GlobalStyle } from 'visual/styles/GlobalStyle';
import { Routes } from 'components/Routes';
import { Header } from 'components/Header';

export function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Header />
        <Routes />
      </Router>
    </>
  );
}

export default App;
