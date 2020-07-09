import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  top: 0;
  right: 0;

  margin: 66px 16px 0 0;

  background: var(--background);

  z-index: 5;

  border-radius: 5px;

  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);

  .canvas {
    width: 380px;
    height: 300px;

    margin: 10px 10px 0;

    padding: 10px;

    background: #ff9000;

    img {
      width: 56.6666px;
    }
  }
`;

export const Footer = styled.div`
  height: 50px;

  padding: 0 10px;

  display: flex;
  align-items: center;
  justify-content: flex-end;

  button {
    height: 40px;

    background: var(--secondary);
    border-radius: 5px;

    display: flex;
    align-items: center;

    font-size: 16px;
    font-weight: bold;
    color: var(--on-secondary);

    padding: 0 16px;

    svg {
      margin-right: 8px;
    }
  }
`;
