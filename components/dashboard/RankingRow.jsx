import ActionButtons from './ActionButtons';

const RankingRow = ({ item, index, onEdit, onDelete }) => (
  <tr className={`border-b border-accent/5 dark:border-accent-dark/5 hover:bg-bg-secondary/20 dark:hover:bg-bg-secondary-dark/20 transition-colors ${index % 2 === 0 ? 'bg-bg-secondary/5 dark:bg-bg-secondary-dark/5' : ''}`}>
    <td className="py-4 px-2">
      <span className="inline-flex w-8 h-8 items-center justify-center rounded-full bg-accent dark:bg-accent-dark text-bg dark:text-bg-dark font-bold text-sm">
        {item.position}
      </span>
    </td>
    <td className="py-4 px-2">
      <div className="flex items-center gap-3">
        <img src={item.photo} alt={item.name} className="w-10 h-10 rounded-full object-cover" />
        <div>
          <div className="font-medium text-text dark:text-text-dark">{item.name}</div>
          <div className="text-sm text-accent/90 dark:text-accent-dark/90">{item.matches} partidos</div>
        </div>
      </div>
    </td>
    <td className="py-4 px-2 font-semibold text-accent dark:text-accent-dark">{item.points}</td>
    <td className="py-4 px-2 text-text dark:text-text-dark">{item.club}</td>
    <td className="py-4 px-2">
      <ActionButtons onEdit={() => onEdit(item)} onDelete={() => onDelete(item.id)} />
    </td>
  </tr>
);
export default RankingRow;