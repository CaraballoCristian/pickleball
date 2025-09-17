import ActionButtons from "./ActionButtons";

const TorneoRow = ({ item, index, onEdit, onDelete }) => (
  <tr
    className={`border-b border-accent/5 dark:border-accent-dark/5 transition-colors 
  ${index % 2 === 0 ? "bg-bg/5 dark:bg-bg-dark/5" : ""}`}
  >
    {/* COLUMNA 1 */}
    <td className="py-4 px-2">
      <div>
        {/* TITULO */}
        <div className="font-medium text-text dark:text-text-dark">
          {item.titulo}
        </div>
        {/* PARTICIPANTES */}
        <div className="text-sm text-accent/90 dark:text-accent-dark/90">
          {item.participantes} participantes
        </div>
      </div>
    </td>

    {/* COLUMNA 2 - FECHA */}
    <td className="py-4 px-2 text-text dark:text-text-dark">{item.fecha}</td>

    {/* COLUMNA 3 - ESTADO */}
    <td className="py-4 px-2">
      <span
        className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${
          item.estado === "APERTURA"
            ? "bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400"
            : item.estado === "PROXIMAMENTE"
            ? "bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400"
            : item.estado === "EN_CURSO"
            ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400"
            : "bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-400"
        }`}
      >
        {item.estado}
      </span>
    </td>

    {/* COLUMNA 4 - ACCIONES */}
    <td className="py-4 px-2">
      <ActionButtons
        onEdit={() => onEdit(item)}
        onDelete={() => onDelete(item.id)}
      />
    </td>
  </tr>
);
export default TorneoRow;
