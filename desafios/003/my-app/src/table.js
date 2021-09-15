function Table({ columns, cars, handleDelete }) {
    return (
        <table>
            <thead>
                <tr>
                    {columns.map((item) => {
                        return (
                            <th key={item.id}>{item.labelName}</th>
                        )
                    })}
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {cars.length === 0 && 
                    <tr>
                        <td>Nenhum carro cadastrado</td>
                    </tr>}
                {cars.length !== 0 && cars.map((item) => {
                        return (
                            <tr key={item.plate}>
                                <td>
                                    <img src={item.image} alt='' />
                                </td>
                                <td>{item.brandModel}</td>
                                <td>{item.year}</td>
                                <td>{item.plate}</td>
                                <td>
                                    <div className="divColor" style={{backgroundColor: item.color}}></div>
                                </td>
                                <td>
                                    <button onClick={() => {handleDelete(item.plate)}}>Excluir</button>
                                </td>
                            </tr>
                        )
                    })
                }   
            </tbody>
        </table>
    )
}

export default Table

