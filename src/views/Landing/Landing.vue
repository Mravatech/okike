<template>
  <div class="okike-landing animated">
    <div class="okike-landing-inner">
      <div class="container">
        <div class="up-intro">
          <div class="hi-username">
            <h1>Hi, {{ user.username || ''}}!</h1>
            <p>Quickly grab your food now.</p>
          </div>
          <div class>
            <router-link to="Menu">
              <img class="menu-btn" src="../../assets/images/menu_btn.svg" />
            </router-link>
          </div>
        </div>
        <div class="locate-user">
          <img src="../../assets/images/location2.svg" />
          <input
            class="input-location"
            v-model="query"
            @keyup.enter="searchFood()"
            type="text"
            name="food"
            placeholder="Search for food"
          />
        </div>
      </div>
      <div v-if="!this.isSearch">
        <div class="promo-today">
          <h1>Promo Today</h1>
          <div class="promo-today-slide">
            <div v-for="food in promo" :key="food.id">
              <div class="sliding-post">
             <router-link :to="'ViewFood/' + food.uuid">
                <div class="product_img">
                  <img :src="food.image_url" />
                </div>
                <div class="food-details">
                  <p class="food-name">{{ food.name }}</p>
                  <p class="food-price">
                    &#8358; {{ food.discount_price }}
                    <span
                      class="food-price-big"
                    >&#8358; {{ food.price }}</span>
                  </p>
                  <p class="food-time">{{getPostTime(food.updated_at)}}</p>
                </div>
              </router-link>
            </div>
            </div>


          </div>
        </div>

        <div>
          <b-card no-body>
            <b-tabs card class="okike-tab-card">
              <b-tab
                v-for="data in category"
                :key="data.uuid"
                no-body
                :title="data.name"
                class="abacha-tab"
              >
                <div class="food-promo-today" :id="data.name">
                  <div class="promo-today-slide" v-if="data.foods.length > 0">
                    <div v-for="food in data.foods" :key="food.uuid" class="sliding-post">
                      <router-link :to="'ViewFood/' + food.uuid">
                        <div class="product_img">
                          <img :src="food.image_url" />
                        </div>
                        <div class="food-details">
                          <p class="food-name">{{ food.name }}</p>
                          <p class="food-price">
                            &#8358; {{ food.discount_price }}
                            <span
                              class="food-price-big"
                            >&#8358; {{ food.price }}</span>
                          </p>
                          <p class="food-time">{{getPostTime(food.updated_at)}}</p>
                        </div>
                      </router-link>
                    </div>
                  </div>

                  <div class="promo-today-slide" v-if="data.foods.length === 0">
                    <p class="food-name text-center">No Data</p>
                  </div>
                </div>
              </b-tab>
            </b-tabs>
          </b-card>
        </div>
      </div>

      <div v-else class="promo-today">
        <h1>Search Result</h1>
      <div  class="food-promo-today">

        <div class="promo-today-slide">

          <div v-for="food in search_result" :key="food.uuid" class="sliding-post">
            <router-link :to="'ViewFood/' + food.uuid">
              <div class="product_img">
                <img :src="food.image_url" />
              </div>
              <div class="food-details">
                <p class="food-name">{{ food.name }}</p>
                <p class="food-price">
                  &#8358; {{ food.discount_price }}
                  <span
                    class="food-price-big"
                  >&#8358; {{ food.price }}</span>
                </p>
                <p class="food-time">{{getPostTime(food.updated_at)}}</p>
              </div>
            </router-link>
          </div>
        </div>
      </div>
      </div>
      <div class="pb-5"></div>
      <div class="fixed-bottom landing-footer">
        <div class="floating-menu-footer container">
          <div class="menu-float ">
            <router-link to="Delicacies"><img src="../../assets/images/okike-menu.svg"></router-link>
          </div>

          <div class="cart-float">
            <router-link to="Cart">
              <img class="cart-btn" src="../../assets/images/okike-cart.svg" />
              <sup class="cart-count">{{getCartCount()}}</sup>
            </router-link>
          </div>
        </div>
      </div>
    </div>
    <!--</div>-->
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import moment from "moment";
// import router from "../../router";
import { category } from "../../services/category.service";
import { search } from "../../services/search.service";
import { food } from "../../services/food.service";

export default {
  name: "Landing",
  isActive: true,

  data: function() {
    return {
      isLoading: false,
      user: [],
      category: [],
      query: "",
      isSearch: false,
      search_result: {},
      promo: {}
    };
  },
  computed: {
    // ...mapActions({user: 'GET_USER'}),
    ...mapGetters({ basket: "GET_CART" })
  },
  created() {
    this.user = this.$store.getters.GET_USER;
    this.fetchCategory();
    this.fetchPromo();
  },
  mounted(){
    this.checkUser();
  },
  methods: {
    async fetchCategory() {
      this.isLoading = true;
      await category
        .fetch()
        .then(res => {
          this.isLoading = false;
          this.category = res.data;
        })
        .catch(err => {
          this.isLoading = false;
          this.$toast.error(err.message);
        });
    },

    async fetchPromo(){
      this.isLoading = true;
      await food.promo().then((res)=>{
        this.promo = res
      }).catch((err)=> {
        console.log(err)
      })
    },

    async searchFood() {
      this.isLoading = true;
      if (this.query.length > 0){
        await search
        .food(this.query)
        .then(res => {
          console.log(res)
          this.isSearch = true;
          this.search_result = res;
        })
        .catch(err => {
          console.log(err);
        });
      }
      else{
        this.isSearch = false;
      }

    },

    checkUser(){
      let name = this.user.username;
      let location = this.user.location;

      // if(!location){
      //    this.$router.go("/Location")

      // }

      // if (!name){
      //    this.$router.go("/Username")
      // }
    },

    getPostTime(value) {
      if (value) {
        return moment(String(value)).format("hh:mm a");
      }
    },

    getCartCount() {
      return Object.keys(this.basket).length;
    }
  }
};
</script>

<style scoped>
    a{
        text-decoration: none;
        /*color: #000000;*/
    }
    a:hover, a:focus, a:active{
        text-decoration: none;
    }
body {
  background: #f3f5f7 !important;
}
.red {
  background: red;
}

.blue {
  background: blue;
}

.div {
  width: 100px;
  height: 100px;
  display: inline-block;
  border: 1px solid black;
}

.abacha-tab {
  text-decoration: none;
  color: #000000;
}
.floating-menu-footer {
  display: flex;
  justify-content: space-between;
  padding-bottom: 1rem;
  width: 100%;
}

.menu-btn {
  /*width: 64px;*/
  /*height: 64px;*/
  /*border-radius: 50%;*/
}

.cart-btn {
  /*width: 64px;*/
  /*height: 64px;*/
}
</style>
