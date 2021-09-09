import columns from "./car-values"
import Button from './button'

function Form({ handleSubmit}) {
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

            <Button type="submit">Cadastrar</Button>
        </form>
    );
};

export default Form;