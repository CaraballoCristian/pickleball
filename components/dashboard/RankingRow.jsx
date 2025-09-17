import ActionButtons from "./ActionButtons";

const RankingRow = ({ item, index, onEdit, onDelete }) => (
  <tr
    className={`border-b border-accent/5 dark:border-accent-dark/5 transition-colors 
  ${index % 2 === 0 ? "bg-bg/5 dark:bg-bg-dark/5" : ""}`}
  >
    {/* COLUMNA 1 */}
    <td className="py-4 px-2">
      {/* POSICION */}
      <span className="inline-flex w-8 h-8 items-center justify-center rounded-full bg-accent dark:bg-accent-dark text-bg dark:text-bg-dark font-bold text-sm">
        {item.position}
      </span>
    </td>

    {/* COLUMNA 2 */}
    <td className="py-4 px-2">
      {/* CONTAINER */}
      <div className="flex items-center gap-3">
        {/* PICTURE */}
        <img
          src={item.photo}
          alt={item.name}
          className="w-10 h-10 rounded-full object-cover"
        />
        {/* TEXTOS */}
        <div>
          {/* NOMBRE */}
          <div className="font-medium text-text dark:text-text-dark text-nowrap">
            {item.name}
          </div>
          {/* PARTIDOS */}
          <div className="text-sm text-accent/90 dark:text-accent-dark/90">
            {item.matches} partidos
          </div>
        </div>
      </div>
    </td>

    {/* COLUMNA 3 - PUNTOS */}
    <td className="py-4 px-2 font-semibold text-accent dark:text-accent-dark">
      {item.points}
    </td>

    {/* COLUMNA 4 - CLUB */}
    <td className="py-4 px-2 text-text dark:text-text-dark">{item.club}</td>

    {/* COLUMNA 5 - ACCIONES */}
    <td className="py-4 px-2">
      <ActionButtons
        onEdit={() => onEdit(item)}
        onDelete={() => onDelete(item.id)}
      />
    </td>
  </tr>
);
export default RankingRow;
