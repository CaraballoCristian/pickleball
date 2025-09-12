const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  onClick, 
  className = '',
  disabled = false,
  ...props 
}) => {
  const baseClasses = 'cursor-pointer font-semibold rounded-lg transition-all duration-200 inline-flex items-center justify-center  ';
  
  const variants = {
    primary: `bg-gradient-to-r from-emerald-500 to-emerald-600 text-white hover:from-emerald-600 hover:to-emerald-700 shadow-lg hover:shadow-xl`,
    secondary: `bg-gradient-to-r from-bg-dark to-bg-dark/80 text-white hover:from-white hover:to-gray-100 hover:text-text shadow-lg hover:shadow-xl`,
    white: `bg-gradient-to-br from-gray-200 to-gray-400 text-text hover:from-gray-400 hover:to-gray-600 shadow-lg hover:shadow-xl`,
    outline: `border border-gray-300 text-gray-700 hover:bg-gray-50`,
    ghost: `text-text dark:text-text-dark hover:bg-bg-dark hover:text-text-dark dark:hover:bg-bg dark:hover:text-text`
  };

  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-6 py-2.5 text-base',
    lg: 'px-8 py-3 text-lg'
  };

  return (
    <button
      className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${className} ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;