import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import { Routes } from 'components/Routes';
import { Header } from 'components/Header';
import { Footer } from 'components/Footer';
import { RenderGlobalStyle } from 'components/RenderGlobalStyle';

export function App() {
  return (
    <>
      <Router>
        <RenderGlobalStyle />
        <Header />
        <Routes />
        <Footer />
      </Router>
    </>
  );
}

export default App;
