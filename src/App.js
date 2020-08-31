import React from 'react';
import styled from 'styled-components';

import pannorGroupLogo from './img/logo.png';

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Logo = styled.img`
  height: 100px;
  margin-top: -100px;
`;

function App() {
  return (
    <Container>
      <Logo src={pannorGroupLogo} alt="Pannor Romania"/>
    </Container>
  );
}

export default App;
