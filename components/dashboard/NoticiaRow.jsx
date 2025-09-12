import ActionButtons from './ActionButtons';

const NoticiaRow = ({ item, index, onEdit, onDelete }) => (
  <tr className={`border-b border-accent/5 dark:border-accent-dark/5 hover:bg-bg-secondary/20 dark:hover:bg-bg-secondary-dark/20 transition-colors ${index % 2 === 0 ? 'bg-bg-secondary/5 dark:bg-bg-secondary-dark/5' : ''}`}>
    <td className="py-4 px-2">
      <div className="flex items-center gap-3">
        <img src={item.image || '/placeholder.png'} alt={item.title} className="w-10 h-10 rounded-lg object-cover" />
        <div>
          <div className="flex items-center gap-2">
            <span className="font-medium text-text dark:text-text-dark">{item.title}</span>
            {item.highlighted && <div className="w-2 h-2 bg-accent dark:bg-accent-dark rounded-full"></div>}
          </div>
          <div className="text-sm text-accent/90 dark:text-accent-dark/90 truncate max-w-xs">{item.excerpt}</div>
        </div>
      </div>
    </td>
    <td className="py-4 px-2">
      <span className="inline-flex px-2 py-1 text-xs font-medium rounded-full bg-accent/10 dark:bg-accent-dark/10 text-accent dark:text-accent-dark">
        {item.category}
      </span>
    </td>
    <td className="py-4 px-2 text-text dark:text-text-dark">{item.date}</td>
    <td className="py-4 px-2">
      <ActionButtons onEdit={() => onEdit(item)} onDelete={() => onDelete(item.id)} />
    </td>
  </tr>
);
export default NoticiaRow;