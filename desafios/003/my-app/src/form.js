import columns from "./car-values"

function Form() {
    return (
        <form>
            <h3>Preencha os dados abaixo</h3>
            {columns.map((item) => (
                <div key={item.id}>
                    <label htmlFor={item.id}>{item.labelName}</label>
                    <input type={item.type} id={item.id} name={item.id}></input>
                </div>
            ))}
        </form>
    )
}

export default Form