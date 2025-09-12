"use client";
/* LIBRARIES */
import { motion } from "framer-motion";
/* ICONS */
import { Trophy } from "lucide-react";
/* UI */
import PageTitle from "../../components/ui/pageTitle";
import Button from "../../components/ui/button";
import Cta from "../../components/ui/cta";
import CtaFeedback from "../../components/ui/ctaFeedback";
/* HOOKS */
import { useState } from "react";
/* DATA */
import rankingData from "../../data/rankingData";

const page = () => {
  const [inputValue, setInputValue] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  /* CTA CLICK HANDLER */
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);

    setTimeout(() => {
      setInputValue("");
      setIsSubmitted(false);
    }, 3000);
  };

  const getRowBg = (position) => {
    switch (position) {
      case 1:
        return "bg-gradient-to-r from-yellow-50 to-amber-50 dark:from-yellow-900/20 dark:to-amber-900/20 border-yellow-200 dark:border-yellow-800";
      case 2:
        return "bg-gradient-to-r from-gray-50 to-slate-50 dark:from-gray-900/20 dark:to-slate-900/20 border-gray-200 dark:border-gray-700";
      case 3:
        return "bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 border-amber-200 dark:border-amber-800";
      default:
        return "bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 border-gray-200 dark:border-gray-700";
    }
  };

  return (
    <div className="min-h-screen bg-bg dark:bg-bg-dark my-15 ">
      <div className="container mx-auto px-4">
        {/* HEADER */}
        <PageTitle
          title="RANKING"
          subtitle="Clasificación oficial de jugadores de Pickleball"
        />

        {/* TABLE */}
        <div className="overflow-x-auto rounded-lg">
          <div className="min-w-[800px] ">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white dark:bg-gray-800  shadow-lg"
            >
              {/* TABLE HEADER */}
              <div className="bg-accent dark:bg-accent-dark text-white dark:text-text p-4 ">
                <div className="grid grid-cols-12 gap-4 font-semibold text-sm md:text-base text-center">
                  <div className="col-span-1">POS</div>
                  <div className="col-span-1">FOTO</div>
                  <div className="col-span-3 md:col-span-2">NOMBRE</div>
                  <div className="col-span-2 md:col-span-2">CLUB</div>
                  <div className="col-span-1">PTS</div>
                  <div className="col-span-1">PJ</div>
                  <div className="col-span-1">G</div>
                  <div className="col-span-1">P</div>
                  <div className="col-span-1">%</div>
                </div>
              </div>

              {/* TABLE BODY */}
              <div className="divide-y divide-gray-200 dark:divide-gray-700  text-center">
                {rankingData.map((player, index) => {
                  const winPercentage = Math.round(
                    (player.wins / player.matches) * 100
                  );

                  return (
                    <motion.div
                      key={player.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        duration: 0.5,
                        delay: index * 0.1,
                      }}
                      className={`grid grid-cols-12 gap-4 p-4 items-center border-l-4 text-text dark:text-text-dark transition-all hover:shadow-md ${getRowBg(
                        player.position
                      )}`}
                    >
                      {/* POSICIÓN */}
                      <div className="col-span-1 flex justify-center">
                        <div className="h-8 w-8 rounded-full bg-accent dark:bg-accent-dark dark:text-black flex items-center justify-center text-white font-bold">
                          {player.position}
                        </div>
                      </div>

                      {/* FOTO */}
                      <div className="relative col-span-1 mx-auto">
                        <img
                          src={player.photo}
                          alt={player.name}
                          className="w-12 h-12 rounded-full object-cover border-2 border-gray-200 dark:border-gray-600"
                        />
                        {/* TROFEOS PARA LOS 3 PRIMEROS */}
                        {player.position === 1 && (
                          <Trophy className="absolute -bottom-[20%] -right-[20%] h-6 w-6 text-yellow-500" />
                        )}
                        {player.position === 2 && (
                          <Trophy className="absolute -bottom-[20%] -right-[20%] h-6 w-6 text-gray-500" />
                        )}
                        {player.position === 3 && (
                          <Trophy className="absolute -bottom-[20%] -right-[20%] h-6 w-6 text-amber-600" />
                        )}
                      </div>

                      {/* NOMBRE */}
                      <div className="col-span-3 md:col-span-2">
                        <h3 className="font-semibold text-text dark:text-text-dark text-sm md:text-base">
                          {player.name}
                        </h3>
                      </div>

                      {/* CLUB */}
                      <div className="col-span-2 md:col-span-2">
                        <span className="text-sm text-gray-600 dark:text-gray-300">
                          {player.club}
                        </span>
                      </div>

                      {/* PUNTOS */}
                      <div className="col-span-1 text-center">
                        <span className="font-bold text-accent dark:text-accent-dark">
                          {player.points}
                        </span>
                      </div>

                      {/* PARTIDOS JUGADOS */}
                      <div className="col-span-1 text-center text-sm">
                        {player.matches}
                      </div>

                      {/* GANADOS */}
                      <div className="col-span-1 text-center text-sm text-green-600 dark:text-green-400">
                        {player.wins}
                      </div>

                      {/* PERDIDOS */}
                      <div className="col-span-1 text-center text-sm text-red-600 dark:text-red-400">
                        {player.losses}
                      </div>

                      {/* PORCENTAJE */}
                      <div className="col-span-1 text-center text-sm font-semibold">
                        {winPercentage}%
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </div>

        {/* STATS FOOTER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-8 text-center text-gray-600 dark:text-gray-300"
        >
          <p className="text-sm">
            Última actualización: {new Date().toLocaleDateString("es-ES")} •
            Total de jugadores: {rankingData.length}
          </p>
        </motion.div>

        {/* CTA */}
        <Cta
          title="Enterate de los cambios en el ranking"
          description="Inscribite y recibi la ultima informacion oficial. No te pierdas ningun detalle!"
        >
          <form
            onSubmit={handleSubmit}
            className=" flex justify-between w-full md:w-2/3 lg:w-1/2 mx-auto flex-col sm:flex-row"
          >
            {/* INPUT */}

            {!isSubmitted ? (
              <>
                <input
                  type="email"
                  placeholder="Ingresa tu email"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  required
                  className="px-4 py-3 rounded-lg border bg-bg text-text font-semibold border-gray-300 focus:outline-none focus:ring-2 focus:ring-black/80 mr-4 mb-4 sm:mb-0 w-full"
                />

                <Button size="lg" variant="secondary" type="submit">
                  Enterarme!
                </Button>
              </>
            ) : (
              <CtaFeedback
                title="Gracias por Suscribirte!"
              />
            )}
          </form>
        </Cta>
      </div>
    </div>
  );
};

export default page;
