import ClubRow from './ClubRow';
import TorneoRow from './TorneoRow';
import RankingRow from './RankingRow';
import NoticiaRow from './NoticiaRow';

const DataTable = ({ activeTab, filteredData, onEdit, onDelete }) => {

  /* WHEN FILTERING HAS NO MATCHES */
  if (filteredData.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="text-text-secondary dark:text-text-secondary-dark text-lg">
          No se encontraron resultados
        </div>
      </div>
    );
  }

  /* TABLE HEADERS SELECTOR */
  const renderHeaders = () => {
    switch (activeTab) {
      case 'clubes':
        return (
          <>
            <th className="text-left py-4 px-2 text-sm font-medium text-text-secondary dark:text-text-secondary-dark">Nombre</th>
            <th className="text-left py-4 px-2 text-sm font-medium text-text-secondary dark:text-text-secondary-dark">Ubicación</th>
            <th className="text-left py-4 px-2 text-sm font-medium text-text-secondary dark:text-text-secondary-dark">Canchas</th>
            <th className="text-center py-4 px-2 text-sm font-medium text-text-secondary dark:text-text-secondary-dark">Acciones</th>
          </>
        );
      case 'torneos':
        return (
          <>
            <th className="text-left py-4 px-2 text-sm font-medium text-text-secondary dark:text-text-secondary-dark">Título</th>
            <th className="text-left py-4 px-2 text-sm font-medium text-text-secondary dark:text-text-secondary-dark">Fecha</th>
            <th className="text-left py-4 px-2 text-sm font-medium text-text-secondary dark:text-text-secondary-dark">Estado</th>
            <th className="text-center py-4 px-2 text-sm font-medium text-text-secondary dark:text-text-secondary-dark">Acciones</th>
          </>
        );
      case 'ranking':
        return (
          <>
            <th className="text-left py-4 px-2 text-sm font-medium text-text-secondary dark:text-text-secondary-dark">Pos.</th>
            <th className="text-left py-4 px-2 text-sm font-medium text-text-secondary dark:text-text-secondary-dark">Jugador</th>
            <th className="text-left py-4 px-2 text-sm font-medium text-text-secondary dark:text-text-secondary-dark">Puntos</th>
            <th className="text-left py-4 px-2 text-sm font-medium text-text-secondary dark:text-text-secondary-dark">Club</th>
            <th className="text-center py-4 px-2 text-sm font-medium text-text-secondary dark:text-text-secondary-dark">Acciones</th>
          </>
        );
      case 'noticias':
        return (
          <>
            <th className="text-left py-4 px-2 text-sm font-medium text-text-secondary dark:text-text-secondary-dark">Título</th>
            <th className="text-left py-4 px-2 text-sm font-medium text-text-secondary dark:text-text-secondary-dark">Categoría</th>
            <th className="text-left py-4 px-2 text-sm font-medium text-text-secondary dark:text-text-secondary-dark">Fecha</th>
            <th className="text-center py-4 px-2 text-sm font-medium text-text-secondary dark:text-text-secondary-dark">Acciones</th>
          </>
        );
      default:
        return null;
    }
  };

  /* TABLE ROW SELECTOR */
  const renderRow = (item, index) => {
    switch (activeTab) {
      case 'clubes':
        return <ClubRow key={item.id} item={item} index={index} onEdit={onEdit} onDelete={onDelete} />;
      case 'torneos':
        return <TorneoRow key={item.id} item={item} index={index} onEdit={onEdit} onDelete={onDelete} />;
      case 'ranking':
        return <RankingRow key={item.id} item={item} index={index} onEdit={onEdit} onDelete={onDelete} />;
      case 'noticias':
        return <NoticiaRow key={item.id} item={item} index={index} onEdit={onEdit} onDelete={onDelete} />;
      default:
        return null;
    }
  };

  return (
    <div className="overflow-x-auto dark:bg-gray-800 px-2">
      <table className="w-full ">
        <thead>
          <tr className="border-b border-accent/10 dark:border-accent-dark/10 dark:text-text-dark">
            {renderHeaders()}
          </tr>
        </thead>
        <tbody>
          {filteredData.map((item, index) => renderRow(item, index))}
        </tbody>
      </table>
    </div>
  );
};
export default DataTable;