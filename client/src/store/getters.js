export default {
  filterProducts: state => {
    return state.products.slice(0, 4)
  }
}
