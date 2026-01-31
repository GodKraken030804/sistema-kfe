import React from 'react';
import Button from '../atoms/Button';
import Price from '../atoms/Price';

const ProductCard = ({ product, onAdd }) => {
  return (
    <div className="bg-white p-4 rounded-2xl shadow-lg border border-gray-100 flex flex-col items-center gap-3 hover:shadow-2xl transition-all w-64">
      
      <div className="w-full h-40 bg-gray-100 rounded-xl flex items-center justify-center overflow-hidden">
        <img 
          src={product.image || 'https://via.placeholder.com/150'} 
          alt={product.name} 
          className="w-full h-full object-cover"
        />
      </div>

      
      <div className="text-center">
        <h3 className="text-lg font-bold text-gray-800 uppercase leading-tight">{product.name}</h3>
        <p className="text-xs text-gray-400 mb-2">{product.category}</p>
        <Price amount={product.price} />
      </div>

    
      <div className="w-full mt-2">
        <Button onClick={() => onAdd(product)}>
          Agregar al Pedido
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;