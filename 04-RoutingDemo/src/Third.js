import React from "react";
import { Link, Route, Router } from "react-router-dom";
import Player from "./Player";
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
        const path = '/profile/1';
        const match = {
            id: 1,
            player: this.state
        }
        return (
            <div>
                <h1>This is my ClassComponent</h1>
                <h1> {this.state.name} has scored {this.state.runs} runs in {this.state.nom}
                    matches with average of {Number.parseInt(this.state.runs / this.state.nom)}</h1>
                <button onClick={() => { this.setState({ nom: this.state.nom + 1 }); }} className="btn btn-primary" >Increment matches</button>
                <button onClick={this.Runs} className="btn btn-primary" >Increment runs</button>
                <button onClick={this.Reg} className="btn btn-primary" >RegularFunction</button>
                <hr />
                {/* This is the link component in the our class component saying where to go with the data */}
                <Link to={path}  >Profile</Link>

            </div>);
    }

}
export default Third;