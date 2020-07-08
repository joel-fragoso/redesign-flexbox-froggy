import styled from 'styled-components';

export const Container = styled.div`
  grid-area: Footer;

  height: 66px;

  padding: 0 16px;

  display: flex;
  align-items: center;

  background: var(--secondary);

  button {
    height: 50px;

    padding: 0 16px;

    background: var(--primary);
    border-radius: 5px;

    font-size: 16px;
    font-weight: bold;
    color: var(--on-primary);
  }
`;
