const DarkModeSwitcher = ({toggleDark, dark}) => {
  return (
    <button 
      className="text-[20px]  cursor-pointer" 
      onClick={toggleDark}>
      {dark ? "🌙" : "🌞"}
    </button>
  );
};

export default DarkModeSwitcher;
