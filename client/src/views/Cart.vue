<template>
  <div class="cart">
    <b-container fluid class="page-background">
      <b-row>
        <b-col>
          <b-container>
            <b-row>
              <b-col class="pl-0">
                <h3>Item</h3>
              </b-col>
            </b-row>
            <b-row>
              <b-col cols="7" class="pl-0 cart-subtitle">item</b-col>
              <b-col cols="1" class="text-center cart-subtitle">quantity</b-col>
              <b-col cols="2" class="text-center cart-subtitle"
                >unit price</b-col
              >
              <b-col cols="2" class="text-center cart-subtitle">subtotal</b-col>
            </b-row>
            <b-row class="product-items">
              <b-col cols="7">
                <b-container fluid>
                  <b-row>
                    <b-col cols="2">
                      <img
                        src="https://ng.jumia.is/X-NBmXprfLbpfiyPqyMDvmzb8Z0=/fit-in/60x60/filters:fill(white):sharpen(1,0,false):quality(100)/product/48/154144/1.jpg?7779"
                        alt=""
                      />
                    </b-col>
                    <b-col cols="9" class="py-2">
                      <div style="font-size: 0.875rem">
                        Seller: Jumia
                      </div>
                      <h6>
                        20-Litre Microwave With Grill NX-9201 - White (JF)
                      </h6>
                      <b-container fluid>
                        <b-row>
                          <b-col class="pl-0">
                            <a href="" class="cart-action"
                              >Move to Saved Items</a
                            >
                          </b-col>
                          <b-col class="pl-0">
                            <a href="" class="cart-action">Remove</a>
                          </b-col>
                        </b-row>
                      </b-container>
                    </b-col>
                  </b-row>
                </b-container>
              </b-col>
              <b-col cols="1" class="text-center p-cart-content"
                ><b-form-select
                  v-model="selected"
                  :options="options"
                  size="sm"
                ></b-form-select
              ></b-col>
              <b-col cols="2" class="text-center p-cart-content"
                ><span>₦</span><span>12,344</span></b-col
              >
              <b-col cols="2" class="text-center p-cart-content">₦12,344</b-col>
            </b-row>
          </b-container>
        </b-col>
      </b-row>
      <b-row class="total-direction">
        <div class="p-3">
          <div>Total: ₦ 19,900</div>
          <div>Shipping fees not included yet</div>
        </div>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selected: 1,
      options: [
        { value: 1, text: 1 },
        { value: 2, text: 2 },
        { value: 3, text: 3 },
        { value: 4, text: 4 },
        { value: 5, text: 5 },
        { value: 6, text: 6 },
        { value: 7, text: 7 },
        { value: 8, text: 8 },
        { value: 9, text: 9 },
        { value: 10, text: 10 }
      ]
    }
  }
}
</script>

<style>
.cart {
  margin-top: 56px;
  background-color: #f5f5f5;
}
.page-background {
  max-width: 970px;
}
.product-items {
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.05);
  margin: 8px 0;
}
.p-cart-content {
  padding-top: 29px;
}
.cart-subtitle {
  font-weight: 500;
  text-transform: uppercase;
  color: #8e8e93;
}
.cart-action {
  font-size: 13px;
  text-transform: uppercase;
}
.cart-action:hover {
  text-decoration: none;
}
.total-direction {
  flex-direction: row-reverse;
}
</style>
