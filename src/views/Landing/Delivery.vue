<template>
  <div class="add-cash-card-page">
    <div class="container add-cash-card-page-inner">
      <div class="back-btn">
        <a @click="$router.go(-1)"><img src="../../assets/images/back-btn2.svg" ></a>
      </div>
      <div class="add-cash-card">
        <h3>Delivery Address</h3>
        <p>Where should we deliver your order?</p>
      </div>
      <div class="mastercard_flex">
        <div class="mastercard-input-box">

          <div class="mb-4">
            <div class="select_state">Select State *</div>
            <!--<input class="change-pin-input" type="text" placeholder="Select Location">-->
            <div class="">
              <select class="change-pin-input" v-model="delivery.state">
                <option value="lagos" class="state_option">Lagos</option>
                <option value="enugu" class="state_option">Enugu</option>
                <option value="abuja" class="state_option">Abuja</option>
              </select>
            </div>
          </div>
          <div class="mb-4">
            <div class="select_state">Address/Location *</div>
            <input class="change-pin-input mb-2" type="text" placeholder="Address" v-model="delivery.address">
            <input class="change-pin-input" type="text" placeholder="Local Government" v-model="delivery.lga">
          </div>

          <div class="mb-4" v-if="isNotUser">
            <div class="select_state">Phone Number</div>
            <input class="change-pin-input" type="number" placeholder="090012345678" v-model="delivery.phone">
          </div>
          <div class="mb-4" v-else>
              <span @click="setIsUser()">Not ordering for yourself??</span>

          </div>
          <div class="">
            <button class="addcash-btn" @click="checkout()">Submit</button>
          </div>
        </div>
        <div class="pw-key">

        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
import { order } from "../../services/order.service";
import router from '../../router';
  export default {
    name: "Delivery.vue",
    computed:{
      ...mapGetters({user: 'GET_USER', basket: 'GET_CART'}),
      ...mapMutations({clear_cart : 'CLEAR_CART'})
    },
    methods:{


      async checkout() {
         for await (const element of this.basket) {
           const data = {
             'orders': JSON.stringify(element.orders),
             'total': element.totalAmount,
             'address': JSON.stringify(this.delivery),
           }
           await order.make(data).then((res)=> {

           }).catch((err) => {
           })

         };
          this.clear_cart
         router.push({name : 'Confirmation'})
      },
      setIsUser(){
        this.isNotUser = true
      },
    },
    data(){
        return {
          delivery:{
            state : '',
            address: '',
            lga : '',
            phone: '',
          },
          isNotUser: false
        };
    },
    mounted() {
      this.delivery.phone = this.user.phone_number
    }
  }

</script>

<style scoped>
  .back-btn{
    text-align: left;
    padding: 30px 0;
  }
  .change-pin-input{
    background: #D8D8D8;
    border: none;
    border-radius: 35px;
    font-family: Avenir-Roman;
    font-size: 19px;
    color: #4A4A4A;
    letter-spacing: 0;
    width: 100%;
    padding: 15px 20px;
  }
  .select_state{
    font-family: Avenir-Roman;
    font-size: 16px;
    color: #000000;
    font-weight: 800;
    padding-bottom: 7px;
  }
  .state_option{
    color: #ffffff;
    padding: 10px;
  }

.addcard-btn {
  border: none;
  width: 100%;
  border-radius: 35px;
  font-family: Montserrat-Medium;
  color: #252525;
  letter-spacing: 0;
  text-align: center;
  padding: 1rem 2rem;
  margin-bottom: 10px;
}
</style>
