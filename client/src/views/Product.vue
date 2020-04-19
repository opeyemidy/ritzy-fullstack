<template>
  <div class="product">
    <!-- {{ productDetails }} <br /> -->
    <!-- {{ productItem }} -->

    <b-container
      fluid
      class="container-color px-0"
      v-for="product in productDetails"
      :key="product.id"
    >
      <b-row class="remove-row-margin custom-row-w mx-auto">
        <b-col lg="9" md="12">
          <b-row class="mb-3">
            <b-col cols="12">
              <b-card class="remove-p-card-body mt-5">
                <b-row class="remove-row-margin px-3 pt-3 pb-0">
                  <b-col lg="4" md="6" sm="12" class="p-0 pb-3 image-fit">
                    <b-img
                      thumbnail
                      fluid
                      :src="product.images[0]"
                      alt="Image 1"
                    ></b-img>
                    <div class="custom-thumb">
                      <div class="thumbholder">
                        <b-row
                          class="thumb-custom-p m-0"
                          v-if="product.images.length > 1"
                        >
                          <b-col
                            v-for="(image, index) in product.images"
                            :key="index"
                            cols="2"
                            class="p-0"
                            ><img :src="image" alt=""
                          /></b-col>
                        </b-row>
                      </div>
                    </div>
                    <hr v-if="product.images.length > 1" />
                    <h5 class="custom-card-title">share this product</h5>
                    <div class="product-social-page">
                      <a href="">
                        <font-awesome-layers
                          full-width
                          class=""
                          style="font-size: 1rem;"
                        >
                          <font-awesome-icon :icon="['fab', 'facebook-f']" />
                        </font-awesome-layers>
                      </a>
                      <a href="">
                        <font-awesome-layers
                          full-width
                          class=""
                          style="font-size: 1rem;"
                        >
                          <font-awesome-icon :icon="['fab', 'twitter']" />
                        </font-awesome-layers>
                      </a>
                    </div>
                  </b-col>
                  <b-col lg="8" md="6" class="p-0 pl-4">
                    <h5>
                      {{ product.name }}
                    </h5>
                    <div>
                      <font-awesome-layers
                        full-width
                        class=""
                        style="font-size: .8rem; color: #f6b01e;"
                      >
                        <font-awesome-icon icon="star" />
                      </font-awesome-layers>
                      <font-awesome-layers
                        full-width
                        class=""
                        style="font-size: .8rem; color: #f6b01e;"
                      >
                        <font-awesome-icon icon="star" />
                      </font-awesome-layers>
                      <font-awesome-layers
                        full-width
                        class=""
                        style="font-size: 0.8rem; color: #f6b01e;"
                      >
                        <font-awesome-icon icon="star" />
                      </font-awesome-layers>
                      <font-awesome-layers
                        full-width
                        class=""
                        style="font-size: .8rem; color: #f6b01e;"
                      >
                        <font-awesome-icon icon="star" />
                      </font-awesome-layers>
                      <font-awesome-layers
                        full-width
                        class=""
                        style="font-size: .8rem; color: #c7c7cd"
                      >
                        <font-awesome-icon icon="star" />
                      </font-awesome-layers>
                      <a href="" style="font-size: .95rem;"
                        >&nbsp;(183 ratings)</a
                      >
                    </div>
                    <hr />
                    <div>₦ {{ product.price }}</div>
                    <strike>₦ 7,650 - ₦ 7,890</strike>
                    <div v-if="product.size !== null">
                      <hr class="mb-1" />
                      <div
                        class="d-flex align-items-center justify-content-between"
                      >
                        <h5 class="custom-card-title">promotion</h5>
                        <h6>Size Guide</h6>
                      </div>
                      <div class="shoe-size-grade">
                        <label
                          v-for="(size, index) in product.size"
                          :key="index"
                          for=""
                          >{{ size }}</label
                        >
                      </div>
                    </div>
                    <div class="mt-3">
                      <b-button block variant="danger" class="py-2">
                        <div style="line-height: 24px;">
                          <font-awesome-layers
                            full-width
                            class="float-left"
                            style="font-size: 1.3em;"
                          >
                            <font-awesome-icon icon="shopping-cart" />
                          </font-awesome-layers>
                          <div style="">
                            ADD TO CART
                          </div>
                        </div>
                      </b-button>
                    </div>
                    <hr />
                    <ul class="promotion p-0">
                      <li>
                        <a href="#"
                          >Stay Safe, Go cashless with JumiaPay. Get additional
                          5% off capped at N500 (Jumia APP only)</a
                        >
                      </li>
                      <li>
                        <a href="#"
                          >Enjoy unlimited Free Delivery with Jumia Prime</a
                        >
                      </li>
                      <li>
                        <a href="#"
                          >Buy airtime and data on Jumia One and get up to N500
                          cash back. Use code WELCOME50</a
                        >
                      </li>
                    </ul>
                  </b-col>
                </b-row>
              </b-card>
            </b-col>
          </b-row>
          <b-row class="mb-3">
            <b-col cols="12">
              <b-card>
                <h5 class="custom-card-title">product details</h5>
                <hr />
                <p>
                  {{ product.details }}
                </p>
              </b-card>
            </b-col>
          </b-row>
          <b-row class="mb-3">
            <b-col cols="12" v-if="product.Specifications.length !== 0">
              <b-card>
                <h5 class="custom-card-title">Specification</h5>
                <hr />
                <b-row>
                  <b-col
                    v-for="item in product.Specifications"
                    :key="item.heading"
                    lg="6"
                    md="6"
                    sm="12"
                    class="mb-3"
                  >
                    <b-card style="height: 100%">
                      <template v-slot:header>
                        <h5 class="mb-0 custom-card-title">
                          {{ item.heading }}
                        </h5>
                      </template>
                      <b-card-text>
                        <ul
                          v-for="(list, index) in item.list"
                          :key="index"
                          class="m-0 spec-list px-0"
                        >
                          <li>{{ list }}</li>
                        </ul>
                      </b-card-text>
                    </b-card>
                  </b-col>
                </b-row>
              </b-card>
            </b-col>
          </b-row>
          <b-row class="mb-3">
            <b-col cols="12">
              <b-card>
                <h5 class="custom-card-title">Customers Feedback</h5>
                <hr />
                <div class="d-flex justify-content-center">
                  <div>
                    <div class="text-center for-no-rating">
                      <img
                        src="https://www.jumia.com.ng/assets_he/images/no-feedback.6c5fb8ec.svg"
                        alt=""
                      />
                    </div>
                    <p><b>This product has no rating yet</b></p>
                  </div>
                </div>
                <!-- <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Explicabo sequi dolor optio distinctio, cumque blanditiis
                  corporis nam qui maxime dolore, facere, eligendi quisquam rem
                  aperiam voluptatem vel facilis ab quidem? Sunt, provident!
                  Blanditiis iure aliquid debitis voluptatum voluptas rem
                  tempora deserunt soluta ea, harum voluptate dicta asperiores,
                  distinctio minus cumque consequuntur. Maxime quo in minus
                  neque magni est eaque tempore! Similique culpa inventore alias
                  omnis vel. Enim, repellat. Quia, odit amet. Earum libero modi
                  accusamus ab quibusdam expedita ratione animi excepturi
                  molestiae harum, nihil a rerum delectus id quo est!
                  Consequatur id ipsam vel similique inventore sint, perferendis
                  quibusdam voluptas quos dicta rem iusto error maxime quia modi
                  qui sed nihil tempora exercitationem tenetur ad perspiciatis!
                  Deserunt dolore esse dolorum? Qui, repudiandae deleniti esse
                  debitis porro voluptatem omnis rerum, a est laudantium vel ut
                  sapiente quis, voluptas repellat expedita nisi? Numquam eos
                  libero eligendi cum veniam optio odio repellendus eaque.
                </p> -->
              </b-card>
            </b-col>
          </b-row>
        </b-col>
        <b-col cols="3" class="px-0 mb-5 d-none d-lg-block">
          <b-card
            class="remove-p-card-body card-curve-edges px-2 pb-0 pt-3 mt-5"
          >
            <b-container fluid>
              <b-row class="align-items-start">
                <b-col cols="2" class="px-0">
                  <div
                    style="border: 1px solid #ededed; border-radius: 4px;"
                    class="text-center px-1 py-2"
                  >
                    <font-awesome-layers
                      full-width
                      class=""
                      style="font-size: 1rem; color: #4d4a4a;"
                    >
                      <font-awesome-icon icon="paper-plane" />
                    </font-awesome-layers>
                  </div>
                </b-col>
                <b-col cols="10" class="px-0 pl-1"
                  ><h6
                    class="mb-0 banner-right-title"
                    style="margin-top: -2px;"
                  >
                    RITZY EXPRESS
                  </h6>

                  <p class="banner-right-content">
                    Express delivery in main cities. Details
                  </p></b-col
                >
              </b-row>
              <b-row class="align-items-start">
                <b-col cols="2" class="px-0">
                  <div
                    style="border: 1px solid #ededed; border-radius: 4px;"
                    class="text-center px-1 py-2"
                  >
                    <font-awesome-layers
                      full-width
                      class=""
                      style="font-size: 1rem; color: #4d4a4a;"
                    >
                      <font-awesome-icon icon="truck-moving" />
                    </font-awesome-layers>
                  </div>
                </b-col>
                <b-col cols="10" class="px-0 pl-1"
                  ><h6
                    class="mb-0 banner-right-title"
                    style="margin-top: -2px;"
                  >
                    Delivery Information
                  </h6>
                  <p class="banner-right-content">
                    Normally delivered between Tuesday 14 Apr and Wednesday 15
                    Apr. Please check exact dates in the Checkout page.See more
                  </p></b-col
                >
              </b-row>
              <b-row class="align-items-start">
                <b-col cols="2" class="px-0">
                  <div
                    style="border: 1px solid #ededed; border-radius: 4px;"
                    class="text-center px-1 py-2"
                  >
                    <font-awesome-layers
                      full-width
                      class=""
                      style="font-size: 1rem; color: #4d4a4a;"
                    >
                      <font-awesome-icon icon="box" />
                    </font-awesome-layers>
                  </div>
                </b-col>
                <b-col cols="10" class="px-0 pl-1"
                  ><h6
                    class="mb-0 banner-right-title"
                    style="margin-top: -2px;"
                  >
                    Return Policy
                  </h6>
                  <p class="banner-right-content">
                    Free return within 15 days for Jumia Mall items and 7 days
                    for other eligible items.See more
                  </p></b-col
                >
              </b-row>
              <b-row class="align-items-start">
                <b-col cols="2" class="px-0">
                  <div
                    style="border: 1px solid #ededed; border-radius: 4px;"
                    class="text-center px-1 py-2"
                  >
                    <font-awesome-layers
                      full-width
                      class=""
                      style="font-size: 1rem; color: #4d4a4a;"
                    >
                      <font-awesome-icon icon="user-shield" />
                    </font-awesome-layers>
                  </div>
                </b-col>
                <b-col cols="10" class="px-0 pl-1"
                  ><h6
                    class="mb-0 banner-right-title"
                    style="margin-top: -2px;"
                  >
                    Warranty
                  </h6>
                  <p class="banner-right-content">N/A</p></b-col
                >
              </b-row>
            </b-container>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
