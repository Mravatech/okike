<template>
  <div class="okike-landing animated">
    <div class="okike-landing-inner ">
      <div class="container">
        <div class="up-intro">
          <div class="hi-username">
            <h1>Hi, {{ user.username  || ''}}!</h1>
            <p>Quickly grab your food now.</p>
          </div>
          <div class="">
            <router-link to="Menu"><img src="../../assets/images/menu_btn.svg"></router-link>
          </div>
        </div>
        <div class="locate-user">
          <img src="../../assets/images/location2.svg">
          <input class="input-location" type="text" name="location" placeholder="Lagos, Lekki, Nigeria">
        </div>
      </div>

      <div class="promo-today ">
        <h1>Promo Today</h1>
        <!--<carousel :autoplay="true" :nav="false">-->
        <div class="promo-today-slide">
          <div class="sliding-post">
            <router-link to="ViewFood">
              <div class="product_img">
                <img src="../../assets/images/abacha-meal.jpg">
              </div>
              <div class="food-details">
                <p class="food-name">Boli & Titus</p>
                <p class="food-price">&#8358; 750 <span class="food-price-big">&#8358; 1,350</span></p>
                <p class="food-time">3:15pm</p>
              </div></router-link>
          </div>
          <div class="sliding-post">
            <div class="product_img">
              <img src="../../assets/images/boli-meal.jpg">
            </div>
            <div class="food-details">
              <p class="food-name">Boli & Titus</p>
              <p class="food-price">&#8358; 750 <span class="food-price-big">&#8358; 1,350</span></p>
              <p class="food-time">3:15pm</p>
            </div>
          </div>
          <div class="sliding-post">
            <div class="product_img">
              <img src="../../assets/images/abacha-meal.jpg">
            </div>
            <div class="food-details">
              <p class="food-name">Boli & Titus</p>
              <p class="food-price">&#8358; 750 <span class="food-price-big">&#8358; 1,350</span></p>
              <p class="food-time">3:15pm</p>
            </div>
          </div>
          <div class="sliding-post">
            <div class="product_img">
              <img src="../../assets/images/boli-meal.jpg">
            </div>
            <div class="food-details">
              <p class="food-name">Boli & Titus</p>
              <p class="food-price">&#8358; 750 <span class="food-price-big">&#8358; 1,350</span></p>
              <p class="food-time">3:15pm</p>
            </div>
          </div>
          <div class="sliding-post">
            <div class="product_img">
              <img src="../../assets/images/abacha-meal.jpg">
            </div>
            <div class="food-details">
              <p class="food-name">Boli & Titus</p>
              <p class="food-price">&#8358; 750 <span class="food-price-big">&#8358; 1,350</span></p>
              <p class="food-time">3:15pm</p>
            </div>
          </div>
        </div>
      </div>

      <div >
        <b-card no-body>
          <b-tabs card class="okike-tab-card">
            <b-tab v-for="data in category" :key="data.uuid" no-body :title="data.name" class="abacha-tab">
              <!--<b-card-img bottom src="https://picsum.photos/600/200/?image=21"></b-card-img>-->
              <div class="food-promo-today" :id="data.name" >
                <div class="promo-today-slide" v-if="data.foods.length > 0">
                  <div v-for="food in data.foods" :key="food.uuid" class="sliding-post">
                    <div class="product_img">
                      <img :src="food.image_url">
                    </div>
                    <div class="food-details">
                      <p class="food-name"> {{ food.name }}</p>
                      <p class="food-price">&#8358; {{ food.discount_price }} <span class="food-price-big">&#8358; {{ food.price }}</span></p>
                      <p class="food-time">3:15pm</p>
                    </div>
                  </div>
                </div>
                <div class="promo-today-slide" v-if="data.foods.length === 0">
                  <p class="food-name text-center"> No Data</p>
                </div>
              </div>
            </b-tab>

          </b-tabs>
        </b-card>
      </div>
      <div class="pb-5"></div>
      <div class="fixed-bottom">
        <div class="floating-menu-footer container">
          <div class="menu-float ">
            <router-link to="Delicacies"><img src="../../assets/images/okike-menu.svg"></router-link>
          </div>

          <div class="cart-float ">
            <router-link to="Cart"><img src="../../assets/images/okike-cart.svg">
              <sup class="cart-count">12</sup></router-link>
          </div>
        </div>
      </div>
    </div>
    <!--</div>-->
  </div>
</template>

<script>
  import {mapActions} from 'vuex';
  import {category} from "../../services/category.service";

  // import carousel from 'vue-owl-carousel'
  // import {VueTabs, VTab} from 'vue-nav-tabs'
  export default {
    name: "Landing",
    isActive: true,
    components: {
      // VueTabs,
      // VTab
    },
    data: function () {
      return {
        isLoading: false,
        user: [],
        category: [],
      };
    },
    computed: {
    // ...mapActions({user: 'GET_USER'}),
    },
    created(){
      this.user = this.$store.getters.GET_USER;
      this.fetchCategory();
    },
    methods: {
      async fetchCategory() {
        this.isLoading = true;
        await category.fetch().then((res) => {
          console.log(res);
          this.isLoading = false;
          this.category = res.data;
          console.log(res);
          // router.push({path: `/Location`})
        }).catch((err) => {
            this.isLoading = false;
            this.$toast.error(err.message)
          }
        );
      },

    }
  }


</script>

<style scoped>
  body{
    background: #f3f5f7 !important;
  }
  .red{
    background: red;
  }

  .blue{
    background: blue;
  }

  .div{
    width: 100px;
    height: 100px;
    display: inline-block;
    border: 1px solid black;
  }

  .abacha-tab{
    text-decoration: none;
    color: #000000;
  }
  .floating-menu-footer{
    display: flex;
    justify-content: space-between;
    padding-bottom: 1rem;
    width: 100%;
  }
</style>
