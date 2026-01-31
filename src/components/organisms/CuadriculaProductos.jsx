import React from 'react';
import ProductCard from '../molecules/TarjetaProducto';

const ProductGrid = ({ onAddProduct }) => {
  // Datos de prueba
  const products = [
    { id: 1, name: "Moka Helado", price: 65, category: "Bebidas Frías", image: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?q=80&w=200&auto=format&fit=crop" },
    { id: 2, name: "Espresso", price: 35, category: "Bebidas Calientes", image: "https://images.unsplash.com/photo-1510707577719-ae7c14805e3a?q=80&w=200&auto=format&fit=crop" },
    { id: 3, name: "Capuchino", price: 50, category: "Bebidas Calientes", image: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?q=80&w=200&auto=format&fit=crop" },
    { id: 4, name: "Panini de Jamón", price: 85, category: "Alimentos", image: "https://images.unsplash.com/photo-1528733918455-5a59687cedf0?q=80&w=200&auto=format&fit=crop" },
    { id: 5, name: "Galleta Chispas", price: 25, category: "Repostería", image: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?q=80&w=200&auto=format&fit=crop" },
    { id: 6, name: "Frappé Caramelo", price: 75, category: "Bebidas Frías", image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?q=80&w=200&auto=format&fit=crop" },
    { id: 7, name: "Cheesecake", price: 60, category: "Repostería", image: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?q=80&w=200&auto=format&fit=crop" },
    { id: 8, name: "Té Verde Matcha", price: 55, category: "Bebidas Calientes", image: "https://images.unsplash.com/photo-1515823064-d6e0c04616a7?q=80&w=200&auto=format&fit=crop" },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-6">
      {products.map((product) => (
        <ProductCard 
          key={product.id} 
          product={product} 
          onAdd={onAddProduct} 
        />
      ))}
    </div>
  );
};

export default ProductGrid;