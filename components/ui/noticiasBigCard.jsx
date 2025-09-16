/* ICONS */
import { ExternalLink } from "lucide-react";
/* LIBRARIES */
import { motion } from "framer-motion";
import Button from "./button";
/* NAVIGATION */
import Link from "next/link";

const NoticiasBigCard = ({ noticia }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="mb-16 "
    >
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
        <div className="md:flex">
          {/* IMAGE */}
          <div className="md:w-1/2">
            <img
              src={noticia.image}
              alt={noticia.title}
              className="w-full h-64 md:h-80 object-cover  transition-transform duration-300"
            />
          </div>

          {/* CONTENT */}
          <div className="md:w-1/2 p-8 flex flex-col md:justify-between justify-center">
            {/* CATEGORY */}
            <span className="inline-block px-3 py-1 rounded-full text-sm font-medium bg-accent text-white mb-4 w-fit">
              {noticia.category}
            </span>

            {/* TEXT WRAPPER */}
            <div className="flex-1">
              {/* TITLE */}
              <h2 className="text-2xl md:text-3xl font-bold text-text dark:text-text-dark mb-4 group-hover:text-accent transition-colors">
                {noticia.title}
              </h2>

              {/* DESCRIPTION */}
              <p className="text-text/80 dark:text-text-dark/80 leading-relaxed mb-6 text-sm md:text-base">
                {/* ACOTAR EL PREVIEW DEL EXTRACTO */}
                {noticia.excerpt.length > 150
                  ? `${noticia.excerpt.substring(0, 150)}...`
                  : noticia.excerpt}
              </p>
            </div>

            {/* DATE & READ MORE */}
            <div className="flex items-center justify-between">
              {/* DATE */}
              <span className="text-sm text-text/60 dark:text-text-dark/60">
                {noticia.date}
              </span>

              {/* BOTON LEER MAS */}
              <Link href={`/noticias/${noticia.slug}`} passHref>
                <Button
                  variant="ghost"
                  className="p-0 cursor-pointer ml-auto mt-auto"
                >
                  Leer más <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default NoticiasBigCard;
