<template>
  <div class="home">
    <div style="" class="wrapper">
      <b-container
        fluid
        class="p-0 content-mt custom-container d-none d-md-block"
      >
        <b-row class="m-0 py-3">
          <b-col
            lg="2"
            md="3"
            sm="3"
            class=" p-0 pl-3 d-none d-md-block category-wrapper"
          >
            <b-card-group>
              <b-card
                no-body
                style="border: none; font-size: 16px;"
                header="Categories"
                class="text-left h3"
              >
                <b-list-group class="text-left">
                  <b-list-group-item
                    style="border: none; font-size: 16px; padding: 0.3rem 1.25rem ;"
                    v-for="item in categories"
                    :key="item.title"
                    :href="`/category/${item.title}`"
                    class="h5"
                  >
                    <!-- <span><b-icon icon="alert-triangle"></b-icon></span> -->
                    {{ item.title }}
                  </b-list-group-item>
                </b-list-group>
              </b-card>
            </b-card-group>
          </b-col>
          <b-col lg="8" sm="12" md="9">
            <b-row class="px-3 pb-3">
              <b-carousel
                id="carousel-1"
                v-model="slide"
                :interval="3000"
                fade
                controls
                indicators
                background="#ababab"
                style="text-shadow: 1px 1px 2px #333; width: 100%;"
                @sliding-start="onSlideStart"
                @sliding-end="onSlideEnd"
              >
                <!-- Text slides with image -->
                <b-carousel-slide>
                  <template v-slot:img>
                    <img
                      class="d-block img-fluid w-100 carousel-container-height"
                      src="https://ng.jumia.is/cms/Homepage/2020/W13/Wednesday/Slider-3.jpg"
                      alt="image slot"
                    />
                  </template>
                  ></b-carousel-slide
                >

                <!-- Slides with custom text -->
                <b-carousel-slide>
                  <template v-slot:img>
                    <img
                      class="d-block img-fluid w-100 carousel-container-height"
                      src="https://ng.jumia.is/cms/Homepage/2020/W13/upd-techweek_wof4.jpg"
                      alt="image slot"
                    />
                  </template>
                </b-carousel-slide>

                <!-- Slides with image only -->
                <b-carousel-slide>
                  <template v-slot:img>
                    <img
                      class="d-block img-fluid w-100 carousel-container-height"
                      src="https://ng.jumia.is/cms/Homepage/2020/W13/DailyEssentials.jpg"
                      alt="image slot"
                    />
                  </template>
                </b-carousel-slide>

                <!-- Slides with img slot -->
                <!-- Note the classes .d-block and .img-fluid to prevent browser default image alignment -->
                <b-carousel-slide>
                  <template v-slot:img>
                    <img
                      class="d-block img-fluid w-100 carousel-container-height"
                      src="https://ng.jumia.is/cms/8-18/stay-safe/updated/s-ss.jpg"
                      alt="image slot"
                    />
                  </template>
                </b-carousel-slide>

                <!-- Slide with blank fluid image to maintain slide aspect ratio -->
                <b-carousel-slide>
                  <template v-slot:img>
                    <img
                      class="d-block img-fluid w-100 carousel-container-height"
                      src="https://ng.jumia.is/cms/Homepage/2020/W13/Wednesday/NG_W13_S_WED_TECHWEEK_1.jpg"
                      alt="image slot"
                    />
                  </template>
                </b-carousel-slide>
              </b-carousel>
            </b-row>
            <b-row>
              <b-col cols="12" class="py-0">
                <b-card header="Featured Products" class="my-card-title">
                  <b-row>
                    <b-col
                      lg="3"
                      md="4"
                      cols="6"
                      v-for="product in products"
                      :key="product.name"
                      class="p-0 px-3 pb-3"
                    >
                      <a :href="`/product/${product.id}`" class="product-link">
                        <b-card>
                          <img
                            :src="product.pics"
                            style="width: 100%; margin-bottom: 1rem;"
                          />
                          <div class="text-left">
                            <p class="product-title">
                              {{ product.name }}
                            </p>
                            <b-card-text> ₦ {{ product.price }} </b-card-text>
                          </div>
                        </b-card>
                      </a>
                    </b-col>
                  </b-row>
                </b-card>
              </b-col>
            </b-row>
            <b-row class="mt-3">
              <b-col cols="12" class="py-0">
                <b-card
                  header="Flash Sales"
                  class="my-card-title flash-sales-title"
                >
                  <b-row>
                    <b-col
                      lg="3"
                      md="4"
                      cols="6"
                      v-for="product in products"
                      :key="product.name"
                      class="p-0 px-3 pb-3"
                    >
                      <a @click="gotoProduct(product)" class="product-link">
                        <b-card>
                          <img
                            :src="product.pics"
                            style="width: 100%; margin-bottom: 1rem;"
                          />
                          <div class="text-left">
                            <p class="product-title">
                              {{ product.name }}
                            </p>
                            <b-card-text> ₦ {{ product.price }} </b-card-text>
                          </div>
                        </b-card>
                      </a>
                    </b-col>
                  </b-row>
                </b-card>
              </b-col>
            </b-row>
            <b-row class="mt-3">
              <b-col cols="12" class="py-0">
                <b-card
                  header="Store Recommendation"
                  class="my-card-title recommendation-sales-title"
                >
                  <b-row>
                    <b-col
                      lg="3"
                      md="4"
                      cols="6"
                      v-for="product in products"
                      :key="product.name"
                      class="p-0 px-3 pb-3"
                    >
                      <a @click="gotoProduct(product)" class="product-link">
                        <b-card>
                          <img
                            :src="product.pics"
                            style="width: 100%; margin-bottom: 1rem;"
                          />
                          <div class="text-left">
                            <p class="product-title">
                              {{ product.name }}
                            </p>
                            <b-card-text> ₦ {{ product.price }} </b-card-text>
                          </div>
                        </b-card>
                      </a>
                    </b-col>
                  </b-row>
                </b-card>
              </b-col>
            </b-row>
          </b-col>
          <b-col cols="2" class="p-0 pr-3 d-none d-sm-none d-lg-block">
            <b-row class="m-0">
              <b-col cols="12 p-0">
                <b-card
                  class="mb-3 card-right-height card-right-background"
                ></b-card>
              </b-col>
              <b-col cols="12 p-0">
                <b-card
                  class="card-right-height card-right-background-2"
                ></b-card>
              </b-col>
            </b-row>
          </b-col>
        </b-row>
      </b-container>
      <b-container fluid class="p-0 content-mt-sm custom-container d-md-none">
        <b-row class="m-0 pb-3">
          <b-col
            lg="2"
            md="3"
            sm="3"
            class="d-none d-md-block category-wrapper"
          >
            <b-card-group>
              <b-card
                no-body
                style="border: none; font-size: 16px;"
                header="Categories"
                class="text-left h3"
              >
                <b-list-group class="text-left">
                  <b-list-group-item
                    style="border: none; font-size: 16px; padding: 0.3rem 1.25rem ;"
                    v-for="item in categories"
                    :key="item.title"
                    href="#some-link"
                    class="h5"
                  >
                    <!-- <span><b-icon icon="alert-triangle"></b-icon></span> -->
                    {{ item.title }}
                  </b-list-group-item>
                </b-list-group>
              </b-card>
            </b-card-group>
          </b-col>
          <b-col lg="8" sm="12" md="9">
            <b-row class="pb-3">
              <b-carousel
                id="carousel-1"
                v-model="slide"
                :interval="3000"
                fade
                controls
                indicators
                background="#ababab"
                style="text-shadow: 1px 1px 2px #333; width: 100%;"
                @sliding-start="onSlideStart"
                @sliding-end="onSlideEnd"
              >
                <!-- Text slides with image -->
                <b-carousel-slide>
                  <template v-slot:img>
                    <img
                      class="d-block img-fluid w-100 carousel-container-height"
                      src="https://ng.jumia.is/cms/Homepage/2020/W13/Wednesday/Slider-3.jpg"
                      alt="image slot"
                    />
                  </template>
                  ></b-carousel-slide
                >

                <!-- Slides with custom text -->
                <b-carousel-slide>
                  <template v-slot:img>
                    <img
                      class="d-block img-fluid w-100 carousel-container-height"
                      src="https://ng.jumia.is/cms/Homepage/2020/W13/upd-techweek_wof4.jpg"
                      alt="image slot"
                    />
                  </template>
                </b-carousel-slide>

                <!-- Slides with image only -->
                <b-carousel-slide>
                  <template v-slot:img>
                    <img
                      class="d-block img-fluid w-100 carousel-container-height"
                      src="https://ng.jumia.is/cms/Homepage/2020/W13/DailyEssentials.jpg"
                      alt="image slot"
                    />
                  </template>
                </b-carousel-slide>

                <!-- Slides with img slot -->
                <!-- Note the classes .d-block and .img-fluid to prevent browser default image alignment -->
                <b-carousel-slide>
                  <template v-slot:img>
                    <img
                      class="d-block img-fluid w-100 carousel-container-height"
                      src="https://ng.jumia.is/cms/8-18/stay-safe/updated/s-ss.jpg"
                      alt="image slot"
                    />
                  </template>
                </b-carousel-slide>

                <!-- Slide with blank fluid image to maintain slide aspect ratio -->
                <b-carousel-slide>
                  <template v-slot:img>
                    <img
                      class="d-block img-fluid w-100 carousel-container-height"
                      src="https://ng.jumia.is/cms/Homepage/2020/W13/Wednesday/NG_W13_S_WED_TECHWEEK_1.jpg"
                      alt="image slot"
                    />
                  </template>
                </b-carousel-slide>
              </b-carousel>
            </b-row>
            <b-row>
              <b-col cols="12" class="p-0 product-sm-px">
                <b-card header="Featured Products" class="my-card-title">
                  <b-row>
                    <b-col
                      lg="3"
                      md="4"
                      cols="6"
                      v-for="product in products"
                      :key="product.name"
                      class="p-0 px-3 pb-3"
                    >
                      <a @click="gotoProduct(product)" class="product-link">
                        <b-card>
                          <img
                            :src="product.pics"
                            style="width: 100%; margin-bottom: 1rem;"
                          />
                          <div class="text-left">
                            <p class="product-title">
                              {{ product.name }}
                            </p>
                            <b-card-text> ₦ {{ product.price }} </b-card-text>
                          </div>
                        </b-card>
                      </a>
                    </b-col>
                  </b-row>
                </b-card>
              </b-col>
            </b-row>
            <b-row class="mt-3">
              <b-col cols="12" class="p-0 product-sm-px">
                <b-card
                  header="Flash Sales"
                  class="my-card-title flash-sales-title"
                >
                  <b-row>
                    <b-col
                      lg="3"
                      md="4"
                      cols="6"
                      v-for="product in products"
                      :key="product.name"
                      class="p-0 px-3 pb-3"
                    >
                      <a @click="gotoProduct(product)" class="product-link">
                        <b-card>
                          <img
                            :src="product.pics"
                            style="width: 100%; margin-bottom: 1rem;"
                          />
                          <div class="text-left">
                            <p class="product-title">
                              {{ product.name }}
                            </p>
                            <b-card-text> ₦ {{ product.price }} </b-card-text>
                          </div>
                        </b-card>
                      </a>
                    </b-col>
                  </b-row>
                </b-card>
              </b-col>
            </b-row>
            <b-row class="mt-3">
              <b-col cols="12" class="p-0 product-sm-px">
                <b-card
                  header="Store Recommendation"
                  class="my-card-title recommendation-sales-title"
                >
                  <b-row>
                    <b-col
                      lg="3"
                      md="4"
                      cols="6"
                      v-for="product in products"
                      :key="product.name"
                      class="p-0 px-3 pb-3"
                    >
                      <a @click="gotoProduct(product)" class="product-link">
                        <b-card>
                          <img
                            :src="product.pics"
                            style="width: 100%; margin-bottom: 1rem;"
                          />
                          <div class="text-left">
                            <p class="product-title">
                              {{ product.name }}
                            </p>
                            <b-card-text> ₦ {{ product.price }} </b-card-text>
                          </div>
                        </b-card>
                      </a>
                    </b-col>
                  </b-row>
                </b-card>
              </b-col>
            </b-row>
          </b-col>
          <b-col cols="2" class="p-0 pr-3 d-none d-sm-none d-lg-block">
            <b-row class="m-0">
              <b-col cols="12 p-0">
                <b-card
                  class="mb-3 card-right-height card-right-background"
                ></b-card>
              </b-col>
              <b-col cols="12 p-0">
                <b-card
                  class="card-right-height card-right-background-2"
                ></b-card>
              </b-col>
            </b-row>
          </b-col>
        </b-row>
      </b-container>
    </div>
  </div>
