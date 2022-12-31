import { useState } from "react";
import React from "react";



//This data is used in UseContext.js for demonstrating useContext hook

const myplayer = {
    name: "Dhoni",
    matches: 98,
    runs: 1617
};

//Using Context to send the data to another component and access it by useContext hook
export const playerContext = React.createContext(myplayer);

export default function UseState() {


    //useState function and it returns an immutable tuple means we cannot change the values without using SetState function
    const [state, SetState] = useState({
        name: "Virat",
        matches: 104,
        runs: 3584
    })
    //We can use multiple state objects in functional components
    const [state2, SetState2] = useState({
        loaded: true,
        states: {}
    });

    function AddMatches() {
        //This is how we change the values of the state and cause the rerender but in fc we have to
        //use spread operator
        // SetState({
        //     name: state.name,
        //     matches: state.matches + 1,
        //     runs: state.runs
        // })

        SetState(
            (prevstate) => ({
                ...prevstate, matches: state.matches + 1
            })
        )
        SetState2((prevstate) => ({
            ...prevstate, states: state
        })
        )


    }
    function AddRuns() {
        // SetState({
        //     name: state.name,
        //     matches: state.matches,
        //     runs: state.runs + Math.floor(Math.random() * 100)
        // })
        SetState(
            (prev) => ({
                ...prev, runs: state.runs + Math.floor(Math.random() * 100)
            })
        )

    }

    return (
        <div>
            <h1>You are in UseState</h1>
            <h2>{state.name} has played {state.matches} and scored {state.runs} with an average of {Math.floor((state.runs) / state.matches) + 1} </h2>
            <button onClick={AddMatches}>Add Matches</button><br /><br />
            <button onClick={AddRuns}>Add Runs</button>
            <h2>{state2.states.name}</h2>

        </div>
    )
}
