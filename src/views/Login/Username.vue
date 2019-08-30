<template>
  <div class="okike-verify">
    <div class="okike-verify-inner">
      <div class="container okike-verify-inner2">
        <div class="back-btn">
          <a @click="$router.go(-1)"><img src="../../assets/images/back-btn.svg"></a>
        </div>

        <div class="verify-title">
          <h3>What should we call you?</h3>
          <p>Give us a name you’d like us to <br>call you.</p>
        </div>
        <div class="locations">
          <div class="verify-number">
            <input class="verify-input" name="text" placeholder="Username" required type="text" v-model="username">
            <button class="verify-btn" @click="onSubmit">Welcome to Okike</button>
          </div>
          <div class="text-center">
            <img src="../../assets/images/okike-logo-sm.svg">
          </div>
          <div class="abacha-everywhere">
            <p>#AbachaInLagos</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {onboard} from "../../services/onboarding.service";
  import router from "../../router";


  export default {
    name: "Username",
    data: function () {
      return {
        username: '',
        isLoading: false
      };
    },
    methods: {
      async onSubmit() {
        this.isLoading = true;
        await onboard.addUsername(this.username).then((res) => {
          console.log(res);
          this.isLoading = false;
          router.push({path: `/CreatePin`})
        }).catch((err) => {
          this.isLoading = false;
          this.$toast.error(err.message)
        });
      }
    },
  }
</script>

<style scoped>

</style>
