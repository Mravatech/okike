<template>
  <div class="add-cash-card-page">
    <div class="container add-cash-card-page-inner">
      <div class="upper-menu">
        <div class="back-btn">
          <a @click="$router.go(-1)">
            <img src="../../assets/images/back-btn2.svg" />
          </a>
        </div>
        <p>Add Cash by Bank Card</p>
      </div>
      <div class="mastercard_flex">
        <div class="mastercard-input-box">
          <p>Add cash through any of the existing bank cards or add multiple cards.</p>
          <div class="mb-3">
            <input
              class="mastercard-amount-input"
              v-model="amount"
              type="number"
              placeholder="Enter amount you want to fund"
            />
          </div>
          <div class>
            <paystack
              :amount="parseInt(amount.toString() + '00')"
              :email="email"
              :paystackkey="paystackkey"
              :reference="ref"
              :callback="callback"
              :close="close"
              :embed="false"
            >
              <button class="addcard-btn" :disabled="amount <= 0">Make Payment</button>
            </paystack>
            <!--            <router-link to="WalletBalance"><button class="addcash-btn">Add Card</button></router-link>-->
          </div>
        </div>
        <div class="add-money-foot">
          <div class="paystack_img">
            <p>100% secure, payment is being encrypted and processed by</p>
            <img src="../../assets/images/logo-paystack.png" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import paystack from "vue-paystack";
import { payment } from "../../services/payment.service";
import { mapGetters, mapActions } from "vuex";
import {onboard} from '../../services/onboarding.service';
import router from "../../router";

export default {
  name: "AddCash",
  components: {
    paystack
  },
  data() {
    return {
      paystackkey: "pk_test_aa5f479a9f5e5caf4bd9e0dcaf7a5838a195720f", //paystack public key
      email: "techissued@gmail.com", // Customer email
      amount: "",
      isLoading: false,
      ref: '',
    };
  },
  mounted() {

  },
  created() {

  },
  computed: {
    ...mapGetters({ user: "GET_USER" }),

  },
  methods: {
    ...mapActions({ autho: 'AUTHORISE_USER'}),
    async reference() {
      let text = "OKI";
      let possible =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

      for (let i = 0; i < 10; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));
      this.isLoading = true;

      await payment
        .check(text)
        .then(res => {

          this.isLoading = false;
          if (res.message) {
            this.ref = text;
          } else {
            return this.reference();
          }
        })
        .catch(err => {
          this.isLoading = false;
          this.$toast.error(err.message);
          return this.reference();
        });
    },
    async callback(response) {
      await payment
        .verify(response)
        .then(res => {

          this.isLoading = false;
          if (res.message) {
             this.$toast.success(res.message);
             onboard.phoneNumber(this.user.phone_number).then((resp) => {
                let token = resp.data.token;

                this.autho(token).then(function () {
                  router.go('-1');
                }).catch((error) => {

                })
              })
          } else {
            this.$toast.error(res);
          }
        })
        .catch(err => {
          this.isLoading = false;
          this.$toast.error(err.message);
          return this.reference();
        });
    },
    close: function() {
      console.log("Payment closed");
    }
  }
};
</script>

<style scoped>
.back-btn {
  text-align: left;
  padding: 30px 0;
}

.add-money-foot {
  padding-bottom: 1rem;
}
.paystack_img p {
  font-family: Avenir-Roman;
  font-size: 12px;
  letter-spacing: 0;
  text-align: center;
}
.paystack_img img {
  width: 95px;
}
.mastercard-amount-input {
  background: #ffffff;
  border: 2px solid #cccccc;
}

.addcard-btn {
  border: none;
  width: 100%;
  border-radius: 35px;
  font-family: Montserrat-Medium;
  font-size: 18px;
  color: #252525;
  letter-spacing: 0;
  text-align: center;
  padding: 1rem 2rem;
  margin-bottom: 10px;
}

.mastercard_flex {
  text-align: center;
}
.mastercard-input-box {
  margin-top: auto;
  margin-bottom: auto;
}
.upper-menu p {
  margin-top: auto;
  margin-bottom: auto;
  display: block;
  font-size: 20px;
  color: #aaaaaa;
}

.upper-menu {
  display: flex;
  justify-content: space-between;
}

.payButton {
  background: none;
}
</style>
