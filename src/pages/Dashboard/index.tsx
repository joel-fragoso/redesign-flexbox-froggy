import React, { FunctionComponent } from 'react';

import { Container } from './styles';

import Header from '../../components/Header';
import Info from '../../components/Info';
import Instructions from '../../components/Instructions';
import Navigation from '../../components/Navigation';

const Dashboard: FunctionComponent = () => {
  return (
    <Container>
      <Header />
      <Info />
      <Instructions />
      <Navigation />
    </Container>
  );
};

export default Dashboard;
