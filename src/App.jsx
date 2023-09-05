import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BaseColaboradores } from './assets/BaseColaboradores.js';
import Listado from './components/Listado';
import Formulario from './components/Formulario';


function App() {
  

  return (
    <div className='container flex'>
      {/* <div className='row'> */}
        <div className='col-8'>
          <Listado colaboradores={BaseColaboradores}></Listado>
        </div>
        <div className='col-4'>
            <Formulario></Formulario>
        </div>
      {/* </div> */}
      
    </div>
  )
}

export default App
