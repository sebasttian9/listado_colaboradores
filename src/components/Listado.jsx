import React from 'react'

const Listado = ({colaboradores}) => {
    console.log(colaboradores)
  return (
    <div>
                <table>
                    <th>id</th>
                    <th>Nombre</th>
                    <tbody>        
        { 
        colaboradores.map( c =>  
            (
                

                        <tr>
                            <td>{c.id}</td>
                            <td>{c.nombre}</td>
                        </tr>
            )
        ) 
        }
            </tbody>
        </table>
    </div>
  )
}

export default Listado