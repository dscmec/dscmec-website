import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Team from './pages/Team/Team';
import Navbar from './components/Navbar/Navbar';
import Landing from './pages/Landing/Landing';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
          <Switch>
              <Route path="/team">
                <Navbar />
                <Team />
              </Route>
            <Route path="/">
              <Navbar />
              <Landing />
            </Route>
          </Switch>
      </div>
    </Router>
  );
}

export default App;
