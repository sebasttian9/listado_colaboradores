import './App.css'
import { BaseColaboradores } from './assets/BaseColaboradores.js';
import Listado from './components/Listado';


function App() {
  

  return (
    <>
  <Listado colaboradores={BaseColaboradores}></Listado>
    </>
  )
}

export default App
