/* HOOKS */
import { useEffect } from 'react';
/* ICONS */
import { X, Save } from 'lucide-react';
/* COMPONENTS */
import FormField from './FormField';

const FormModal = ({ showModal, activeTab, editingItem, formData, onFormChange, onSave, onClose }) => {
 
  /* FORM FIELDS CONFIGURATION */
  const formFields = {
    clubes: [
      { key: 'name', label: 'Nombre', type: 'text', required: true },
      { key: 'address', label: 'Dirección', type: 'text', required: true },
      { key: 'phone', label: 'Teléfono', type: 'tel', required: true },
      { key: 'courts', label: 'Canchas', type: 'number', required: true },
      { key: 'image', label: 'Imagen', type: 'text', placeholder: 'Link de la imagen' },
      { key: 'horarios', label: 'Horarios', type: 'text', required: true },
      { key: 'link', label: 'Link WhatsApp', type: 'url' }, 
      { key: 'map', label: 'Link Google Maps', type: 'url' }
    ],
    torneos: [
      { key: 'titulo', label: 'Título', type: 'text', required: true },
      { key: 'fecha', label: 'Fecha', type: 'date', required: true },
      { key: 'descripcion', label: 'Descripción', type: 'textarea', required: true },
      { key: 'participantes', label: 'Participantes', type: 'number', required: true },
      { key: 'lugar', label: 'Lugar', type: 'text', required: true },
      { key: 'estado', label: 'Estado', type: 'select', options: ['APERTURA', 'PROXIMAMENTE', 'EN_CURSO', 'FINALIZADO'] }
    ],
    ranking: [
      { key: 'position', label: 'Posición', type: 'number', required: true },
      { key: 'name', label: 'Nombre', type: 'text', required: true },
      { key: 'photo', label: 'Foto URL', type: 'url' },
      { key: 'points', label: 'Puntos', type: 'number', required: true },
      { key: 'club', label: 'Club', type: 'text', required: true },
      { key: 'matches', label: 'Partidos', type: 'number', required: true },
      { key: 'wins', label: 'Victorias', type: 'number', required: true },
      { key: 'losses', label: 'Derrotas', type: 'number', required: true }
    ],
    noticias: [
      { key: 'title', label: 'Título', type: 'text', required: true },
      { key: 'date', label: 'Fecha', type: 'date', required: true },
      { key: 'excerpt', label: 'Extracto', type: 'text', required: true },
      { key: 'image', label: 'Imagen', type: 'text', placeholder: 'Link de la imagen' },
      { key: 'body', label: 'body', type: 'textarea', required: true },
      { key: 'category', label: 'Categoría', type: 'select', options: ['Torneos', 'Reglamento', 'General', 'Clubes'] },
      { key: 'highlighted', label: 'Destacada', type: 'checkbox' }
    ]
  };

  /* DETECT ESC KEY TO CLOSE MODAL */
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    if (showModal) {
      window.addEventListener("keydown", handleEsc);
    }
    return () => window.removeEventListener("keydown", handleEsc);
  }, [showModal, onClose]);

  /* CLOSE MODAL */
  if (!showModal) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      
      {/* MODAL CONTENT */}
      <div className="bg-bg dark:bg-bg-dark rounded-xl shadow-gray-800 shadow-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">

        {/* HEADER */}
        <div className="flex items-center justify-between p-6 border-b border-accent/10 dark:border-accent-dark/10">

          {/* DYNAMIC TITLE */}
          <h3 className="text-xl font-semibold text-text dark:text-text-dark">
            
            {editingItem ? 'Editar' : 'Agregar'}{" "}
            {activeTab === "clubes"
              ? "Club"
              : activeTab === "torneos"
              ? "Torneo"
              : activeTab === "ranking"
              ? "Jugador"
              : "Noticia"}
          </h3>

          {/* CLOSE BUTTON */}
          <button
            onClick={onClose}
            className="p-2 text-text dark:text-text-dark hover:text-text dark:hover:text-text-dark rounded-lg hover:bg-bg/20 dark:hover:bg-bg-dark/20"
          >
            <X className="h-5 w-5 " />
          </button>
        </div>
        
        {/* DYNAMIC FIELDS */}
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {formFields[activeTab]?.map(field => (
              <FormField
                key={field.key}
                field={field}
                value={formData[field.key]}
                onChange={onFormChange}
              />
            ))}
          </div>
        </div>
        
        <div className="flex justify-end gap-3 p-6 border-t border-accent/10 dark:border-accent-dark/10">
          <button
            onClick={onClose}
            className=" cursor-pointer px-4 py-2 text-text dark:text-text-dark hover:text-text dark:hover:text-text-dark rounded-lg hover:bg-bg-secondary/20 dark:hover:bg-bg-secondary-dark/20 transition-colors"
          >
            Cancelar
          </button>
          <button
            onClick={onSave}
            className=" cursor-pointer flex items-center gap-2 bg-accent dark:bg-accent-dark text-bg dark:text-bg-dark px-4 py-2 rounded-lg font-medium hover:bg-accent-secondary dark:hover:bg-accent-secondary-dark transition-colors"
          >
            <Save className="h-4 w-4" />
            Guardar
          </button>
        </div>
      </div>
    </div>
  );
};
export default FormModal;
