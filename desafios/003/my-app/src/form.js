import { post } from './http'

function Form({ columns, setCars, setErrorMessage }) {
    const handleSubmit = async (e) => {
        e.preventDefault()

        const carData = {
            image: e.target.elements.image.value,
            brandModel: e.target.elements.brandModel.value,
            year: e.target.elements.year.value,
            plate: e.target.elements.plate.value,
            color: e.target.elements.color.value,
        }

        const result = await post('http://localhost:3333/cars', carData)
        
        if(result.error) {
            setErrorMessage(result.message)
            return
        }

        setCars(cars => {
            return (cars.concat(carData))
        })

        e.target.reset();
    }
    
    return (
        <form onSubmit={handleSubmit}>            
            <h3>Preencha os dados abaixo</h3>

            {columns.map((item) => {
                return (
                    <div key={item.id}>
                        <label htmlFor={item.id}>{item.labelName}</label>
                        <input type={item.type} id={item.id} name={item.id}></input>
                    </div>
                )            
            })}

            <button type="submit" >Cadastrar carro</button>
        </form>
    );
};

export default Form;






