import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './views/Home';
import Crawling from './views/Crawler';
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
      <Route path='/crawler' exact component={Crawling} />
      </Switch>
      </Router>
      
</div>  
);
}

export default App;
