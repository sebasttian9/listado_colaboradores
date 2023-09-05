import Table from 'react-bootstrap/Table';

const Listado = ({colaboradores}) => {
    console.log(colaboradores)
  return (
    <div>
        <Table striped bordered hover size="lg">
                <thead>
                    <th>id</th>
                    <th>Nombre</th>
                    <th>Correo</th>
                    <th>Edad</th>
                    <th>Cargo</th>
                    <th>Telefono</th>
                </thead>
                <tbody>        
        { 
        colaboradores.map( c =>  
            (
                
                        <tr>
                            <td>{c.id}</td>
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