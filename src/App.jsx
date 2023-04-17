import {Container} from 'react-bootstrap'
import { Formulario } from './components/Formulario'
import { ListadoBebidas } from './components/ListadoBebidas'
import { ModalBebida } from './components/ModalBebida'
import { BebidasProvider } from './context/BebidasProvider'
import { CategoriasProvier } from './context/CategoriasProvider'


function App() {


  return (
   <CategoriasProvier>
    <BebidasProvider>


        <header className='py-5'>
            <h1>Buscador de Bebidas</h1>
        </header>

        <Container className='mt-5'>
          <Formulario/>
          <ListadoBebidas/>
          <ModalBebida/>
        </Container>
        
      </BebidasProvider>
   </CategoriasProvier>
  )
}

export default App
