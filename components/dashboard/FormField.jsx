const FormField = ({ field, value, onChange }) => {

  /* HANDLE CHANGE */
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
    /* FIELD CONTAINER */
    <div className={field.type === "textarea" ? "md:col-span-2" : ""}> {/* Textarea ocupa 2 columnas */}
      
      {/* LABEL */}
      <label className="block text-sm font-medium text-text dark:text-text-dark mb-2">
        {field.label}{" "}
        {/* FOR REQUIRED FIELDS*/}
        {field.required && <span className="text-red-500">*</span>}
      </label>

      {/* TEXTAREA */}
      {field.type === "textarea" ? (
        <textarea
          value={value || ""}
          onChange={handleChange}
          className="w-full px-3 py-2 border border-accent/20 dark:border-accent-dark/20 rounded-lg bg-bg dark:bg-gray-800 text-text dark:text-text-dark focus:ring-2 focus:ring-accent dark:focus:ring-accent-dark focus:border-transparent resize-none h-24 outline-none"
          placeholder={field.placeholder}
        />

       /* SELECT */
      ) : field.type === "select" ? (
        <select
          value={value || ""}
          onChange={handleChange}
          className="w-full px-3 py-2 border border-accent/20 dark:border-accent-dark/20 rounded-lg bg-bg  dark:bg-gray-800 text-text dark:text-text-dark focus:ring-2 focus:ring-accent dark:focus:ring-accent-dark focus:border-transparent  outline-none"
        >
          <option value="">Seleccionar...</option>
          {field.options?.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>

       /* CHECKBOX */
      ) : field.type === "checkbox" ? (
          <div className="flex items-center">
            <input
              type="checkbox"
              checked={value || false}
              onChange={handleChange}
              className="w-4 h-4 text-accent dark:text-accent-dark bg-bg  dark:bg-gray-800 border-accent/20 dark:border-accent-dark/20 rounded focus:ring-accent dark:focus:ring-accent-dark  outline-none"
            />
          </div>
          
       /* DEFAULT INPUT (TEXT, NUMBER, EMAIL, etc.) */
      ) : (
        <input  
          type={field.type}
          value={value || ""}
          onChange={handleChange}
          className="w-full px-3 py-2 border border-accent/20 dark:border-accent-dark/20 rounded-lg bg-bg  dark:bg-gray-800 text-text dark:text-text-dark focus:ring-2 focus:ring-accent dark:focus:ring-accent-dark focus:border-transparent  outline-none"
          placeholder={field.placeholder}
          required={field.required}
        />
      )}
    </div>
  );
};
export default FormField;
