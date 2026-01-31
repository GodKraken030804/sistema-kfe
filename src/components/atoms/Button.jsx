
const Button = ({ children, onClick, variant = "primary" }) => {
  const baseStyles = "w-full px-6 py-2 rounded-lg font-bold transition-all active:scale-95 shadow-md flex justify-center items-center";
  const variants = { 
    primary: "bg-kfe-brown text-white hover:opacity-90",
    secondary: "bg-gray-200 text-gray-800 hover:bg-gray-300",
    danger: "bg-red-600 text-white hover:bg-red-700"
  };
  return (
    <button 
      className={`${baseStyles} ${variants[variant]}`} 
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;