<template>
  <div id="app">
    <Navbar :categories="categories" />
    <router-view />
    <Footer />
  </div>
</template>
<script>
// @ is an alias to /src
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default {
  name: 'Home',
  data() {
    return {
      categoriesclass: '',
      contentClass: '',
      slide: 0,
      sliding: null
    }
  },
  components: {
    Navbar,
    Footer
  },
  computed: {
    products() {
      return this.$store.state.products
    },
    categories() {
      return this.$store.state.categories
    }
  }
}
</script>
