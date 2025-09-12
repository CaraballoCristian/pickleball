const SectionTitle = ({ title, subtitle, center = true, invert = false }) => {
  
  const titleClassNames = invert ? 'text-bg dark:text-text' : 'text-text dark:text-text-dark';
  const subtitleClassNames = invert ? 'text-bg/90 dark:text-text/90' : 'text-text/90 dark:text-text-dark/90';

  return (
    <div className={`mb-12 ${center ? 'text-center' : ''}`}>
      <h2 className={`text-4xl font-bold ${titleClassNames} mb-4`}>{title}</h2>
      {subtitle && <p className={`text-xl ${subtitleClassNames} max-w-3xl mx-auto`}>{subtitle}</p>}
    </div>
  );
};
export default SectionTitle;