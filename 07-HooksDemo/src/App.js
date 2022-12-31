import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Link, NavLink } from 'react-router-dom';
import UseState from './UseState';
import UseEffect from './UseEffect';
import UseContext from './UseContext';
import UseRefs from './UseRefs';
import UseMemo from './UseMemo';

function Links() {
  return (
    <div id="one">
      <NavLink to='/' activeClassName='active'> Home</NavLink>
      <NavLink to='/state' activeClassName='active'>State</NavLink>
      <NavLink to='/effect' activeClassName='active'>Effect</NavLink>

      <NavLink to='/context' activeClassName='active'>Context</NavLink>
      <NavLink to='/ref' activeClassName='active'>Ref</NavLink>
      <NavLink to='/memo' activeClassName='active'>Memo</NavLink>

    </div>
  )
}

function Home() {
  return (
    <h1>You are in Home Component</h1>
  )
}
function App() {
  return (

    <Router>
      <div className='App'>

        <h1 >HOOKS DEMO</h1>


        <Links></Links>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path='/state' component={UseState} />
          <Route path='/effect' component={UseEffect} />
          <Route path='/context' component={UseContext} />
          <Route path='/ref' component={UseRefs} />
          <Route path='/memo' component={UseMemo} />
        </Switch>
      </div>
    </Router>

  );
}

export default App;
