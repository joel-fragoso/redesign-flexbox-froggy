import React, { FunctionComponent } from 'react';

import { Container } from './styles';

import Canvas from '../../components/Canvas';
import Header from '../../components/Header';
import Info from '../../components/Info';
import Instructions from '../../components/Instructions';
import Navigation from '../../components/Navigation';
import Editor from '../../components/Editor';
import Footer from '../../components/Footer';

const Dashboard: FunctionComponent = () => {
  return (
    <>
      <Canvas />
      <Container>
        <Header />
        <Info />
        <Instructions />
        <Navigation />
        <Editor />
        <Footer />
      </Container>
    </>
  );
};

export default Dashboard;
