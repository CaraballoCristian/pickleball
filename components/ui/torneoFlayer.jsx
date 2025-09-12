/* UI */
import Card from './card';

const TorneoFlyer = ({ torneo }) => {
  return (
    /* WRAPPER CARD */
    <Card className="overflow-hidden">
      {/* FLYER */}
      <img src={torneo.image} alt={torneo.title} className="w-full h-80 object-cover" />
      {/* INFO */}
      <div className="p-4">
        {/* TITULO */}
        <h4 className="font-semibold text-text dark:text-text-dark mb-2">{torneo.title}</h4>
        {/* FECHA Y LUGAR */}
        <div className="flex justify-between text-sm text-text/80 dark:text-text-dark/80">
          <span>{torneo.date}</span>
          <span>{torneo.location}</span>
        </div>
      </div>
    </Card>
  );
};

export default TorneoFlyer;