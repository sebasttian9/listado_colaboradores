import Table from 'react-bootstrap/Table';

const Listado = ({listadoInicial,listadoFiltrado}) => {
    
  return (
    <div>
        <Table striped bordered hover size="lg">
                <thead>
                    <th>Nombre</th>
                    <th>Correo</th>
                    <th>Edad</th>
                    <th>Cargo</th>
                    <th>Telefono</th>
                </thead>
                <tbody>        
        { 
        listadoFiltrado.map( (c,index) =>  
            (
                
                        <tr key={index}>
                            <td>{c.nombre}</td>
                            <td>{c.correo}</td>
                            <td>{c.edad}</td>
                            <td>{c.cargo}</td>
                            <td>{c.telefono}</td>
                        </tr>
            )
        ) 
        }
                </tbody>
        </Table>
    </div>
  )
}

export default Listado