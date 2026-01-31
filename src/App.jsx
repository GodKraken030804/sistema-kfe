import React from 'react';
import ProductGrid from './components/organisms/CuadriculaProductos';
import OrderSummary from './components/organisms/ResumenPedido';
import { useCartController } from './controllers/CartController';

function App() {
  const { cart, handleAddToOrder, handleRemoveItem, handleCheckout } = useCartController();

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col overflow-hidden">
      
      <header className="bg-white shadow-md py-4 px-10 z-10">
        <h1 className="text-2xl font-black text-amber-900 tracking-tighter text-center">
          KFE - SISTEMA DE PUNTO DE VENTA
        </h1>
      </header>

      <div className="flex flex-1 overflow-hidden">
        
        <main className="flex-1 overflow-y-auto bg-gray-50">
          <div className="container mx-auto py-4">
            <ProductGrid onAddProduct={handleAddToOrder} />
          </div>
        </main>

          <OrderSummary 
            cart={cart} 
            onRemoveItem={handleRemoveItem} 
            onCheckout={handleCheckout} 
          />
      
      </div>
    </div>
  );
}

export default App;