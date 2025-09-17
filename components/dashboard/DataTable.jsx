/* COMPONENTS */
import ClubRow from './ClubRow';
import TorneoRow from './TorneoRow';
import RankingRow from './RankingRow';
import NoticiaRow from './NoticiaRow';

const DataTable = ({ activeTab, filteredData, onEdit, onDelete }) => {
  
  /* WHEN FILTERING HAS NO MATCHES */
  if (filteredData.length === 0) {
    return (
      <div className="text-center dark:bg-gray-800 py-12">
        <div className="text-text dark:text-text-dark text-lg">
          No se encontraron resultados
        </div>
      </div>
    );
  }
  
  /* TABLE HEADERS SELECTOR */
  const renderHeaders = () => {
    const basicStyles = "py-4 px-2 text-sm font-medium text-text dark:text-text-dark";

    switch (activeTab) {
      case 'clubes':
        return (
          <>
            <th className={`${basicStyles} text-left`}>Nombre</th>
            <th className={`${basicStyles} text-left`}>Ubicación</th>
            <th className={`${basicStyles} text-left`}>Canchas</th>
            <th className={`${basicStyles} text-center`}>Acciones</th>
          </>
        );
      case 'torneos':
        return (
          <>
            <th className={`${basicStyles} text-left`}>Título</th>
            <th className={`${basicStyles} text-left`}>Fecha</th>
            <th className={`${basicStyles} text-left`}>Estado</th>
            <th className={`${basicStyles} text-center`}>Acciones</th>
          </>
        );
      case 'ranking':
        return (
          <>
            <th className={`${basicStyles} text-left`}>Pos.</th>
            <th className={`${basicStyles} text-left`}>Jugador</th>
            <th className={`${basicStyles} text-left`}>Puntos</th>
            <th className={`${basicStyles} text-left`}>Club</th>
            <th className={`${basicStyles} text-center`}>Acciones</th>
          </>
        );
      case 'noticias':
        return (
          <>
            <th className={`${basicStyles} text-left`}>Título</th>
            <th className={`${basicStyles} text-left`}>Categoría</th>
            <th className={`${basicStyles} text-left`}>Fecha</th>
            <th className={`${basicStyles} text-center`}>Acciones</th>
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
    /* CONTAINER */
    <div className="overflow-x-auto dark:bg-gray-800 px-2">
      {/* TABLE */}
      <table className="min-w-[720px] w-full">
        <thead>
          <tr className="border-b border-accent/10 dark:border-accent-dark/10 dark:text-text-dark">
          {/* HEADERS DYNAMIC RENDERING */}
            {renderHeaders()}
          </tr>
        </thead>
        <tbody>
          {/* FILTERED - ROWS DYNAMIC RENDERING (COULD BE ALL OF THEM IF NO FILTER APPLIED) */}
          {filteredData.map((item, index) => renderRow(item, index))}
        </tbody>
      </table>
    </div>
  );
};
export default DataTable;