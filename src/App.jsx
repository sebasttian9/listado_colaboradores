import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BaseColaboradores } from './assets/BaseColaboradores.js';
import Listado from './components/Listado';
import Formulario from './components/Formulario';
import { useState } from 'react';
import Buscador from './components/Buscador';


function App() {
  
  const [listadoInicial, setListadoInicial] = useState(BaseColaboradores);
  const [listadoFiltrado, setlistadoFiltrado] = useState(listadoInicial);

  return (
    <div className='container flex'>
      <div className='row'>
        <div className='col-8 col-sm-12 col-xl-8'>
          <Buscador colaboradores={listadoInicial} setlistadoFiltrado={setlistadoFiltrado}></Buscador>
          <Listado           
            listadoInicial={listadoInicial} 
            setListadoInicial={setListadoInicial}
            listadoFiltrado={listadoFiltrado}
            setlistadoFiltrado={setlistadoFiltrado}>
          </Listado>
        </div>
        <div className='col-4 col-sm-12 col-xl-4'>
            <Formulario 
              listadoInicial={listadoInicial} 
              setListadoInicial={setListadoInicial}
              listadoFiltrado={listadoFiltrado}
              setlistadoFiltrado={setlistadoFiltrado}
              ></Formulario>
        </div>
      </div>
      
    </div>
  )
}

export default App
