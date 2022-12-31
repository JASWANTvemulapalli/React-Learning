import { createStore, combineReducers } from 'redux'

function CombineReducers() {
    let State = {
        users: [],
        customers: []
    }
    function user(state = State, action) {
        switch (action.type) {
            case 'AddUser':
                let user1 = {
                    name: action.name,
                    location: action.location,
                    phoneNumber: action.number
                }
                let arr = state.users;
                arr.push(user1)
                //Immuatable way of adding
                return {
                    ...state, users: arr
                };
            default:
                return state;
        }
    }

    function customers(state = State, action) {
        switch (action.type) {
            case 'AddCustomer':
                let user1 = {
                    name: action.name,
                    phoneNumber: action.number
                }
                let arr = state.customers;
                arr.push(user1)
                //Immuatable way of adding
                return {
                    ...state, customers: arr
                };
            default:
                return state;
        }
    }

    //we have to combine these both reducers using combineReducers()
    const rootReducer = combineReducers({
        user,
        customers
    })

    //Creating the store
    let store = createStore(rootReducer);
    //Dispatching the action
    store.dispatch({ type: 'AddUser', name: 'jaswant', location: 'thotlavalluru', number: '7675957989' })
    //Dispatching the action
    store.dispatch({ type: 'AddUser', name: 'sampath', location: 'mangalagiri', number: '9380674517' })
    //Dispatching the action
    store.dispatch({ type: 'AddUser', name: 'arafath', location: 'vijayawada', number: '9845331232' })
    //Dispatching the action
    store.dispatch({ type: 'AddCustomer', name: 'gagan', number: '7709098055' })
    //Dispatching the action
    store.dispatch({ type: 'AddCustomer', name: 'arafath', number: '6303996161' })

    let table = store.getState();
    console.log(table)

    return (
        <div>
            <h1>CombineReducers Demo</h1>
            <h2>Users Table</h2>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Location</th>
                        <th>phoneNumber</th>
                    </tr>
                </thead>
                <tbody>
                    {table.user.users.map(
                        (user) => (
                            <tr>
                                <td>{user.name}</td>
                                <td>{user.location}</td>
                                <td>{user.phoneNumber}</td>
                            </tr>
                        )
                    )}
                </tbody>
            </table>
        </div>
    )


}
export default CombineReducers;