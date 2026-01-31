import React from 'react';
import ProductGrid from './components/organisms/ProductGrid';

function App() {
  const handleAddToOrder = (product) => {
    console.log("Producto agregado:", product.name);
    alert(`Se agregó ${product.name} a la cuenta`);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      
      <header className="bg-white shadow-sm py-6 px-10">
        <h1 className="text-3xl font-black text-amber-900 tracking-tighter text-center">
          KFE - SISTEMA DE PUNTO DE VENTA
        </h1>
      </header>

      
      <main className="flex-1 container mx-auto py-8">
        <ProductGrid onAddProduct={handleAddToOrder} />
      </main>
    </div>
  );
}

export default App;