</template>
<style scoped>
.remove-border {
  border: none;
}
</style>
<script>
// @ is an alias to /src
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { mapState } from 'vuex'

export default {
  name: 'Home',
  data() {
    return {
      categoriesclass: '',
      contentClass: '',
      slide: 0,
      sliding: null,
      smallScreen: true
    }
  },
  components: {
    Navbar,
    Footer
  },
  computed: {
    ...mapState(['categories']),
    products() {
      return this.$store.getters.filterProducts
    }
  },
  methods: {
    onResize() {
      if (window.innerWidth < 768) {
        this.smallScreen = true
      } else {
        this.smallScreen = false
      }
    },
    onSlideStart(slide) {
      this.sliding = true
    },
    onSlideEnd(slide) {
      this.sliding = false
    }
  },
  created() {
    window.addEventListener('resize', this.onResize)
  },

  beforeDestroy() {
    window.removeEventListener('resize', this.onResize)
  },
  watch: {
    $route(to, from) {
      console.log('route switched')
    }
  }
}
</script>
<style scoped>
.wrapper {
  background-image: url('https://ng.jumia.is/cms/8-18/fashion-frenzy/BG-FF.jpg');
}
.card-right-background {
  background-image: url('https://ng.jumia.is//cms/Homepage/2020/W13/1TechWeek_BSB_2pm+9pm-(1).gif');
  background-size: contain;
}
.card-right-background-2 {
  background-image: url('https://res.cloudinary.com/css-tricks/image/upload/f_auto,q_auto/v1554737513/woocommerce_kqwhux.png');
  background-size: contain;
}
.custom-container {
  max-width: 1200px;
}
.content-mt {
  margin-top: 56px;
}
.product-sm-px {
  padding: 0 0.5rem !important;
}
.content-mt-sm {
  margin-top: 52px;
}
.category-wrapper {
  position: -webkit-sticky;
  position: sticky;
  top: 62px;
  height: 402px;
}
.my-card-title .card-header {
  text-align: left;
  font-size: 1.3rem;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  color: #14191f;
}
.my-card-title .card-body {
  padding-bottom: 0;
}
.flash-sales-title,
.recommendation-sales-title {
  border: none;
}
.flash-sales-title .card-header {
  color: #fff;
  background-color: red;
}
.recommendation-sales-title .card-header {
  color: #fff;
  background-color: rgb(50, 116, 50);
}
.card-right-height {
  height: 193px;
}
.product-title {
  margin-bottom: 0.3rem;
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.product-link {
  text-decoration: none;
  color: rgb(31, 29, 29);
  cursor: pointer;
}
.carousel-container-height {
  min-height: 347px;
}
.carousel-img-height {
  height: 100%;
}
.md-mt-height {
  margin-top: 56px;
}
</style>
