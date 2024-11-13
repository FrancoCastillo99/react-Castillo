import { Button, Form } from 'react-bootstrap'
import { useForm } from '../../../hooks/useForm'
import { FC } from 'react';

interface IPropsFormProducts {
    handleAddProduct: Function;
}

export const FormProducts: FC<IPropsFormProducts> = ({ handleAddProduct }) => {

    const { values, handleChange, resetForm } = useForm({
        nombre: '', 
        imagen: '',
        precio: 0,
    });

    const handleSubmit = () => {
        handleAddProduct(values);
        resetForm();
    }


  return (
    <Form className='p-4 border rounded m-3'>
        <Form.Group controlId='formNombre'>
            <Form.Label>Nombre</Form.Label>
            <Form.Control type='text' name = 'nombre' placeholder='Nombre del producto' value ={values.nombre} onChange={handleChange} />
        </Form.Group>

        <Form.Group controlId='formImagen'>
            <Form.Label>Imagen</Form.Label>
            <Form.Control type='text' name = 'imagen' placeholder='Imagen del producto' value ={values.imagen} onChange={handleChange} />
        </Form.Group>

        <Form.Group controlId='formPrecio'>
            <Form.Label>Precio</Form.Label>
            <Form.Control type='number' name = 'precio' placeholder='Precio del producto' value ={values.precio} onChange={handleChange} />
        </Form.Group>

        <div className='d-flex justify-content-center mt-4'>
        <Button variant="dark" onClick={handleSubmit}> Agregar Producto </Button>
        </div>
    </Form>
    )
}
