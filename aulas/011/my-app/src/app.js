import { useState } from 'react'

function App () {
    const [counter, setCounter] = useState(null);

    console.log('state: ', counter);

    function decrement () {
        setCounter(counter - 1);
    };

    function increment () {
        setCounter(counter + 1);
    };

    return (
        <>
            <h1>
                {counter === null
                    ? 'Contador vazio'
                    : 'Contador: ' + counter
                }
            </h1>
            <button onClick={decrement}>-</button>
            <button onClick={increment}>+</button>
        </>//Utilizando Operador ternário
    )
}

export default App;

//Utilizando curto circuito:
//<h1>
//  {counter === null && 'Contador vazio'}
//  {counter !== null && 'Contador: ' + counter}
//</h1>