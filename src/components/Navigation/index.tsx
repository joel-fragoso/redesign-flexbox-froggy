import React, { FunctionComponent } from 'react';

import { Container } from './styles';

const Navigation: FunctionComponent = () => {
  return (
    <Container>
      <li className="active">
        <a href="teste">stylesheet.css</a>
      </li>
    </Container>
  );
};

export default Navigation;
