import Alertt from 'react-bootstrap/Alert';

const Alert = ({mensaje,tipo}) => {
  return (
    <Alertt variant={tipo} className='mt-3 text-center'>{mensaje}</Alertt>
  )
}

export default Alert