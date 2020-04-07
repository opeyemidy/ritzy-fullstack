import axios from 'axios'

export default {
  getProducts({ commit }) {
    axios
      .get('http://localhost:3000/api/product/all')
      .then((data) => {
        console.log(data.data)
        let products = data.data
        commit('SET_PRODUCTS', products)
      })
      .catch((err) => {
        console.log(err)
      })
  },
}
