import styled from 'styled-components';

export const Container = styled.div`
  display: grid;

  grid-template-rows: 50px 48px auto 50px;
  grid-template-columns: 240px auto;

  grid-template-areas:
    'Header Header' 'Info Navigation' 'Description Code'
    'Instructions Code' 'Instructions Footer';

  height: 100vh;
`;
