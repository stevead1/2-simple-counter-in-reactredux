import React from "react";
import Counter from "./counter.jsx";
import { createStore } from "redux";
import { Provider } from "react-redux";


const initialState = {
    count: 0
}

function reducer(state = initialState, action) {
    console.log("1",action.type)
    //console.log("2",action)
    switch (action.type) {
        case "INCREMENT":
            return {
                count: state.count + 1
            }
        case "DECREMENT":
            return {
                count: state.count - 1
            }
        default:
            return state
    }
}

const store = createStore(reducer);
//store.dispatch({type: "INCREMENT"}) 
//store.dispatch({type: "DECREMENT"})

const App = () => (
    <Provider store={store}>
        <Counter />
    </Provider>
)

export default App