export default {
  filterProducts: (state) => {
    return state.products.slice(0, 4)
  },
  getProductById: (state) => (id) => {
    return state.products.find((product) => product.id === id)
  },
  getCategoryByLink: (state) => (link) => {
    let catObj = state.categories.find((category) => category.link === link)
    return state.products.filter((product) => product.CategoryId === catObj.id)
  },
}
