import React from 'react';
import './App.css';
import Home from './views/Home';
import Nav from './components/nav';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <div>
      <Nav/>
      <Router>
      <Switch>
        <Route path='/' exact component={Home} />
      </Switch>
      </Router>
      
</div>  
);
}

export default App;
