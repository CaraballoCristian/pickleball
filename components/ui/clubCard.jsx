/* UI */
import Card from "./card";
import Button from "./button";
/* ICONS */
import { MapPin, Phone, Clock, Users } from "lucide-react";

const ClubCard = ({ club }) => {
  return (
    /* WRAPPER CARD */
    <Card className="overflow-hidden shadow-2xl ">
      {/* IMAGE */}
      <img
        src={club.image}
        alt={club.name}
        className="w-full h-48 object-cover"
      />

      {/* CONTENT */}
      <div className="p-6 flex flex-col justify-between h-2/3 ">
        {/* CLUB NOMBRE */}
        <div className="flex items-start justify-between mb-4">
          <h4 className="text-xl font-semibold dark:text-text-dark text-text">
            {club.name}
          </h4>
        </div>

        {/* CLUB DIRECCION */}
        <div className="space-y-3 mb-6 ">
          <div className="flex items-center space-x-3">
            <MapPin className="w-5 h-5 mt-0.5 text-accent flex-shrink-0" />
            <span className="dark:text-text-dark/80 text-text/80">
              {club.address}
            </span>
          </div>

          {/* CLUB TELEFONO */}
          <div className="flex items-center space-x-3">
            <Phone className="w-5 h-5 mt-0.5 text-accent flex-shrink-0" />
            <span className="dark:text-text-dark/80 text-text/80">
              {club.phone}
            </span>
          </div>

          {/* CLUB CANCHAS */}
          <div className="flex items-center space-x-3">
            <Users className="w-5 h-5 mt-0.5 text-accent flex-shrink-0" />
            <span className="dark:text-text-dark/80 text-text/80">
              {club.courts} canchas disponibles
            </span>
          </div>

          {/* CLUB HORARIOS */}
          <div className="flex items-center space-x-3">
            <Clock className="w-5 h-5 mt-0.5 text-accent flex-shrink-0" />
            <span className="dark:text-text-dark/80 text-text/80">
              {club.horarios}
            </span>
          </div>
        </div>

        {/* BOTONES */}
        <div className="flex gap-2 mb-5 ">
          <Button className="w-2/3">
            <a href={club.link} target="_blank" rel="noopener noreferrer">
              Contactar
            </a>
          </Button>
          <Button variant="white" className="w-1/3">
            <a href={club.map} target="_blank" rel="noopener noreferrer" 
            className="text-nowrap">
              Ver Mapa
            </a>
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default ClubCard;
