import {Col,Button,Card} from 'react-bootstrap'
import { useBebidas } from '../hooks/useBebidas'

export const Bebida = ({bebida}) => {
  const {handleModalClick, consultarBebidasPorId}=useBebidas()
  return (
    <Col md={6} lg={3}>
      <Card className='my-2'>
        <Card.Img variant='top' src={bebida.strDrinkThumb} alt={`Imagen de ${bebida.strDrink}`}/>
        <Card.Body>
          <Card.Title>
              {bebida.strDrink}
          </Card.Title>
          <Button 
          variant='warning' 
          className='w-100 text-uppercase mt-2' 
          onClick={()=>{
            handleModalClick()
            consultarBebidasPorId(bebida.idDrink)
          
          }}>
            Ver Receta
          </Button>
        </Card.Body>
      </Card>
      
    </Col>
  )
}
 