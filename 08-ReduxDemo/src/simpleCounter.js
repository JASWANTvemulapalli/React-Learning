import { useState } from 'react';
import { createStore } from 'redux'


function SimpleCounter() {
    const [stat, setState] = useState(100);
    //using createstore will create a store where the state will be there it takes Reducer as an argument
    const store = createStore(counterReducer);
    //getstate will give the state from the store
    console.log("state initial value is:" + store.getState())
    //If we want to dispatch an action we use this
    store.dispatch({ type: 'INCREMENT' })
    console.log("state value after (Increment) is:" + store.getState())

    // store.dispatch({ type: 'DECREMENT' })
    // console.log("state value after (Decrement) is:" + store.getState())
    const prevstate = stat;
    let curstate = store.getState()




    return (
        <div>
            <h1>Counter Redux Demo</h1>
            <h2>Look At the Console</h2>
            <h2>The state value : prevstate is :{prevstate} current state is :{curstate}</h2>
            <hr />


        </div>
    )




    //Reducer For our Redux which takes the  state and action as arguments
    function counterReducer(state = stat, action) {
        console.log("Reducer Called");
        switch (action.type) {
            case 'INCREMENT':
                state = state + 1
                //setState(state);
                return state;
            case 'DECREMENT':
                state = state - 1
                //setState(state)
                return state;
            default:
                return state;
        }
    }
}
export default SimpleCounter;


