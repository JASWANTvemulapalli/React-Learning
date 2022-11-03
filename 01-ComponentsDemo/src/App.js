import logo from './logo.svg';
import './App.css';
import './Form.css';
import MyName from './Goa';
import React from 'react';
import './Goa.css';


/* Class Component also called as State FullComponent
The class Should extends the React.Component 
The one main function that should be overridden is the "RENDER()" 
The render(): It is used for UI display of the Component
              The return will be used for the UI
*/
class Third extends React.Component {
  constructor() {
    super();
    //I am using state object of react and initialize the properties of the component.
    this.state = { name: "Dhoni", nom: 255, average: 0, runs: 10000 }
    //We have to bind the regular function inorder to use the state object inside that function
    this.Reg = this.Reg.bind(this);
  }


  Runs = () => { this.setState({ runs: this.state.runs + 1 }); }
  Reg() {
    alert(" Event Handler using Regular Function inside the class Component");
    //This will Throw an error as Uncaught Type error because in regular function the this is reserved for that event object not the state object
    alert("Runs scored is " + this.state.runs);


  }

  render() {
    return (
      <div>
        <h1>This is my ClassComponent</h1>
        <h1> {this.state.name} has scored {this.state.runs} runs in {this.state.nom}
          matches with average of {Number.parseInt(this.state.runs / this.state.nom)}</h1>
        <button onClick={() => { this.setState({ nom: this.state.nom + 1 }); }} className="btn btn-primary" >Increment matches</button>
        <button onClick={this.Runs} className="btn btn-primary" >Increment runs</button>
        <button onClick={this.Reg} className="btn btn-primary" >RegularFunction</button>
      </div>);
  }

}
// For Multi Elements HTML
function Second() {
  return (
    <>
      <h1> I am in the second Component</h1>

    </>
  );
}

// how to use variables  and expressions and starting another component in one component
function Fourth() {
  let name = "Jaswant";
  let age = 21;
  return (
    <>
      <h2>His name is {name} and his age is {age} </h2>
      <hr />
      <Form></Form>


    </>

  );
}

// Forms in jsx
function Form() {
  function Score() {
    let playerName = document.querySelector("#name").value;
    let score = document.querySelector("#score").value;
    let matches = document.querySelector("#matches").value;
    alert(`The Average of ${playerName} is ${AverageScore(Number.parseInt(score), Number.parseInt(matches))}`);
  }

  return (
    <>
      <form className='Form1'>
        <label htmlFor='name'>Name of the Player:</label>
        <input type='text' id='name' /><br />
        <label htmlFor='matches'>MatchesPlayed:</label>
        <input type='text' id='matches' /><br />
        <label htmlFor='score'>Score:</label>
        <input type='text' id='score' /><br />
        <button onClick={Score}>Average Calculator</button>
      </form>
    </>
  );
}
function AverageScore(totalScore, matchesPlayed) {
  return (Math.floor(totalScore / matchesPlayed) + 1)
}
//Function Component 








function App() {
  let runs = 10000;
  let matches = 125;
  function IncreamentMatches() {
    matches = matches + 1;
    console.log(matches);
  }
  const IncreamentRuns = () => {
    runs = runs + 1;
    console.log(runs);
  }

  function Show() {
    alert(`${runs / matches}`);
  }



  return (
    <div className="App">
      <h1>This is my Functional Component</h1>
      <h1>virat has scored {runs} runs in {matches} matches with average of {Math.floor(runs / matches)}</h1>

      <button onClick={IncreamentMatches} className="btn btn-primary" >Increment matches</button>
      <button onClick={IncreamentRuns} className="btn btn-primary" >Increment runs</button>

      {/* Always use Arrow Functions in Functional Component */}
      {/* <button onClick={Show} className="btn btn-primary" >show</button> */}

      <button onClick={() => Show()} className="btn btn-primary" >show</button>
      <hr />
      {/* This is how to add component to our html */}
      <Second></Second>
      <hr />
      <Third></Third>
      <hr />
      <Fourth></Fourth>
      <hr />
      <MyName></MyName>



    </div>
  );
}

export default App;
