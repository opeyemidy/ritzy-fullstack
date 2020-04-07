<template>
  <div class="category">
    <b-container>
      <b-row>
        <b-col cols="12"><h3>Heading</h3></b-col>
      </b-row>
      <hr />
      <b-row>
        <b-col
          lg="3"
          md="4"
          cols="6"
          v-for="product in products"
          :key="product.name"
          class="p-0 px-2 pb-3 mb-5"
        >
          <a :href="`/product/${product.id}`" class="product-link">
            <div class="product-postion">
              <b-card class="card-postion">
                <img
                  :src="product.pics"
                  style="width: 100%; margin-bottom: 1rem;"
                />
                <div class="text-left">
                  <p class="product-title">
                    {{ product.name }}
                  </p>
                  <div class="d-flex justify-content-between">
                    <b-card-text class="mb-0">
                      ₦ {{ product.price }}
                      <strike class="small"
                        >₦ {{ product.price }}</strike
                      ></b-card-text
                    >
                    <div>32%</div>
                  </div>
                </div>
                <div class="">
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
                  <a href="" style="font-size: .95rem; color: #606060;"
                    >&nbsp;(183 ratings)</a
                  >
                </div>
                <div class="buy-btn">
                  <div class="d-flex justify-content-center my-3">
                    <b-button class="" size="sm" variant="danger"
                      >BUY NOW</b-button
                    >
                  </div>
                </div>
              </b-card>
            </div>
          </a>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState(['products'])
  }
}
</script>
<style scoped>
.category {
  margin-top: 56px;
}
.product-title {
  display: block;
  font-weight: 500;
  font-size: 13px;
  line-height: 17px;
  color: #000;
  margin: 3px 0 5px 0;
  text-align: left;
  white-space: normal;
  overflow: hidden;
  text-overflow: -o-ellipsis-lastline;
  text-overflow: ellipsis;
  display: block;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  max-height: 2.824em;
}
.buy-btn {
  display: none;
}
.product-link:hover {
  text-decoration: none;
}
.product-link:hover .buy-btn {
  display: block;
  text-decoration: none;
}
.product-link:hover .card-postion {
  z-index: 999;
}
.product-postion {
  position: relative;
  height: 335px;
}
</style>
