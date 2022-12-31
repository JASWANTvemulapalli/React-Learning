import { createStore } from 'redux'
function Subscribe() {
    const store = createStore(counterReducer);

    function Increment() {
        document.body.innerText = store.getState();

    }
    document.addEventListener('click', function () {
        store.dispatch({ type: 'INCREMENT' })
    })
    /* we have to use store.subscribe() takes a function as an argument
          responsible for state change and to be displayed it in ui */
    store.subscribe(Increment)


    //Reducer For our Redux which takes the  state and action as arguments
    function counterReducer(state = 100, action) {
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
    return (
        <div>
            {document.body.innerText = store.getState()}</div>
    )

}
export default Subscribe;