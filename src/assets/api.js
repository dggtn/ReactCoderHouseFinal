import ITEMS from "./items"

export const obtenerTodos = () => {
    return ITEMS;
}

export const obtenerProductoPorCategoria = (categoriaId) => {
    return ITEMS.filter( (item) => item.category.id == categoriaId)
}

export const obtenerProductoPorId = (id) => {
    return ITEMS.find((item) => item.id == id)
}