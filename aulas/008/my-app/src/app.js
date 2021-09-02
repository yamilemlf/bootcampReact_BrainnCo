const lista = [1, 2, 3];

function App () {
    return (
        <>
            <ul>
                {lista.map((item) => (
                    <li key={item}>{item}</li>                
                ))}
            </ul>
        </>
        
    )
}

export default App;