import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import styled from 'styled-components';

import Header from './components/static/Header';
import LandingPage from './pages/LandingPage';
import About from './pages/About';

const Container = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

function App() {
  return (
    <Router>
      <Container>
        <Header/>
        <Switch>
          <Route exact path="/" component={LandingPage}/>
          <Route path="/about" component={About}/>
        </Switch>
    </Container>
    </Router>
  );
}

export default App;
