<template>
  <div class="footer">
    <b-container
      fluid
      style="background-color: #323232; color: #fff;"
      class="py-4"
    >
      <b-row class="mx-2 d-md-none">
        <b-col v-for="list in lists" :key="list.heading" sm="3" cols="6">
          <a class="heading-link" href=""
            ><h5 class="heading-title">{{ list.heading }}</h5></a
          >
        </b-col>
        <b-col>
          <b-row>
            <b-col
              v-for="(list, index) in lastlist"
              :key="index"
              cols="12"
              class="text-left"
              ><a class="heading-link" href=""
                ><h5 class="heading-title">{{ list.heading }}</h5></a
              ></b-col
            >
          </b-row>
        </b-col>
      </b-row>

      <b-row class="mx-5">
        <b-col
          v-for="list in lists"
          :key="list.heading"
          lg="3"
          md="4"
          class="d-none d-md-block"
        >
          <ul>
            <h5 class="heading-title">{{ list.heading }}</h5>
            <li v-for="(item, index) in list.items" :key="index">
              <a href="">{{ item }}</a>
            </li>
          </ul>
        </b-col>
        <b-col class="d-none d-md-block">
          <b-row>
            <b-col
              v-for="(list, index) in lastlist"
              :key="index"
              cols="12"
              class="text-left"
              ><h5 class="heading-title">{{ list.heading }}</h5></b-col
            >
            <!----------------------- duplicate key error warning ------------------------->
            <b-col cols="4" v-for="(list, index) in lastlist" :key="index">
              <ul>
                <li v-for="item in list.items[0]" :key="item">
                  <a href="">{{ item }}</a>
                </li>
              </ul>
            </b-col>
            <b-col cols="4" v-for="(list, index) in lastlist" :key="index">
              <ul>
                <li v-for="item in list.items[1]" :key="item">
                  <a href="">{{ item }}</a>
                </li>
              </ul>
            </b-col>
            <!------------------------------------------------------------------->
          </b-row>
        </b-col>
      </b-row>
      <b-row class="mx-2 mt-3 mb-5 d-md-none">
        <b-col lg="3" md="6" sm="12" class="text-left">
          <h5 class="heading-title mb-3">JOIN US ON</h5>
          <font-awesome-layers full-width class="" style="font-size: 1.3em">
            <font-awesome-icon :icon="['fab', 'facebook-f']" />
          </font-awesome-layers>
          <span class="p-3"></span>
          <font-awesome-layers full-width class="" style="font-size: 1.3em">
            <font-awesome-icon :icon="['fab', 'twitter']" />
          </font-awesome-layers>
          <span class="p-3"></span>
          <font-awesome-layers full-width class="" style="font-size: 1.3em">
            <font-awesome-icon :icon="['fab', 'youtube']" />
          </font-awesome-layers>
          <span class="p-3"></span>
          <font-awesome-layers full-width class="" style="font-size: 1.3em">
            <font-awesome-icon :icon="['fab', 'instagram']" />
          </font-awesome-layers>
          <span class="p-3"></span>
          <font-awesome-layers full-width class="" style="font-size: 1.3em">
            <font-awesome-icon icon="shopping-cart" />
          </font-awesome-layers>
        </b-col>
        <b-col lg="9" md="6" sm="6" class="text-left d-none d-md-block">
          <h5 class="heading-title mb-3">METHODS & DELIVERY PARTNERS</h5>
        </b-col>
      </b-row>
      <div class="d-none d-md-block">
        <b-row class="mx-5 mt-3 mb-5">
          <b-col lg="3" md="6" sm="12" class="text-left">
            <h5 class="heading-title mb-3">JOIN US ON</h5>
            <font-awesome-layers full-width class="" style="font-size: 1.3em">
              <font-awesome-icon :icon="['fab', 'facebook-f']" />
            </font-awesome-layers>
            <span class="p-3"></span>
            <font-awesome-layers full-width class="" style="font-size: 1.3em">
              <font-awesome-icon :icon="['fab', 'twitter']" />
            </font-awesome-layers>
            <span class="p-3"></span>
            <font-awesome-layers full-width class="" style="font-size: 1.3em">
              <font-awesome-icon :icon="['fab', 'youtube']" />
            </font-awesome-layers>
            <span class="p-3"></span>
            <font-awesome-layers full-width class="" style="font-size: 1.3em">
              <font-awesome-icon :icon="['fab', 'instagram']" />
            </font-awesome-layers>
            <span class="p-3"></span>
            <font-awesome-layers full-width class="" style="font-size: 1.3em">
              <font-awesome-icon icon="shopping-cart" />
            </font-awesome-layers>
          </b-col>
          <b-col lg="9" md="6" sm="6" class="text-left d-none d-md-block">
            <h5 class="heading-title mb-3">METHODS & DELIVERY PARTNERS</h5>
          </b-col>
        </b-row>
      </div>
      <hr
        style="background-color: rgb(85, 85, 86); margin: 0;"
        class="px-5 mx-5"
      />
      <div class="text-center pt-1">
        Copyrights © 2020 All Rights Reserved
        <span class="h4 pl-3">Ritzy store</span>
      </div>
    </b-container>
  </div>
</template>
<script>
export default {
  data() {
    return {
      lists: [
        {
          heading: 'LET US HELP YOU',
          items: [
            'Help Center',
            'Contact us',
            'How to shop on Ritzy',
            'Delivery options and timelines',
            'How to return a product on Ritzy',
            'Corporate and bulk purchases'
          ]
        },
        {
          heading: 'ABOUT RITZY',
          items: [
            'Ritzy careers',
            'Ritzy Express',
            'Terms and Conditions',
            'Privacy policy',
            'Tech Week',
            'Ritzy Prime',
            'Stay Safe'
          ]
        },
        {
          heading: 'MAKE MONEY WITH RITZY',
          items: [
            'Sell on Ritzy',
            'Become an Affiliate Partner',
            'Become a Sales Consultant',
            'Become a Ritzy Vendor Service Provider',
            'Become a Logistics Service Partner'
          ]
        }
      ],
      lastlist: [
        {
          heading: 'RITZY INTERNATIONAL',
          items: [
            ['Algeria', 'Egypt', 'Ghana', 'Ivory Coast', 'Kenya', 'Morocco'],
            ['Senegal', 'Tunisia', 'Uganda', 'South Africa', 'Zando']
          ]
        }
      ]
    }
  }
}
</script>
<style scoped>
ul {
  padding: 0;
  text-align: left;
}
ul li {
  list-style: none;
}
ul li a {
  text-decoration: none;
  color: #c7c7cd;
  font-size: 0.75em;
}
.heading-title {
  font-size: 0.75em;
  font-weight: 700;
  color: #fff;
}
.heading-link {
  text-decoration: none;
}
</style>
