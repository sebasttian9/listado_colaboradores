import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import {useState} from 'react';

const Buscador = ({colaboradores,setlistadoFiltrado}) => {

    
    
    

  const buscar = (e) => {
      
      const textoBuscar = e.target.value;

      const nuevoListado = colaboradores.filter((c) => c.nombre.toLowerCase().includes(textoBuscar.toLowerCase()) || 
                                                       c.correo.toLowerCase().includes(textoBuscar.toLowerCase()) ||
                                                       c.cargo.toLowerCase().includes(textoBuscar.toLowerCase()) ||
                                                       c.telefono.toLowerCase().includes(textoBuscar.toLowerCase()) || 
                                                       c.edad.toLowerCase().includes(textoBuscar.toLowerCase()));

      setlistadoFiltrado(nuevoListado);

      // if(textoBuscar){
      //   editColaborador(nuevoListado);
      //   // console.log(textoBuscar+'1')
      // }else{
      //   editColaborador(original);
      //   // console.log('nada'+textoBuscar+'')
      // }
  }



  return (
    <div>
        <InputGroup size="sm" className="mb-3">
          <InputGroup.Text id="inputGroup-sizing-sm">Buscar</InputGroup.Text>
          <Form.Control
            aria-label="Small"
            aria-describedby="inputGroup-sizing-sm"
            onChange={buscar}
          />
        </InputGroup>
    </div>
  )
}

export default Buscador