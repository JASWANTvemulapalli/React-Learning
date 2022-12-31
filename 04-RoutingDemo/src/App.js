import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch, NavLink } from 'react-router-dom';
import Home from './Home';
import Book from './Book';
import Goa from './Goa';
import './Goa.css';
import Third from './Third';
import Player from './Player';

class Link extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (

      <nav class="navbar bg-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="/Book">Book</a>
          <a class="navbar-brand" href="/Goa">GoaTrip</a>
          <a class="navbar-brand" href="/Dhoni">Dhoni</a>
        </div>
      </nav>
    )
  }
}

function App() {
  return (

    <Router>
      <div>
        <Link></Link>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/Book" component={Book} />
          <Route path="/Goa" component={Goa} />
          <Route path="/Dhoni" component={Third} />
          {/* We add the route param with : and put the component location where it should go */}
          <Route path="/profile/:id" component={Player} />
        </Switch>
      </div>
    </Router>


  );
}

export default App;
