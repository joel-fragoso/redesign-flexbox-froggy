import styled from 'styled-components';
import { tint } from 'polished';

export const Container = styled.ul`
  grid-area: Navigation;

  padding: 0 16px;

  background: var(--secondary);

  list-style: none;

  display: flex;
  align-items: center;

  li {
    display: flex;
    align-items: center;
    justify-content: center;

    height: 100%;

    font-size: 14px;
    color: var(--on-secondary);
    text-decoration: none;

    padding: 0 16px;

    &.active {
      background: ${tint(0.1, '#162125')};
    }
  }
`;
