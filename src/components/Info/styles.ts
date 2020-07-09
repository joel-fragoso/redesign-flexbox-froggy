import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  grid-area: Info;

  display: flex;
  align-items: center;
  justify-content: space-between;

  height: 48px;

  padding: 0 16px;

  background: linear-gradient(to top, var(--on-background), #fff);
  border-bottom: 1px solid ${shade(0.1, '#f5f5f5')};

  h2 {
    font-size: 14px;
    color: var(--on-surface);
  }
`;
