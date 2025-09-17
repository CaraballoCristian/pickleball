import ActionButtons from "./ActionButtons";

const ClubRow = ({ item, index, onEdit, onDelete }) => (
  <tr
    className={`border-b border-accent/5 dark:border-accent-dark/5 transition-colors 
  ${index % 2 === 0 ? "bg-bg/5 dark:bg-bg-dark/5" : ""}`}
  >
    {/* COLUMNA 1 */}
    <td className="py-4 px-2">
      {/* CONTAINER */}
      <div className="flex items-center gap-3">
        {/* IMAGEN */}
        <img
          src={item.image || "/placeholder.png"}
          alt={item.name}
          className="w-10 h-10 rounded-lg object-cover"
        />
        {/* TEXTOS */}
        <div>
          {/* NOMBRE */}
          <div className="font-medium text-text dark:text-text-dark">
            {item.name}
          </div>
          {/* TELEFONO */}
          <div className="text-sm text-accent/90  dark:text-accent-dark/90">
            {item.phone}
          </div>
        </div>
      </div>
    </td>

    {/* COLUMNA 2 - DIRECCION */}
    <td className="py-4 px-2 text-text dark:text-text-dark">{item.address}</td>

    {/* COLUMNA 3 - CANCHAS */}
    <td className="py-4 px-2 text-text dark:text-text-dark">{item.courts}</td>

    {/* COLUMNA 4 - ACCIONES */}
    <td className="py-4 px-2">
      <ActionButtons
        onEdit={() => onEdit(item)}
        onDelete={() => onDelete(item.id)}
      />
    </td>
  </tr>
);
export default ClubRow;
