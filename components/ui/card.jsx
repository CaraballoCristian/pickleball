
const Card = ({ children, className = '', hover = true }) => {
  return (
    <div className={`bg-white dark:bg-gray-800 rounded-xl shadow-md shadow-bg-dark dark:shadow-bg  ${hover ? 'hover:shadow-lg transition-shadow duration-300' : ''} ${className}`}>
      {children}
    </div>
  );
};

export default Card;