import columns from "./car-values"

function Table({ cars }) {    
    return (
        <table>
            <thead>
                <tr>
                    {columns.map((item) => {
                        return (
                            <th key={item.id}>{item.labelName}</th>
                        )
                    })} 
                </tr>
            </thead>
            <tbody>
                {cars.map((item) => {
                        return (
                            <tr key={item.plate}>
                                <td>
                                    <img src={item.image} alt='' />
                                </td>
                                <td>{item.brandModel}</td>
                                <td>{item.year}</td>
                                <td>{item.plate}</td>
                                <td>
                                    <div background={item.color}></div>
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