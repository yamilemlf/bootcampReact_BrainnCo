import { useState } from 'react'

function App () {
    const [counter, setCounter] = useState(0); /// retorna um array [0, função]
    //const counter = state[0]; /// se refere ao primeiro item do array, ou seja, 0
    //const setCounter = state[1]; /// se refere ao segundo item do array, ou seja, a função

    function decrement () {
        setCounter(counter - 1);
    };

    function increment () {
        setCounter(counter + 1);
    };

    return (
        <>
            <h1>Contador: {counter}</h1>
            <button onClick={decrement}>-</button>
            <button onClick={increment}>+</button>
        </>
    )
}

export default App;