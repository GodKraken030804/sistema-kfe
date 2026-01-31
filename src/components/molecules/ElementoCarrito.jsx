
import Price from '../atoms/Precio';

const CartItem = ({ item, onRemove }) => {
  return (
    <div className="flex justify-between items-center p-3 border-b border-gray-100 hover:bg-gray-50 transition-colors">
      <div className="flex flex-col">
        <span className="font-bold text-gray-800">{item.name}</span>
        <span className="text-xs text-gray-400">Cantidad: {item.quantity}</span>
      </div>
      <div className="flex items-center gap-4">
        <Price amount={item.price * item.quantity} className="text-sm" />
        <button 
          onClick={() => onRemove(item.id)}
          className="text-red-400 hover:text-red-600 font-bold text-xl"
        >
          
        </button>
      </div>
    </div>
  );
};

export default CartItem;