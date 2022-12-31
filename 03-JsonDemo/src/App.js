import logo from './logo.svg';
import './App.css';
import React from 'react';
import Json from './Json';

//Working with Inmemeory JsonDataSet
class Second extends React.Component {
  id = 6;
  constructor() {
    super();
    this.state = {
      players: [
        {
          Id: 1,
          Name: 'Virat',
          Matches: 101,
          Runs: 3402,
          Wickets: 4
        },
        {
          Id: 2,
          Name: 'Dhoni',
          Matches: 98,
          Runs: 1617,
          Wickets: 0
        },
        {
          Id: 3,
          Name: 'Jadeja',
          Matches: 64,
          Runs: 457,
          Wickets: 51
        },
        {
          Id: 4,
          Name: 'Hardik',
          Matches: 68,
          Runs: 867,
          Wickets: 53
        },
        {
          Id: 5,
          Name: 'Bumrah',
          Matches: 58,
          Runs: 8,
          Wickets: 69
        }
      ]

    }
    this.Add = this.Add.bind(this);


  }


  Add() {
    let arr = this.state.players;


    arr.push(
      {
        Id: this.id,
        Name: 'Jaswant',
        Matches: 0,
        Runs: 0,
        Wickets: 0
      }
    )
    this.setState({ players: arr });
    this.id += 1;
  }
  render() {
    return (
      <div>
        <table border="1px solid #ff00ff" >
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Matches</th>
              <th>Runs</th>
              <th>Wickets</th>
            </tr>
          </thead>
          <tbody>
            {this.state.players.map(
              myplayer => (
                <tr key={myplayer.Id}>
                  <td >{myplayer.Id}</td>
                  <td >{myplayer.Name}</td>
                  <td >{myplayer.Matches}</td>
                  <td >{myplayer.Runs}</td>
                  <td>{myplayer.Wickets}</td>
                </tr>
              )
            )}
          </tbody>
        </table>
        <button onClick={this.Add}>Add Player</button>
      </div>
    )
  }
}



function App() {
  return (
    <div className="App">
      <h1>Using Json Data</h1>
      <hr />
      <Second></Second>
      <hr />
      <h1>Data From Json Server</h1>
      <Json></Json>
    </div>
  );
}

export default App;
