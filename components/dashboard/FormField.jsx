const FormField = ({ field, value, onChange }) => {
  const handleChange = (e) => {
    const newValue =
      field.type === "number"
        ? parseInt(e.target.value) || 0
        : field.type === "checkbox"
        ? e.target.checked
        : e.target.value;
    onChange(field.key, newValue);
  };

  return (
    <div className={field.type === "textarea" ? "md:col-span-2" : ""}>
      <label className="block text-sm font-medium text-text dark:text-text-dark mb-2">
        {field.label}{" "}
        {field.required && <span className="text-red-500">*</span>}
      </label>

      {field.type === "textarea" ? (
        <textarea
          value={value || ""}
          onChange={handleChange}
          className="w-full px-3 py-2 border border-accent/20 dark:border-accent-dark/20 rounded-lg bg-bg dark:bg-gray-800 text-text dark:text-text-dark focus:ring-2 focus:ring-accent dark:focus:ring-accent-dark focus:border-transparent resize-none h-24"
          placeholder={field.placeholder}
        />
      ) : field.type === "select" ? (
        <select
          value={value || ""}
          onChange={handleChange}
          className="w-full px-3 py-2 border border-accent/20 dark:border-accent-dark/20 rounded-lg bg-bg  dark:bg-gray-800 text-text dark:text-text-dark focus:ring-2 focus:ring-accent dark:focus:ring-accent-dark focus:border-transparent"
        >
          <option value="">Seleccionar...</option>
          {field.options?.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      ) : field.type === "checkbox" ? (
        <div className="flex items-center">
          <input
            type="checkbox"
            checked={value || false}
            onChange={handleChange}
            className="w-4 h-4 text-accent dark:text-accent-dark bg-bg  dark:bg-gray-800 border-accent/20 dark:border-accent-dark/20 rounded focus:ring-accent dark:focus:ring-accent-dark"
          />
        </div>
      ) : (
        <input
          type={field.type}
          value={value || ""}
          onChange={handleChange}
          className="w-full px-3 py-2 border border-accent/20 dark:border-accent-dark/20 rounded-lg bg-bg  dark:bg-gray-800 text-text dark:text-text-dark focus:ring-2 focus:ring-accent dark:focus:ring-accent-dark focus:border-transparent"
          placeholder={field.placeholder}
          required={field.required}
        />
      )}
    </div>
  );
};
export default FormField;