<style scoped>
.product {
  margin-top: 56px;
}
.image-fit img {
  width: 100%;
}
.container-color {
  background-color: #f5f5f5;
}
.remove-row-margin {
  margin: 0;
}
.custom-row-w {
  max-width: 1184px;
}
.card.remove-p-card-body .card-body {
  padding: 0;
}
.shoe-size-grade label {
  min-width: 40px;
  border: 1px solid #ededed;
  padding: 8px;
  border-radius: 2px;
  margin: 5px;
  font-size: 0.75rem;
  font-weight: 500;
  text-align: center;
}
.shoe-size-grade label:first-child {
  margin-left: 0;
}
.promotion {
  margin: 0;
}
.promotion li {
  list-style: none;
  padding: 8px 0;
}
.promotion li a {
  font-size: 0.875rem;
}
.custom-card-title {
  font-size: 0.875rem;
  text-transform: uppercase;
  font-weight: 500;
  padding: 8 0;
}
.custom-thumb {
  position: relative;
}
.thumbholder {
  margin-top: 8px;
}
.thumb-custom-p .col-2 {
  padding: 8px !important;
  padding-left: 0 !important;
}
.product-social-page a {
  display: inline-block;
  padding: 4px;
  width: 30px;
  height: 30px;
  border: 1px solid black;
  border-radius: 50%;
  text-align: center;
}
.product-social-page a:first-child {
  margin-right: 8px;
}
.spec-list li {
  list-style: none;
}
.for-no-rating img {
  width: 100px;
}
.banner-right-title {
  font-size: 0.875rem;
}
.banner-right-content {
  font-size: 0.875rem;
}
.card-curve-edges {
  border-radius: 5px;
}
</style>
<script>
export default {
  name: 'app',
  data() {
    return {
      productItem: [],
      ProductId: null
    }
  },

  computed: {
    productDetails() {
      let productValue = this.$store.getters.getProductById(this.ProductId)
      let productValueArray = []
      productValueArray.push(productValue)
      return productValueArray
    }
  },
  created() {
    this.ProductId = parseInt(this.$route.params.id)
    this.productItem = this.$store.state.products.filter(item => {
      return item.id === parseInt(this.$route.params.id)
      // console.log(this.productItem)
    })
  }
  // beforeRouteEnter(to, from, next) {
  //   if ($route.params.id) {
  //     next()
  //   } else {
  //     next('/')
  //   }
  //   //   })
  //   // console.log('Entering product', to.params.id)
  //   // // to.params.myCustomizations = {}
  // }
  // beforeRouteLeave(to, from, next) {
  //   const answer = window.confirm(
  //     'Do you really want to leave? you have unsaved changes!'
  //   )
  //   if (answer) {
  //     next()
  //   } else {
  //     next(false)
  //   }
  // }
}
</script>
