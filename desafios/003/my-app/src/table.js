import columns from "./car-values"

function Table() {
    return (
        <table>
            <thead>
                <tr>
                    {columns.map((item) => (
                        <th key={item.id}>{item.labelName}</th>
                    ))}
                </tr>
            </thead>
            <tbody></tbody>
        </table>
    )
}

export default Table