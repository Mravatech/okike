<template>
  <div class="food-history-page">
    <div class="container">
      <div class="upper-menu">
        <div class="back-btn">
          <a @click="$router.go(-1)">
            <img src="../../assets/images/back-btn2.svg" />
          </a>
        </div>
        <div class="addbankcard-btn">
          <img src="../../assets/images/refresh.svg" />
          <router-link to @click="getOrders()">
            <p>History</p>
          </router-link>
        </div>
      </div>
    </div>
    <div class>
      <div v-for="order in orders" :key="order.id" class="history-date-time">
        <div class="history-name">
          <h3>{{order.name}}</h3>
          <p class="history-date">{{order.date}}</p>
          <p class="history-address">{{order.address}}</p>
        </div>
        <div class="history-price">
          <h4>&#8358;{{order.price}}</h4>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { order } from "../../services/order.service";
import moment from 'moment';
export default {
  name: "History.vue",
  data() {
    return {
      orders: {}
    };
  },
  mounted() {
    this.getOrders()
  },
  computed: {},
  methods: {
    getOrders() {
      order
        .history()
        .then(res => {
          const result = res;
          this.orders = result.map((value, index) => {
            const address = JSON.parse(value.address)
            const dt = moment(String(value.created_at))
            return {
              'price' : value.price,
              'name' : JSON.parse(value.orders)[0].food,
              'address' : [address.address, address.lga].join(', '),
              'date' : dt,
            }
          });

        })
        .catch(err => {});
    }
  }
};
</script>

<style scoped>
.upper-menu {
  padding: 1.5rem 0;
  border-bottom: 1px solid #d8d8d8;
}
a {
  text-decoration: none;
  color: #000000;
  font-family: Avenir-Heavy;
  font-size: 22px;
  letter-spacing: 0;
}
.addbankcard-btn {
  padding-top: 7px;
  display: flex;
}
.addbankcard-btn p {
  padding-top: 8px;
  padding-left: 5px;
  margin-bottom: 0;
}
.history-date-time {
  display: flex;
  justify-content: space-between;
  padding: 1rem 0;
}
.history-date-time2 {
  display: flex;
  justify-content: space-between;
  background-color: #f4f4f4;
  padding: 1rem 0;
}
.history-name {
  padding-left: 15px;
}
.history-name h3 {
  font-family: Avenir-Medium;
  font-size: 20px;
  color: #000000;
  letter-spacing: 0;
  margin-bottom: 0;
}
.history-date {
  font-family: Avenir-Book;
  font-size: 12px;
  color: #4a4a4a;
  letter-spacing: 0;
  margin-bottom: 0;
}
.history-address {
  font-family: Avenir-Book;
  font-size: 14px;
  color: #000000;
  letter-spacing: 0;
  margin-bottom: 0;
}
.history-price {
  padding: 15px;
}
.history-price h4 {
  font-family: LucidaGrande;
  font-size: 19px;
  color: #3aa08e;
  letter-spacing: 0;
  margin-bottom: 0;
}
</style>
