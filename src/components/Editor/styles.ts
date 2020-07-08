import styled from 'styled-components';
import { tint } from 'polished';

export const Container = styled.div`
  grid-area: Editor;

  height: calc(100vh - 164px);

  display: flex;

  background: ${tint(0.1, '#162125')};
`;
