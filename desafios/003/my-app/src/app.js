import Form from './form'
import Table from './table'
import { useEffect, useState } from 'react'
import { get } from './http'

function App() {
    const [cars, setCars] = useState([])
    const [errorMessage, setErrorMessage] = useState(null)

    const columns = [
        { labelName: 'Imagem (URL)', type: 'text', id: 'image' },
        { labelName: 'Marca/Modelo', type: 'text', id: 'brandModel' },
        { labelName: 'Ano', type: 'number', id: 'year' },
        { labelName: 'Placa', type: 'text', id: 'plate' },
        { labelName: 'Cor', type: 'color', id: 'color' }
    ]
   
    const url = 'http://localhost:3333/cars'
    console.log('cars: ', cars)
    
    useEffect(() => {
        get(url).then(result => {
            if(result.error) {
                setErrorMessage(result.message)
                return
            }
            setCars(result)
        })
    }, [])
    
    return(
        <>
            {errorMessage !== null && (
                <div className="error-message hide" />
            )}
            <div className="cars">
                <Form data-js="cars-form" columns={columns} setCars={setCars} cars={cars}/>   
                <Table columns={columns} cars={cars}/>           
            </div>
        </>
        
    )
}

export default App