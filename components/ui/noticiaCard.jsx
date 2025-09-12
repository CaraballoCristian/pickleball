/* UI */
import Card from "./card";
import Badge from "./badge";
import Button from "./button";
/* ICONS */
import { ExternalLink } from "lucide-react";

const NoticiaCard = ({ noticia }) => {
  return (
    /* WRAPPER CARD */
    <Card className="overflow-hidden h-[500px]">
      {/* IMAGEN */}
      <img
        src={noticia.image}
        alt={noticia.title}
        className="w-full h-[200px] object-cover"
      />
      {/* CONTENIDO */}
      <div className="p-6 h-[300px] flex flex-col">
        {/* CATEGORIA Y FECHA */}
        <div className="flex items-center justify-between mb-3">
          <Badge variant="green">{noticia.category}</Badge>
          <span className="text-sm text-text/80">{noticia.date}</span>
        </div>
        {/* TITULO */}
        <h4 className="text-xl font-semibold mb-3 text-text dark:text-text-dark">
          {noticia.title}
        </h4>
        {/* EXTRACTO */}
        <p className="text-text/80 dark:text-text-dark/80 mb-4">
          {/* ACOTAR EL PREVIEW DEL EXTRACTO */}
          {noticia.excerpt.length > 70
            ? `${noticia.excerpt.substring(0, 70)}...`
            : noticia.excerpt}
        </p>

        {/* DATE & READ MORE */}
        <div className="flex items-center justify-between mt-auto">

          {/* DATE */}
          <span className="text-sm text-text/60 dark:text-text-dark/60">
            {noticia.date}
          </span>

          {/* BOTON LEER MAS */}
          <Button
            variant="ghost"
            className="p-0 cursor-pointer ml-auto mt-auto"
          >
            Leer más <ExternalLink className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default NoticiaCard;
