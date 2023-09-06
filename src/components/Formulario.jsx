import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Alert from './Alert';
import {useState, useId } from 'react';

const Formulario = ({listadoInicial,setlistadoFiltrado, setListadoInicial}) => {

  const [nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState('');
  const [edad, setEdad] = useState('');
  const [cargo, setCargo] = useState('');
  const [telefono, setTelefono] = useState('');
  const [error, setError] = useState(false);
  const [exito, setExito] = useState(false);
  const [mensaje, setMensaje] = useState('');
  const [tipo, setTipo] = useState('');
  const id = useId();

  function validateEmail(email){
    
    // Define our regular expression.
    var validEmail =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
  
    // Using test we can check if the text match the pattern
    if( validEmail.test(email) ){
      // alert('Email is valid, continue with form submission');
      return true;
    }else{
      // alert('Correo no es valido, intente nuevamente');
      setError(true);
      setTipo('danger');
      setMensaje('Correo no es valido, intente nuevamente');
      return false;
    }
  } 



  const agregar = (e) => {
    
    setExito(false);
    e.preventDefault(); 

    if(nombre=='' || edad == '' || correo=='' || cargo == '' || telefono == ''){
      setError(true);
      setTipo('danger');
      setMensaje('Complete todos los campos!');
      return;
    }

    validateEmail(correo);
 


    setlistadoFiltrado([...listadoInicial,{id: id,
    nombre: nombre,
    correo: correo,
    edad: edad,
    cargo: cargo,
    telefono: telefono}]);

    setListadoInicial([...listadoInicial,{id: id,
        nombre: nombre,
        correo: correo,
        edad: edad,
        cargo: cargo,
        telefono: telefono}]);

    setNombre('');
    setCargo('');
    setEdad('');
    setTelefono('');
    setCorreo('');
    setTipo('success');
    setMensaje('Registro agregado Exitosamente!');
    setError(false);
    setExito(true);
  }


  return (
    <Form onSubmit={agregar}>
      <h2 className='text-center'>Agregar Colaborador</h2>
      <Form.Control 
        type="text" 
        className='mt-3' 
        placeholder="Nombre" 
        onChange={event => setNombre(event.target.value)}
        value={nombre} />
      <Form.Control 
        type="email" 
        className='mt-3' 
        placeholder="micorreo@example.com"
        onChange={event => setCorreo(event.target.value)}
        value={correo}  />

      <Form.Control 
        type="text" 
        className='mt-3' 
        placeholder="Edad"
        onChange={event => setEdad(event.target.value)}
        value={edad} />

      <Form.Control 
        type="text" 
        className='mt-3' 
        placeholder="Cargo" 
        onChange={event => setCargo(event.target.value)}
        value={cargo} />

      <Form.Control 
        type="text" 
        className='mt-3' 
        placeholder="Telefono" 
        onChange={event => setTelefono(event.target.value)}
        value={telefono} />        

      <div className="d-grid gap-2 mt-3">
        <Button variant="success" type='submit' >Registrarse</Button>
      </div>
      {
        error ? <Alert mensaje={mensaje} tipo={tipo} ></Alert> : null
      }
      {
        exito ? <Alert mensaje={mensaje} tipo={tipo} ></Alert> : null
      }      
    </Form>
  )
}

export default Formulario