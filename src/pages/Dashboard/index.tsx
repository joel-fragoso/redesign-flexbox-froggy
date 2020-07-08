import React, { FunctionComponent } from 'react';

import { Container } from './styles';

import Header from '../../components/Header';
import Info from '../../components/Info';

const Dashboard: FunctionComponent = () => {
  return (
    <Container>
      <Header />
      <Info />
    </Container>
  );
};

export default Dashboard;
