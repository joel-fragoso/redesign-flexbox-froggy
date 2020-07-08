import React, { FunctionComponent } from 'react';

import { Container } from './styles';

import Header from '../../components/Header';
import Info from '../../components/Info';
import Description from '../../components/Description';

const Dashboard: FunctionComponent = () => {
  return (
    <Container>
      <Header />
      <Info />
      <Description />
    </Container>
  );
};

export default Dashboard;
