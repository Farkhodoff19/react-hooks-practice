import React, { useReducer } from "react";
import reducer from "./reducer";

function App() {
    const [{r , g , b}, dispatch] = useReducer(reducer, {
        r:0, 
        g:150, 
        b:200
    })
    return (
    <div className="App">
        <h1 
        style={{
        color: `rgb(${r}, ${g}, ${b})`
        }}
        >
        useImperativeHandle Hook</h1>
        <div>
            <span>R</span>
            <button onClick={() => dispatch({type: 'INCREMENT_R'})}>+</button>
            <button onClick={() => dispatch({type: 'DECREMENT_R'})}>-</button>
        </div>
        <div>
            <span>G</span>
            <button onClick={() => dispatch({type: 'INCREMENT_G'})}>+</button>
            <button onClick={() => dispatch({type: 'DECREMENT_G'})}>-</button>
        </div>
        <div>
            <span>B</span>
            <button onClick={() => dispatch({type: 'INCREMENT_B'})}>+</button>
            <button onClick={() => dispatch({type: 'DECREMENT_B'})}>-</button>
        </div>
    </div>
    );
}

export default App;