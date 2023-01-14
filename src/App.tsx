import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Home } from './components/Home/Home';
import { Pitcher } from './components/Pitcher/Pitcher';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact component={() => <Home />} path='/' />
        <Route exact component={() => <Pitcher />} path='/pitcher' />
      </Switch>
    </Router>
  );
}

export default App;
