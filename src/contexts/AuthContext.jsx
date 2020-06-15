import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

const storageKey = 'AUTH';

const getAuthByStorage = () => JSON.parse(localStorage.getItem(storageKey));

const setAuthInStorage = (value) => {
  localStorage.setItem(storageKey, JSON.stringify(value));
};

export const authInitialState = {
  authenticated: false,
  ...getAuthByStorage(),
};

export const AuthContext = createContext({});

export const AuthProvider = ({ children, value }) => {
  const [authenticated, setAuthenticated] = useState(
    authInitialState.authenticated,
  );

  const setAuthenticatedCallback = () => {
    setAuthInStorage({ authenticated: true });
    setAuthenticated(true);
  };

  const clearProfile = () => {
    setAuthInStorage({});
    setAuthenticated(false);
  };

  return (
    <AuthContext.Provider
      value={
        value || {
          setAuthenticated: setAuthenticatedCallback,
          clearProfile,
          authenticated,
        }
      }
    >
      {children}
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
  value: PropTypes.shape({}),
};

AuthProvider.defaultProps = {
  value: null,
};
