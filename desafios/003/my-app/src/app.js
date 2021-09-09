import Form from './form'
import Table from './table'
import { useState} from 'react'


function App() {
    const [cars, setCars] = useState([])
    
    function handleSubmit(e) {
        e.preventDefault()
        const carData = {
            image: e.target.elements.image.value,
            brandModel: e.target.elements.brandModel.value,
            year: e.target.elements.year.value,
            plate: e.target.elements.plate.value,
            color: e.target.elements.color.value,
        }
        
        setCars((cars) => {
            return (cars.concat(carData))
        })

        e.target.reset();
    };

    return(
        <div className="cars">
            <Form  handleSubmit={ handleSubmit } cars={cars}/>
            <Table cars={ cars } />
        </div>
    )
}

export default App