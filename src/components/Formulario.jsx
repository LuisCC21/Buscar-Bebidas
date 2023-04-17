
import { useState } from 'react'
import {Button, Form, Row, Col, Alert} from 'react-bootstrap'
import { useBebidas } from '../hooks/useBebidas'
import { useCategorias } from '../hooks/useCategorias'
export const Formulario = () => {
    const {categorias}=useCategorias()
    const [busqueda, setBusqueda] = useState({
        nombre:'',
        categoria:''
    })
    const [error, setError] = useState('')
    const {consultarBebidas}=useBebidas()

    const handleSubmit = (e)=>{
        e.preventDefault();
        if(Object.values(busqueda).includes('')){
            setError('No pueden quedar datos vacios')
            return
        }

        consultarBebidas(busqueda)
        setError('')
    }
  return (
    <Form onSubmit={handleSubmit}>
        {error && <Alert variant='danger text-center ' >{error}</Alert>}
        <Row>
            <Col md={6}>
                <Form.Group className='mb-3'>
                    <Form.Label htmlFor='nombre'>Nombre Bebida:</Form.Label>
                    <Form.Control
                     type="text"
                     id='nombre'
                      placeholder='Ej: Tequila, Vodka, etc'
                      name='nombre'
                      onChange={e=>setBusqueda({
                            ...busqueda,
                            [e.target.name]:e.target.value
                      }) } 
                      >

                    </Form.Control>
                </Form.Group>
            </Col>
            <Col md={6}>
                <Form.Group className='mb-3'>
                    <Form.Label htmlFor='categoria'>Categoria Bebida:</Form.Label>
                    <Form.Select
                        id='categoria'
                        name='categoria'
                        onChange={e=>setBusqueda({
                            ...busqueda,
                            [e.target.name]:e.target.value
                      }) } 
                    >
                        <option value={''}>- Selecciona Categoria -</option>
                        {categorias.map((categoria)=>(
                            <option key={categoria.strCategory} value={categoria.strCategory}>{categoria.strCategory}</option>
                        ))}
                    </Form.Select>
                </Form.Group>
            </Col>
        </Row>

        <Row className='justify-content-end'>
            <Col md={3} >
                <Button 
                    variant='danger'
                    className='text-uppercase w-100'
                    type ='submit'
                >
                    Buscar Bebidas
                </Button>
            </Col>
        </Row>
    </Form>
  )
}
