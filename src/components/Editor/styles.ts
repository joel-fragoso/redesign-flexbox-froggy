import styled from 'styled-components';
import { tint } from 'polished';

import { UnControlled as CodeMirror } from 'react-codemirror2';

export const Container = styled(CodeMirror)`
  grid-area: Editor;

  .CodeMirror {
    height: calc(100vh - 164px);
  }

  .CodeMirror,
  .CodeMirror * {
    font-family: var(--font-family-monospace);
    font-size: 14px;

    background: ${tint(0.1, '#162125')};
  }
`;
