import { createGlobalStyle } from 'styled-components';
import { tint } from 'polished';

export default createGlobalStyle`
  :root {
    --primary: #0096d2;
    --secondary: #162125;

    --background: #141414;
    --surface: #fff;

    --on-primary: #f5f5f5;
    --on-secondary: #d9d9d9;

    --on-background: #f5f5f5;
    --on-surface: #424242;

    --font-family-sans-serif: 'Pt Sans', sans-serif;
    --font-family-monospace: 'Fira Code', monospace;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    height: 100%;
  }

  body {
    background: var(--background);
    color: var(--on-background);
  }

  *, input, button {
    border: 0;
    outline: 0;

    font-family: var(--font-family-sans-serif);
  }

  button {
    cursor: pointer;
  }

  .code {
    font-family: var(--font-family-monospace);
    font-size: 14px;
    background: ${tint(0.8, '#0096d2')};

    padding: 2px 4px;
    border-radius: 2px;
  }
`;
