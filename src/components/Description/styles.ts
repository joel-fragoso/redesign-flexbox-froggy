import styled from 'styled-components';

export const Container = styled.div`
  grid-area: Description;

  padding: 32px 16px;

  background: var(--surface);

  h1 {
    font-size: 36px;
    color: var(--on-surface);
  }

  p {
    line-height: 24px;
    color: var(--on-surface);

    margin-top: 16px;
  }
`;
