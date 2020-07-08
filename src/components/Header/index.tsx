import React, { FunctionComponent } from 'react';

import logoImg from '../../assets/logo.svg';

import { Container } from './styles';

const Header: FunctionComponent = () => {
  return (
    <Container>
      <img src={logoImg} alt="Flexbox Froggy" />
    </Container>
  );
};

export default Header;
