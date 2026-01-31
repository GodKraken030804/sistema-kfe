
const Price = ({ amount, className = "" }) => {
  return (
    <span className={`text-xl font-extrabold text-emerald-700 ${className}`}>
      ${Number(amount).toLocaleString('es-MX', { 
        minimumFractionDigits: 2,
        maximumFractionDigits: 2 
      })}
    </span>
  );
};

export default Price;