<template>
  <div class="add-cash-card-page">
    <div class="container add-cash-card-page-inner">
      <div class="back-btn">
        <a @click="$router.go(-1)"><img src="../../assets/images/back-btn2.svg" ></a>
      </div>
      <div class="add-cash-card">
        <h3>Add Cash by Bank Card</h3>
        <p>Add cash through any of the existing
          <br>Bank Cards or add multiple cards.</p>
      </div>
      <div class="mastercard_flex">
        <div class="mastercard-input-box">
<!--          <div class="mastercard_dropdown">-->
<!--              <select name="" id="" class="mastercard-input">-->
<!--                  <option value="mastercard">MASTERCARD***2345</option>-->
<!--                  <option value="visacard">VISACARD***2345</option>-->
<!--                  <option value="vervecard">VERVECARD***2345</option>-->
<!--              </select>-->
<!--            <img src="../../assets/images/dropdown.svg" >-->
<!--          </div>-->
          <div class="mb-3">
            <label class="pl-3">Amount</label><br>
            <input class="mastercard-amount-input" v-model="amount" type="number" placeholder="N 0.00">
          </div>
<!--          <div class="mb-3">-->
<!--            <input class="mastercard-amount-input" type="number" placeholder="PIN">-->
<!--            <p class="pin_txt">Input Okike Pin</p>-->
<!--          </div>-->
          <div class="">
            <paystack
              :amount="parseInt(amount.toString() + '00')"
              :email="email"
              :paystackkey="paystackkey"
              :reference="ref"
              :callback="callback"
              :close="close"
              :embed="false"
            >
<!--              <i class="fas fa-money-bill-alt"></i>-->
              <button class="addcash-btn">  Make Payment </button>
            </paystack>
<!--            <router-link to="WalletBalance"><button class="addcash-btn">Add Card</button></router-link>-->
          </div>
        </div>
        <div class="pw-key">
          <img src="../../assets/images/pw-key.svg" >
          <p>100% secure, payment is being encrypted and processed by</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import paystack from 'vue-paystack';
  import {payment} from "../../services/payment.service";

  export default {
    name: "AddCash",
    components: {
      paystack
    },
    data(){
      return{
        paystackkey: "pk_test_aa5f479a9f5e5caf4bd9e0dcaf7a5838a195720f", //paystack public key
        email: "techissued@gmail.com", // Customer email
        amount: 0,
        user: {},
        isLoading: false,
        ref:  ''
      }
    },
    created(){
      this.user = this.$store.getters.GET_USER;
      this.reference();
    },
    computed: {

    },
    methods: {
      async reference(){
        let text = "OKI";
        let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

        for( let i=0; i < 10; i++ )
          text += possible.charAt(Math.floor(Math.random() * possible.length));
        this.isLoading = true;

        await payment.check(text).then((res) => {
          console.log(res);
          this.isLoading = false;
          if(res.message){
            this.ref = text;
          } else {
            return this.reference();
          }
        }).catch((err) => {
            this.isLoading = false;
            this.$toast.error(err.message)
          return this.reference();
          }
        );
      },
      async callback(response){
        console.log(response);
        // response['amount'] = this.amount;
        console.log(response);
        await payment.verify(response).then((res) => {
          console.log(res);
          this.isLoading = false;
          if(res.message){
            this.ref = text;
          } else {
            return this.reference();
          }
        }).catch((err) => {
            this.isLoading = false;
            this.$toast.error(err.message)
            return this.reference();
          }
        );
      },
      close: function(){
        console.log("Payment closed")
      }
    }
  }
</script>

<style scoped>
  .back-btn{
    text-align: left;
    padding: 30px 0;
  }

</style>
