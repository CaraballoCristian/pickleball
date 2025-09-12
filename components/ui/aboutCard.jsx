const AboutCard = ({title, subtitle, icon}) => {
  return (
    <div className="text-center p-6 bg-bg dark:bg-bg-dark rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
      <div className="w-16 h-16 bg-gradient-to-br from-accent-dark to-accent rounded-full flex items-center justify-center mx-auto mb-4">
        {icon}
      </div>
      <h4 className="text-xl font-semibold text-accent dark:text-accent-dark mb-3">
        {title}
      </h4>
      <p className="text-text-muted dark:text-muted-dark  ">
        {subtitle}
      </p>
    </div>
  );
};

export default AboutCard;
