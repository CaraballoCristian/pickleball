import ActionButtons from "./ActionButtons";

const NoticiaRow = ({ item, index, onEdit, onDelete }) => (
  <tr
    className={`border-b border-accent/5 dark:border-accent-dark/5 transition-colors 
      ${index % 2 === 0 ? "bg-bg/5 dark:bg-bg-dark/5" : ""}`}
  >
    {/* COLUMNA 1 */}
    <td className="py-4 px-2">
      {/* CONTAINER */}
      <div className="flex items-center gap-3">
        {/* MINIATURA */}
        <img
          src={item.image || "/placeholder.png"}
          alt={item.title}
          className="w-10 h-10 rounded-lg object-cover"
        />

        {/* TEXTOS */}
        <div>
          {/* TITULO */}
          <div className="flex items-center gap-2">
            <span className="font-medium text-text dark:text-text-dark">
              {item.title}
            </span>
          </div>
          {/* EXTRACTO */}
          <div className="text-sm text-accent/90 dark:text-accent-dark/90 truncate max-w-xs">
            {item.excerpt}
          </div>
        </div>
      </div>
    </td>

    {/* COLUMNA 2 */}
    <td className="py-4 px-2">
      <span className="inline-flex px-2 py-1 text-xs font-medium rounded-full bg-accent/10 dark:bg-accent-dark/10 text-accent dark:text-accent-dark">
        {item.category}
      </span>
    </td>

    {/* COLUMNA 3 - FECHA */}
    <td className="py-4 px-2 text-text dark:text-text-dark">{item.date}</td>

    {/* COLUMNA 4 */}
    <td className="py-4 px-2">
      {/* ACCIONES */}
      <ActionButtons
        onEdit={() => onEdit(item)}
        onDelete={() => onDelete(item.id)}
      />
    </td>
  </tr>
);
export default NoticiaRow;
