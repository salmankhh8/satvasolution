import React from 'react'

function Datatable({data}) {
    const columns = data[0] && Object.keys(data[0])
    return (
        <div>
        <table cellPadding={0} cellSpacing={0}>
        <tr>{data[0] && columns.map((heading)=><th>{heading} </th>)}</tr>
        </table>  
        <tbody>
            {data.map(row=><tr>
            {
                columns.map(column=><td>{row[column]}</td>)
            }
            </tr>
            )}
        </tbody>     
        </div>
    )
}

export default Datatable
