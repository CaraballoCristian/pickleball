/* DATA */
import redesData from "../../data/redesData";

const Redes = () => {
  return (
    <div className="flex space-x-4">
      {redesData.map((red, i) => (
        <button
          key={i}
          className="bg-gray-800 hover:bg-gray-700 p-2 rounded-lg transition-colors cursor-pointer"
        >
          <a href={red.url} target="_blank" rel="noopener noreferrer">
            {red.icon}
          </a>
        </button>
      ))}
    </div>
  );
};

export default Redes;
