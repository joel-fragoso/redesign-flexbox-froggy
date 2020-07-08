import React, { FunctionComponent } from 'react';

import GlobalStyle from './styles/GlobalStyle';

import Dashboard from './pages/Dashboard';

const App: FunctionComponent = () => {
  return (
    <>
      <Dashboard />
      <GlobalStyle />
    </>
  );
};

export default App;
