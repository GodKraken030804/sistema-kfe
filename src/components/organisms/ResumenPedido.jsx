import React from 'react';
import CartItem from '../molecules/ElementoCarrito';
import Button from '../atoms/Boton';
import Price from '../atoms/Precio';

const OrderSummary = ({ cart, onRemoveItem, onCheckout }) => {
 
  const total = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);

  return (
    <div className="bg-white max-h-[700px] flex flex-col shadow-xl border border-gray-200 w-80 lg:w-96 rounded-xl mt-10 mr-10">
      <div className="p-6 border-b border-gray-100 bg-kfe-brown rounded-t-xl">
        <h2 className="text-xl font-black text-white uppercase tracking-tighter">
          Ticket de Venta
        </h2>
      </div>

     
      <div className="flex-1 overflow-y-auto">
        {cart.length === 0 ? (
          <div className="p-10 text-center text-gray-400">
            <p>El ticket está vacío</p>
          </div>
        ) : (
          cart.map((item) => (
            <CartItem key={item.id} item={item} onRemove={onRemoveItem} />
          ))
        )}
      </div>

    
      <div className="p-6 bg-gray-50 border-t border-gray-200 rounded-b-xl">
        <div className="flex justify-between items-center mb-4">
          <span className="text-lg font-bold text-gray-600">Total:</span>
          <Price amount={total} className="text-2xl" />
        </div>
        <Button 
          onClick={onCheckout} 
          variant="primary"
          disabled={cart.length === 0}
        >
          COBRAR AHORA
        </Button>
      </div>
    </div>
  );
};

export default OrderSummary;