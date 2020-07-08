import styled from 'styled-components';

export const Container = styled.div`
  display: grid;

  grid-template-rows: 50px 48px auto 66px;
  grid-template-columns: 320px auto;

  grid-template-areas:
    'Header Header'
    'Info Navigation'
    'Instructions Editor'
    'Instructions Editor'
    'Instructions Footer';

  height: 100vh;
`;
