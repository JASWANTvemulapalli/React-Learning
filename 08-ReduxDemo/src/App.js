import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import React from 'react';
import SimpleCounter from './simpleCounter';
import Subscribe from './Subscribe';
import CombineReducers from './CombineReducers';
import UseRtk from './UsingRtk';

function Home() {
  return (
    <div>
      <h1>Redux Demo</h1>
    </div>
  )
}

class Link extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div className='link'>
        <a href='/'>Home</a>
        <a href='/simplecounter'>Simple Counter</a>
        <a href='/subscribe'>Subscribe</a>
        <a href='/combinereducers'>CombineReducers</a>
        <a href='/reduxtoolkit'>Using RTK</a>
      </div>
    )
  }
}

function App() {
  return (
    <Router>
      <div >
        <Link /></div>
      <Switch>

        <Route exact path='/' component={Home} />
        <Route path='/simplecounter' component={SimpleCounter} />
        <Route path='/subscribe' component={Subscribe} />
        <Route path='/combinereducers' component={CombineReducers} />
        <Route path='/reduxtoolkit' component={UseRtk} />
      </Switch>
    </Router>
  )
}

export default App;
