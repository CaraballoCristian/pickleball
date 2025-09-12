import { Search, Plus } from 'lucide-react';


const TableControls = ({ searchTerm, setSearchTerm, filterCategory, setFilterCategory, activeTab, handleAdd }) => (
  <div className="flex flex-col sm:flex-row gap-4 mb-6">
    <div className="flex-1 relative">
      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-accent dark:text-accent-dark" />
      <input
        type="text"
        placeholder="Buscar..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full pl-10 pr-4 py-2 border border-accent/20 dark:border-accent-dark/20 rounded-lg bg-bg dark:bg-gray-800 text-text dark:text-text-dark focus:ring-2 focus:ring-accent dark:focus:ring-accent-dark focus:border-transparent"
      />
    </div>
    
    {(activeTab === 'noticias' || activeTab === 'torneos') && (
      <select
        value={filterCategory}
        onChange={(e) => setFilterCategory(e.target.value)}
        className="px-3 py-2 border border-accent/20 dark:border-accent-dark/20 rounded-lg bg-bg dark:bg-bg-dark text-text dark:text-text-dark focus:ring-2 focus:ring-accent dark:focus:ring-accent-dark focus:border-transparent"
      >
        <option value="all">Todas las categorías</option>
        {activeTab === 'noticias' ? (
          <>
            <option value="Torneos">Torneos</option>
            <option value="Reglamento">Reglamento</option>
            <option value="General">General</option>
            <option value="Clubes">Clubes</option>
          </>
        ) : (
          <>
            <option value="APERTURA">Apertura</option>
            <option value="PROXIMAMENTE">Próximamente</option>
            <option value="EN_CURSO">En Curso</option>
            <option value="FINALIZADO">Finalizado</option>
          </>
        )}
      </select>
    )}

    <button
      onClick={handleAdd}
      className=" cursor-pointer flex items-center gap-2 bg-accent dark:bg-accent-dark text-bg dark:text-bg-dark px-4 py-2 rounded-lg font-medium hover:bg-accent-secondary dark:hover:bg-accent-secondary-dark transition-colors"
    >
      <Plus className="h-5 w-5" />
      Agregar {activeTab === 'clubes' ? 'Club' : activeTab === 'torneos' ? 'Torneo' : activeTab === 'ranking' ? 'Jugador' : 'Noticia'}
    </button>
  </div>
);

export default TableControls;