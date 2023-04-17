import {Modal, Image} from 'react-bootstrap'
import { useBebidas } from '../hooks/useBebidas'
import { SpinnerLoading } from './SpinnerLoading'

export const ModalBebida = () => {
  const{modal, handleModalClick, recetaBebida, cargando}= useBebidas()
  console.log(recetaBebida)

  const mostrarIngredientes=()=>{
      let ingredientes =[]
      for(let i=1; i<16 ; i++){
        if(recetaBebida[`strIngredient${i}`]){
            ingredientes.push(
              <li key={i}>{recetaBebida[`strIngredient${i}`]} {recetaBebida[`strMeasure${i}`]}</li>
            )
        }
      }

      return ingredientes
  }

  return (
   
    cargando ? <Modal show={modal} onHide={()=>{
      handleModalClick()
    }}>
      <Modal.Body className='m-auto'>
            <div className="p-3 ">
               <SpinnerLoading/>
            </div>
        </Modal.Body>

    </Modal>   : (
        <Modal show={modal} onHide={()=>{
          handleModalClick()
        }}>
          <Image src={recetaBebida.strDrinkThumb} alt={`Imagen receta ${recetaBebida.strDrink}`}/>
          <Modal.Header>
              <Modal.Title>{recetaBebida.strDrink}</Modal.Title>
          </Modal.Header>
            <Modal.Body>
                <div className="p-3">
                  <h2>Instrucciones</h2>
                  {recetaBebida.strInstructions}
                  <h2>Ingredientes y Cantidades</h2>
                  {mostrarIngredientes()}
                </div>
            </Modal.Body>
        </Modal>)
        

        

 )     

}
