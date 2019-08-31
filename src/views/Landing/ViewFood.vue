<template>
    <div class="view-okike-food ">
        <div class="food-overlay">
            <div class="back-btn">
                <a @click="$router.go(-1)"><img src="../../assets/images/back-btn.svg" ></a>
            </div>
            <div class="food-title">
                <h3>{{ details.name || '' }}</h3>
            </div>

        </div>
        <div class="view-food-img">
            <img :src="details.image_url || '../../assets/images/boli_view.jpg'">
        </div>

        <div class="food-selection">
            <div class="food-name-price">
                <h3>{{ details.name || '' }}</h3>
                <h3>&#8358; {{ details.price || '' }}</h3>
            </div>
        </div>
        <div class="buy-combo">
            <p>{{ details.description || '' }}</p>
            <button class="buy-combo-btn" @click="addPrice(parseInt(details.price), 'combo', details.name, parseInt(details.price))">Buy Combo</button>
        </div>
        <div class="customize-food">
            <h4>Customize your Order</h4>
            <div class="customize-border" v-for="extra in details.extra">
                <div class="order-name-price">
                    <h3> {{ extra.name }}</h3>
                    <p>&#8358;{{ extra.price }}</p>
                </div>
                <div class="increase-order">
                    <integer-plusminus class="increase-order-number"
                                       @addPrice="addPrice"
                                       @removePrice="removePrice"
                                       :type="extra.uuid"
                                       :name="extra.name"
                                       :price="extra.price" :min="0" :max="99" :value="0"></integer-plusminus>
                </div>
            </div>
        </div>

        <div class="fixed-bottom bg-white">
            <div class="add-to-bag" @click="goToCheckOut">
<!--                <router-link to="Cart">-->
                    <div class="add-to-bag-bg">
                    <h3>&#8358; {{ totalAmount }}.<span class="">00</span></h3>
                    <div class="add-to-bag-inner">
                        <p>Add to Bag</p>
                        <img src="../../assets/images/btn-next.svg">
                    </div>
                </div>
<!--                </router-link>-->
            </div>
        </div>
    </div>
</template>

<script>
    import { IntegerPlusminus } from 'vue-integer-plusminus'
    import {food} from "../../services/food.service";
    import router from "../../router";

    export default {
        name: "ViewFood.vue",
        components: { IntegerPlusminus },
        data () {
            return {
                ipm_value: 0,
                ipm_min: 0,
                ipm_max: 99,
                ipm_step: 1,
                ipm_slot_decr: '-1',
                ipm_slot_incr: '+1',
                ipm_vertical: false,
                demo_slot_value: 0,
              isLoading: false,
              details: {},
              totalAmount: 0,
              orders: []
            }
        },
      props: ['uuid'],
       mounted() {
        console.log(this.uuid);
        this.isLoading = true;
         food.detail(this.uuid).then((res) => {
          this.isLoading = false;
          this.details = res;
          // router.push({path: `/Location`})
        }).catch((err) => {
            this.isLoading = false;
            this.$toast.error(err.message)
          }
        );
      },
      methods: {
        addPrice(price, type = 'combo', name = 'combo', quantity = 1, intPrice){
          if(!this.orders.some( obj => obj.type === 'combo')){
            let order = {
              price: parseInt(this.details.price),
              type: 'combo',
              name: 'combo',
              quantity: 1,
            };
            this.orders.push(order);
            this.totalAmount += parseInt(this.details.price);
          }


          if(type === 'combo'){
            let order = {
              price: parseInt(this.details.price),
              type: 'combo',
              name: 'combo',
              quantity: 1,
            };
            this.orders.push(order);
            this.totalAmount += parseInt(this.details.price);
          } else if(this.orders.some( obj => obj.type === type)){
            let objIndex = this.orders.findIndex((obj => obj.type === type));
            this.orders[objIndex].quantity = quantity;
            this.orders[objIndex].price = price;
            this.totalAmount += parseInt(intPrice);
          } else{
            let order = {
              price: price,
              type: type,
              name: name,
              quantity: quantity,
            };
            this.orders.push(order);
            console.log(intPrice);
            this.totalAmount += parseInt(intPrice);
          }
         console.log(this.orders);
        },

        removePrice(price, type = 'combo', name = 'combo', quantity = 1, intPrice){
          if(this.orders.some( obj => obj.type === type)){
            let objIndex = this.orders.findIndex((obj => obj.type === type));
            if(quantity !== 0) {
              this.orders[objIndex].quantity = quantity;
              this.orders[objIndex].price = price;
            }else{
              this.orders = this.orders.filter(order => order.type !== type);
            }
            this.totalAmount -= intPrice;
          }
          console.log(this.orders);
        },
        goToCheckOut(){
          if(this.orders.length === 0){
            this.$toast.info('No orders yet');
          }
          let data = {
            food: this.details,
            orders: this.orders,
            totalAmount: this.totalAmount
          };
          let ordersDetail = [];
          ordersDetail.push(data)
          console.log(ordersDetail);
          router.push({ name: 'Cart', params: {ordersDetail: ordersDetail}})
        }
      }
    }
</script>

<style lang="scss">

    .int-pm {
        &.increase-order-number {
            font-size: 18px;
            background-color: #f1f1f1;
            border-radius: 20px;
            .int-pm-value {
                background-color: #f1f1f1;
                color: #000000;
                font-size: 18px;
                padding: 0 20px !important;
                border: none;
                height: 45px;
            }
            .int-pm-btn {
                border: none !important;
                color: white;
            }
            .int-pm-increment {
                background: #7B7B7B !important;
                border-radius: 50% !important;
                width: 45px;
                height: 45px;
                font-size: 20px;
            }
            .int-pm-decrement {
                background: #ffffff !important;
                border: 2px solid #7B7B7B !important;
                border-radius: 50% !important;
                width: 45px;
                height: 45px;
                font-size: 20px;
            }
        }
    }
</style>

<style scoped>
.order-name-price{
    padding: 5px 15px;
}
.order-name-price h3{
    font-family: Avenir-Medium;
    font-size: 19px;
    color: #4A4A4A;
    letter-spacing: 0;
    margin-bottom: 0;
}
.order-name-price p{
    font-family: Avenir-Roman;
    font-size: 14px;
    color: #A7A7A7;
    letter-spacing: 0;
    margin-bottom: 0;
}
.increase-order{
    padding: 5px;
}


</style>
