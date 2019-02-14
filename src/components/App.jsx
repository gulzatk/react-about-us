import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './Header';
import About from './About';
import Team from './Team';
import Home from './Home';


function App() {
  return (
    <div>
      <Header/>
      <Switch>
        <Route path='/team' component={Team} />
        <Route path='/aboutUs' component={About} />
        <Route path='/home' component={Home} />


      </Switch>
    </div>
  );
}

export default App;