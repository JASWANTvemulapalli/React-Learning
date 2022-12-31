import { createReducer, configureStore, createAction } from '@reduxjs/toolkit'
function UseRtk() {
    const inc = 'increment'
    const dec = 'decrement'
    //We use CreateAction
    const incrementruns = createAction('increment');
    const decrementruns = createAction('decrement');
    //Reducer Using rtk
    let istate = 100
    const counter = createReducer({ counter: 100 }, {
        [incrementruns]: (state) => ({
            counter: state.counter + 4
        }),
        [decrementruns]: (state) => ({
            counter: state.counter - 2
        })
    })
    //This is how we create a store in rtk ot can have multiple reducers and have middleware 
    //and also allows us to configure the dev tools
    const store = configureStore(
        {
            reducer: counter,
            //reducer:anotherReducer
        }
    )

    store.dispatch(incrementruns());
    console.log('after increment ' + store.getState())
    let iruns = store.getState().counter
    store.dispatch(decrementruns());
    console.log('after decrement ' + store.getState())
    let druns = store.getState().counter
    return (
        <div>
            <h1>Using ReduxToolKit</h1><hr />
            <h2>The orginal state is :{istate} after increment:{iruns} and after decrement:{druns}</h2>
        </div>
    )
}
export default UseRtk;