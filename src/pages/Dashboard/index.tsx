import React, { FunctionComponent } from 'react';

import { Container } from './styles';

import Header from '../../components/Header';
import Info from '../../components/Info';
import Instructions from '../../components/Instructions';

const Dashboard: FunctionComponent = () => {
  return (
    <Container>
      <Header />
      <Info />
      <Instructions />
    </Container>
  );
};

export default Dashboard;
