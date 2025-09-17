import { Edit3, Trash2 } from 'lucide-react';

const ActionButtons = ({ onEdit, onDelete }) => (
  <div className="flex justify-center gap-2">
    {/* EDIT BUTTON */}
    <button 
      onClick={onEdit}
      className="p-1 text-accent dark:text-accent-dark hover:bg-accent/10 dark:hover:bg-accent-dark/10 rounded cursor-pointer"
    >
      <Edit3 className="h-4 w-4" />
    </button>
    
    {/* DELETE BUTTON */}
    <button 
      onClick={onDelete}
      className="p-1 text-red-500 hover:bg-red-50 dark:hover:bg-red-500/10 rounded cursor-pointer"
    >
      <Trash2 className="h-4 w-4" />
    </button>
  </div>
);
export default ActionButtons;