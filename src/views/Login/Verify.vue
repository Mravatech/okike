<template>
  <div class="okike-verify">
    <div class="okike-verify-inner">
      <div class="container okike-verify-inner2">
        <div class="back-btn">
          <a @click="$router.go(-1)"><img src="../../assets/images/back-btn.svg"></a>
        </div>

        <div class="verify-title">
          <h3>Hi, we need your phone number to get started.</h3>
          <p>An activation code will be sent to you<br> for verification.</p>
        </div>
        <div class="verify-number">
          <input class="verify-input" name="number" placeholder="E.g 0801 234 5678" required type="number"
                 v-model="phone_number">
          <button class="verify-btn" v-if="isLoading">
            <div style="margin: 0 auto;">
              <half-circle-spinner
                :animation-duration="1000"
                :size="60"
                color="#252525"
              />
            </div>
          </button>
          <button v-if="!isLoading" @click="onSubmit" class="verify-btn">Verify Number</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {onboard} from '../../services/onboarding.service'
  import router from "../../router";
  import {HalfCircleSpinner} from 'epic-spinners'
  import {mapActions} from "vuex";
  import {ApiService} from "../../services/api.service";


  export default {
    name: "Verify",
    components: {
      HalfCircleSpinner
    },
    data: function () {
      return {
        phone_number: '',
        isLoading: false,
      };
    },

    methods: {
      ...mapActions({autho: 'AUTHORISE_USER'}),
      async onSubmit() {
        this.isLoading = true;
        if(this.phone_number === ''){
          this.isLoading = false;
          return  this.$toast.error('Please enter your phone number');
        }
        if(this.phone_number.length < 11){
          this.isLoading = false;
          return  this.$toast.error('Please enter a valid phone number');
        }
        await onboard.phoneNumber(this.phone_number).then((res) => {
          if(res.data) {
            if(res.data.hasOwnProperty('token')){
              let token =res.data.token;
              this.autho(token).then(function () {
                router.push({name: 'Landing'});
              }).catch((error) => {

              })
              ApiService.setHeader(token);
            }
            else{
              this.isLoading = false;
              router.push({path: `/VerifyCode/${this.phone_number}`})
            }

          }

          if(res.error){
            this.isLoading = false;
            this.$toast.error(res.error)
          }
          if(res.proceed){
            router.push({path: `/Landing`})
          } else {
            router.push({path: `/VerifyCode/${this.phone_number}`})
          }
        }).catch((err) => {
          console.log(err)
          this.isLoading = false;
          this.$toast.error('message string')
        });

      }
    }
  }
</script>

<style scoped>
    body{
        background-color: #252525;
    }
  .half-circle-spinner{
    margin: 0 auto !important;
  }

</style>
