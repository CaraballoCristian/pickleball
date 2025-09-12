"use client";
/* ICONS */
import { Trophy, Calendar, MapPin, Users, ChevronRight } from "lucide-react";
/* HOOKS */
import useIsDesktop from "../../hooks/useIsDesktop";

const TorneoCard = ({ torneo }) => {
  const { titulo, descripcion, fecha, participantes, lugar, estado } = torneo;

  const isDesktop = useIsDesktop();

  return (
    <div className="bg-white dark:bg-gray-800 border-2 dark:border-gray-500 border-gray-300 rounded-lg p-6 mb-4 shadow-sm hover:shadow-md transition-shadow">
      {/* CONTAINER */}
      <div className="flex flex-col md:flex-row items-start gap-4">
        {/* TROFEO */}

        {isDesktop && (
          <div className="bg-yellow-100 p-3 rounded-lg flex-shrink-0">
            <Trophy className="w-8 h-8 text-yellow-600" />
          </div>
        )}

        {/* CONTENT */}
        <div className="flex-1 ">
          {/* TITULO & FLAG */}
          <div className="flex flex-col gap-2 md:flex-row justify-between items-start mb-3">
            {/* TITULO */}
            <h3 className="text-xl font-bold text-text dark:text-text-dark">
              {titulo}
            </h3>

            {/* FLAG */}
            <span
              className={`px-3 py-1 rounded-full text-sm font-medium border-2 md:ml-auto md:mr-0 mr-auto ${
                estado === "APERTURA"
                  ? "bg-bg border-gray-800 text-gray-800"
                  : estado === "FINALIZADO"
                  ? "bg-gray-300 border-gray-400 text-gray-600"
                  : "bg-green-50 border-green-600 text-green-600"
              }`}
            >
              {estado}
            </span>
          </div>

          {/* DESCRIPCION */}
          <p className="text-text/90 dark:text-text-dark/90 max-w-[80ch] my-4 leading-relaxed">
            {/* ACOTAR EL PREVIEW DEL EXTRACTO */}
            {descripcion.length > 150
              ? `${descripcion.substring(0, 150)}...`
              : descripcion}
          </p>

          {/* INFO */}
          <div className="flex items-start md:items-center gap-2 md:gap-6 text-sm text-text/90 dark:text-text-dark/90  flex-col md:flex-row ">
            {/* FECHA */}
            <div className="flex items-center gap-1">
              <Calendar className="w-4 h-4 text-accent dark:text-accent-dark" />
              <span>{fecha}</span>
            </div>

            {/* PARTICIPANTES */}
            <div className="flex items-center gap-1">
              <Users className="w-4 h-4 text-accent dark:text-accent-dark" />
              <span>Participantes: {participantes}</span>
            </div>

            {/* LUGAR */}
            <div className="flex items-center gap-1">
              <MapPin className="w-4 h-4 text-accent dark:text-accent-dark" />
              <span>Lugar: {lugar}</span>
            </div>
          </div>

          {/* VER RESULTADOS */}
          {estado === "FINALIZADO" && (
            <div className="flex justify-end mt-3 md:mt-0">
              <button className="flex items-center gap-2 text-accent dark:text-accent-dark hover:text-accent-dark dark:hover:text-accent   transition-colors font-medium cursor-pointer">
                Ver Resultados
                <ChevronRight className="w-4 h-4 text-accent dark:text-accent-dark" />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default TorneoCard;
