import React from 'react';
import ProductList from './ProductList'; // Importa el componente ProductList

function HomePage({ userName }) {
  // Supongamos que tienes una lista de productos en este componente
  const products = [
    { id: 1, name: 'Camiseta', price: 20, image: 'camiseta.jpg' },
    { id: 2, name: 'Pantalón', price: 30, image: 'pantalon.jpg' },
    { id: 3, name: 'Vestido', price: 50, image: 'vestido.jpg' },
    { id: 4, name: 'Falda', price: 40, image: 'falda.jpg' }
    // Añade más productos aquí
  ];

  return (
    <div>
      <h1>Bienvenido a la tienda de ropa</h1>

      {/* Renderiza el componente ProductList aquí */}
      <ProductList products={products} />
    </div>
  );
}

export default HomePage;