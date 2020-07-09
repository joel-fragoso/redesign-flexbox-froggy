import styled from 'styled-components';
import { tint } from 'polished';

export const Container = styled.div`
  grid-area: Instructions;

  background: ${tint(0.9, '#0096d2')};

  height: calc(100vh - 98px);

  overflow-y: scroll;

  ::-webkit-scrollbar {
    display: none;
  }

  scrollbar-width: none;
`;

export const Description = styled.div`
  padding: 32px 16px;

  background: var(--surface);

  h1 {
    font-size: 36px;
    line-height: 44px;
    color: var(--on-surface);
  }

  p {
    margin-top: 16px;

    line-height: 24px;
    color: var(--on-surface);
  }
`;

export const Info = styled.div`
  padding: 0 16px 16px;

  background: ${tint(0.9, '#0096d2')};

  display: flex;
  flex-direction: column;

  justify-content: center;

  border-top: 1px solid ${tint(0.8, '#0096d2')};

  h2 {
    font-size: 16px;
    color: var(--on-surface);
    margin-top: -16px;

    align-self: center;

    padding: 4px 8px;

    border: 1px solid ${tint(0.8, '#0096d2')};
    background: var(--surface);
  }

  p {
    margin-top: 16px;

    line-height: 24px;
    color: var(--on-surface);

    & + p {
      margin-top: 16px;
    }
  }

  ul {
    margin: 16px 0 0 16px;

    li {
      line-height: 24px;
      color: var(--on-surface);
    }
  }
`;
