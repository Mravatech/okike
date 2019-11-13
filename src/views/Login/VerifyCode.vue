<template>
  <div class="okike-verify">
    <div class="okike-verify-inner">
      <div class="container okike-verify-inner2">
        <div class="back-btn">
          <a @click="$router.go(-1)">
            <img src="../../assets/images/back-btn.svg" />
          </a>
        </div>

        <div class="verify-title">
          <h3>
            Verify phone number
            <br />
            <b>{{ getNumber($route.params.phone) }}</b>
          </h3>
          <p>
            Please enter the activation code
            <br />sent via SMS.
          </p>
        </div>
        <div class="verify-number">
          <input
            class="verify-input2"
            name="text"
            placeholder="Activation Code"
            required
            type="number"
            v-model="otp"
          />
          <button class="verify-btn" v-if="isLoading">
            <div style="margin: 0 auto;">
              <half-circle-spinner :animation-duration="1000" :size="60" color="#252525" />
            </div>
          </button>
          <button @click="onSubmit" class="verify-btn" v-if="!isLoading">Verify Number</button>
          <button @click="tryAgain" class="verify-btn mt-5" v-if="!isLoading">Send Otp Again</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import router from "../../router";
import { HalfCircleSpinner } from "epic-spinners";
import { mapActions } from "vuex";
import { onboard } from "../../services/onboarding.service";
import {ApiService} from "../../services/api.service";


export default {
  name: "VerifyCode",
  components: {
    HalfCircleSpinner
  },
  data: function() {
    return {
      otp: "",
      isLoading: false
    };
  },

  methods: {
    ...mapActions({ loginUser: "LOGIN" , autho: 'AUTHORISE_USER'}),
    getNumber(e) {
      this.phone_number = e;
      return e;
    },
    async onSubmit() {
      this.isLoading = true;

      await this.loginUser({ phone_number: this.phone_number, otp: this.otp })
        .then(function() {
          router.push({ name: "Location" });
        })
        .catch(error => {
          if (error.message) {
            this.$toast.error(error.message);
          } else if (error.error.message) {
            this.$toast.error(error.error.message);
          }
        });
      this.loading = false;
    },
    async tryAgain() {
      this.isLoading = true;
      await onboard
        .phoneNumber(this.phone_number)
        .then(res => {
          console.log(res)
          if (res.data) {
            if (res.data.hasOwnProperty("token")) {
              let token = res.data.token;
              this.autho(token)
                .then(function() {
                  router.push({ name: "Landing" });
                })
                .catch(error => {});
              ApiService.setHeader(token);
            } else {
              this.isLoading = false;
              router.push({ path: `/VerifyCode/${this.phone_number}` });
            }
          }

          if (res.error) {
            this.isLoading = false;
            this.$toast.error(res.error);
          }
          if (res.proceed) {
            router.push({ path: `/Landing` });
          } else {
            router.push({ path: `/VerifyCode/${this.phone_number}` });
          }
        })
        .catch(err => {
          console.log(err);
          this.isLoading = false;
          this.$toast.error("message string");
        });
    }
  }
};
</script>

<style scoped>
body {
  background-color: #252525;
}
.half-circle-spinner {
  margin: 0 auto !important;
}
</style>
