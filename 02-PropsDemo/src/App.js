import logo from "./logo.svg";
import "./App.css";
import React from "react";

//This Component contains data of player details
class ParentComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      pname: ["Virat", "Dhoni", "Jadeja", "Bhumrah"],
      nom: [123, 170, 100, 95],
      pruns: [12000, 10000, 50000, 2000],
      pWickets: [0, 0, 0, 0], //To receive the data from child,
      index: 0,
    };
    this.PlayerChange = this.PlayerChange.bind(this);
    this.Runs = this.Runs.bind(this);
    this.Matches = this.Matches.bind(this);
    this.RecievedWickets = this.RecievedWickets.bind(this);
  }
  PlayerChange() {
    if (this.state.index < 3) {
      this.setState({ index: this.state.index + 1 });
    } else {
      this.setState({ index: 0 });
    }
  }
  Runs() {
    let arr = this.state.pruns;
    arr[this.state.index] += 1;

    this.setState({ pruns: arr });
  }
  Matches() {
    let arr = this.state.nom;
    arr[this.state.index] += 1;

    this.setState({ pnom: arr });
  }
  //Data recived from the child
  RecievedWickets = (wickets) => {
    let bowl = this.state.pWickets;
    bowl[this.state.index] = wickets;
    this.setState({ pWickets: bowl });
  };

  render() {
    return (
      <div>
        <h1>You are in Parent Player Component</h1>
        <h2> The player is {this.state.pname[this.state.index]}</h2>
        <h2> He played {this.state.nom[this.state.index]} matches</h2>
        <h2> He scored {this.state.pruns[this.state.index]} runs</h2>
        <button onClick={this.PlayerChange}>Change Player</button>
        <button onClick={this.Runs}>Increament Runs</button>
        <button onClick={this.Matches}>Increament Matches</button>
        <hr />
        {/* Passing props using keys pname,pscore with the associated values
        Note:Props is an javascript Object */}
        <Second
          name={this.state.pname[this.state.index]}
          matches={this.state.nom[this.state.index]}
          runs={this.state.pruns[this.state.index]}
        ></Second>

        <hr />
        <Third
          name={this.state.pname[this.state.index]}
          matches={this.state.nom[this.state.index]}
          wickets={this.state.pWickets[this.state.index]}
        ></Third>
        <hr />

        <Bowler details={this.RecievedWickets}></Bowler>
      </div>
    );
  }
}

//Default Props Example
// Second.defaultProps = {
//   name: 'Jaswant',
//   runs: 10000,
//   matches: 355,
// }

//This is how use use the data from parent by using props object as a  Functional component argument
function Second(props) {
  return (
    <div>
      <h1>Child Functional Component</h1>
      <h2>
        {props.name} scored a runs of {props.runs} in {props.matches} matches
        with an average of {Math.floor(props.runs / props.matches)}
      </h2>
    </div>
  );
}
//This is how use use the data from parent by using props object as a  Class component argument use this.props
class Third extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>Child Class Component</h1>
        <h2>
          The Player {this.props.name} had took {this.props.wickets} wickets in{" "}
          {this.props.matches} matches
        </h2>
      </div>
    );
  }
}

//Passing the data from child to parent use this.props.keyName and call the parentFunction
class Bowler extends React.Component {
  constructor(props) {
    super(props);
  }

  AddWickets = () => {
    //Using refs to access the dom object element tag
    let wickets = this.refs.wickets.value;
    this.props.details(wickets);
  };
  render() {
    return (
      <div>
        <label>wickets</label>
        <input type="text" ref="wickets" />
        <button onClick={this.AddWickets}>Add Wickets</button>
      </div>
    );
  }
}

function App() {
  let player = { pname: "Dhoni", pruns: 10000, pnom: 135 };
  return (
    <div className="App">
      <h1>Props Demo</h1>
      <hr />
      <ParentComponent></ParentComponent>
      {/* Passing props using keys pname,pscore with the associated values
      <Second pname='Virat' pscore={12000} pnom={120}></Second>
       Since the props is an javascript object we can pass anytype of data  
      <Second myPlayer={player}></Second> */}
    </div>
  );
}

export default App;
