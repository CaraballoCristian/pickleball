const Badge = ({ children, variant = 'default' }) => {
  
  const variants = {
    default: 'bg-gray-100 text-gray-800',
    green: 'bg-emerald-100 text-emerald-800',
    blue: 'bg-blue-100 text-blue-800'
  };

  return (
    <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${variants[variant]}`}>
      {children}
    </span>
  );
};

export default Badge;