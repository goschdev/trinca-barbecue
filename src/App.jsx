import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import { Routes } from 'components/Routes';
import { Header } from 'components/Header';
import { Footer } from 'components/Footer';
import { RenderGlobalStyle } from 'components/RenderGlobalStyle';
import { AuthProvider } from 'contexts/AuthContext';

export function App() {
  return (
    <>
      <AuthProvider>
        <Router>
          <RenderGlobalStyle />
          <Header />
          <Routes />
          <Footer />
        </Router>
      </AuthProvider>
    </>
  );
}

export default App;
