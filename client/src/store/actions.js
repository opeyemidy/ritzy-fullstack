import axios from 'axios'

export default {
  getProducts({ commit }) {
    axios
      .get('http://localhost:3000/api/product/all')
      .then((data) => {
        let products = data.data
        commit('SET_PRODUCTS', products)
      })
      .catch((err) => {
        console.log(err)
      })
  },
  getCategories({ commit }) {
    axios
      .get('http://localhost:3000/api/category/all')
      .then((data) => {
        let categories = data.data
        commit('SET_CATEGORIES', categories)
      })
      .catch((err) => {
        console.log(err)
      })
  },
}
