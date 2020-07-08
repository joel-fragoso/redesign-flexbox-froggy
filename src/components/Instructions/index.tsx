import React, { FunctionComponent } from 'react';

import { Container, Description, Info } from './styles';

const Instructions: FunctionComponent = () => {
  return (
    <Container>
      <Description>
        <h1>Get Started!</h1>
        <p>
          Welcome to Flexbox Froggy, a game where you help Froggy and friends by
          writing CSS code! Guide this frog to the lilypad on the right by using
          the <span className="code">justify-content</span> property, which
          aligns items horizontally and accepts the following values:
        </p>
      </Description>
      <Info>
        <h2>Instructions</h2>

        <ul>
          <li>
            <span className="code">flex-start</span>: Items align to the left
            side of the container.
          </li>
          <li>
            <span className="code">flex-end</span>: Items align to the right
            side of the container.
          </li>
          <li>
            <span className="code">center</span>: Items align at the center of
            the container.
          </li>
          <li>
            <span className="code">space-between</span>: Items display with
            equal spacing between them.
          </li>
          <li>
            <span className="code">space-around</span>: Items display with equal
            spacing around them.
          </li>
        </ul>

        <p>
          For example, <span className="code">justify-content: flex-end;</span>{' '}
          will move the frog to the right.
        </p>
      </Info>
    </Container>
  );
};

export default Instructions;
