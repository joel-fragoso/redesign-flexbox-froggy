import React, { FunctionComponent } from 'react';
import { MdSend } from 'react-icons/md';

import { Container } from './styles';

const Footer: FunctionComponent = () => {
  return (
    <Container>
      <button type="button">
        Submit Code
        <MdSend size={20} color="#f5f5f5" />
      </button>
    </Container>
  );
};

export default Footer;
