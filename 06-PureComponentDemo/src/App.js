import logo from './logo.svg';
import './App.css';
import React from 'react'
//Always extends your base class from React.PureComponent so that the page will only rerender when state changes
class PureComponent extends React.PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      count: 1
    }
    this.Increament = this.Increament.bind(this);

  }
  //Return a boolean based on that the rerender will happen we have to override this if we are extending from React.Component
  // shouldComponentUpdate() {
  //   return false;
  // }

  Increament() {
    //The Componenet will rerender when ever the state changes
    this.setState({ count: this.state.count + 1 })
    // console.log('render');
    // console.log(this.state.count);

    // the state is not changed so component will not rerender
    // this.setState({ count: 111 })

    console.log(this.state.count);
  }
  render() {
    return (
      <div>
        <h1>Counter Value is :{this.state.count}</h1>
        <button onClick={this.Increament}>Increment</button>
      </div>
    )
  }
}
//For errorboundary in react
class BuggyCounter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { counter: 100 }
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick() {
    this.setState({ counter: this.state.counter + 1 })
  }
  render() {
    if (this.state.counter === 103) {
      throw new Error('required');
    }
    return (
      <div>
        <h1 onClick={this.handleClick}>{this.state.counter}</h1>
      </div>
    )
  }
}
//Error Boundary class
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false, error: false, errorInfo: null
    }
  }
  //Should be overridden for logging in the errors
  componentDidCatch(error, errorInfo) {
    this.setState({
      error: error,
      errorInfo: errorInfo
    })

  }
  //The whole purpose of these method is so that if a error occurs it returns a fallback ui to end user
  static getDerivedStateFromError(error, errorInfo) {

  }
}
class DynamicLoading extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      average: 'welcome'
    }
    this.player = this.player.bind(this);

  }
  player() {
    //Using Dynamic Import
    import("./Player").then(play => {
      this.setState({ average: play.AverageFunction(1000, 30) })
    })

  }
  render() {
    return (
      <div>
        <button onClick={this.player}>Load Player Module</button>
        <h3>Average is:{this.state.average}</h3>
      </div>
    )
  }
}


function App() {
  return (
    <div className="App">
      <h1>Demo For Pure Component</h1>
      <PureComponent></PureComponent><hr />
      <h1>Error Boundry</h1>
      <BuggyCounter></BuggyCounter>
      <hr />
      <h1>Dynamic Loading</h1>
      <DynamicLoading></DynamicLoading>
    </div >
  );
}

export default App;
