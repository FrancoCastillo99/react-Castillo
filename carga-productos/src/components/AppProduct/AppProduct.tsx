import { Header } from './Header/Header'
import { FormProducts } from './FormProducts/FormProducts'
import { useState } from 'react';
import { ListProduct } from './ListProduct/ListProduct';

interface ItemProduct {
  nombre: string;
  imagen: string;
  precio: number;
}

export const AppProduct = () => {

    const [products, setProducts] = useState<ItemProduct[]>([]);

    const handleAddProduct = (newItem: ItemProduct) => {
      setProducts((prev) => [...prev, newItem]);	
    };

  return (
    <>
      <Header></Header>
      <h2 className='text-center mt-4'>Formulario</h2>
      <FormProducts handleAddProduct={handleAddProduct} />
      <h2 className='text-center'>Lista de productos</h2>
      {products.length > 0 ? <ListProduct arrItems={products} /> : <h4 className='text-center'>No hay productos</h4>}
    </>
    )
}
