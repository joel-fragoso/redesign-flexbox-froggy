import React, { FunctionComponent } from 'react';
import { MdFullscreen } from 'react-icons/md';

import greenFrogImg from '../../assets/frog-green.svg';
import greenLilyPadImg from '../../assets/lilypad-green.svg';
import yellowFrogImg from '../../assets/frog-yellow.svg';
import yellowLilyPadImg from '../../assets/lilypad-yellow.svg';
import redFrogImg from '../../assets/frog-red.svg';
import redLilyPadImg from '../../assets/lilypad-red.svg';

import { Container, Footer } from './styles';

const Canvas: FunctionComponent = () => {
  return (
    <Container>
      <div className="canvas">
        <img src={greenFrogImg} alt="Green Frog" />
        <img src={greenLilyPadImg} alt="Green LilyPad" />
        <img src={yellowFrogImg} alt="Yellow Frog" />
        <img src={yellowLilyPadImg} alt="Yellow LilyPad" />
        <img src={redFrogImg} alt="Red Frog" />
        <img src={redLilyPadImg} alt="Red LilyPad" />
      </div>
      <Footer>
        <button type="button">
          <MdFullscreen size={20} color="#f5f5f5" />
          Full Screen
        </button>
      </Footer>
    </Container>
  );
};

export default Canvas;
