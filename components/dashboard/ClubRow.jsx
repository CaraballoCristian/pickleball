import ActionButtons from "./ActionButtons";

const ClubRow = ({ item, index, onEdit, onDelete }) => (
  <tr className={`border-b border-accent/5 dark:border-accent-dark/5 hover:bg-bg/20 dark:hover:bg-bg-dark/20 transition-colors ${index % 2 === 0 ? 'bg-bg-secondary/5 dark:bg-bg-secondary-dark/5' : ''}`}>
    <td className="py-4 px-2">
      <div className="flex items-center gap-3">
        <img src={item.image || '/placeholder.png'} alt={item.name} className="w-10 h-10 rounded-lg object-cover" />
        <div>
          <div className="font-medium text-text dark:text-text-dark">{item.name}</div>
          <div className="text-sm text-accent/90  dark:text-accent-dark/90">{item.phone}</div>
        </div>
      </div>
    </td>
    <td className="py-4 px-2 text-text dark:text-text-dark">{item.address}</td>
    <td className="py-4 px-2 text-text dark:text-text-dark">{item.courts}</td>
    <td className="py-4 px-2">
      <ActionButtons onEdit={() => onEdit(item)} onDelete={() => onDelete(item.id)} />
    </td>
  </tr>
);
export default ClubRow;