import styled from 'styled-components';

export const Container = styled.div`
  grid-area: Info;

  display: flex;
  align-items: center;
  justify-content: space-between;

  height: 48px;

  padding: 0 16px;

  background: linear-gradient(to top, #f5f5f5, #fff);

  h2 {
    font-size: 14px;
    color: var(--on-surface);
  }
`;
