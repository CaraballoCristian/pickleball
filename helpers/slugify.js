function slugify(title) {
  return title
    .toLowerCase()
    .normalize("NFD").replace(/[\u0300-\u036f]/g, "") // saca acentos
    .replace(/[^a-z0-9]+/g, "-") // reemplaza espacios y símbolos por guiones
    .replace(/(^-|-$)+/g, ""); // limpia guiones extra
}
export default slugify;