<template>
    <div class="okike-verify">
        <div class="okike-verify-inner">
            <div class="container okike-verify-inner2">
                <div class="back-btn">
                    <a @click="$router.go(-1)"><img src="../../assets/images/back-btn.svg" ></a>
                </div>

                <div class="verify-title">
                    <h3>Create a PIN</h3>
                    <p>We also secure your orders while<br> you place them.</p>
                </div>
                <div class="locations">
                    <div class="verify-number">
                        <input class="verify-input" type="password" name="pin" v-model="pin" placeholder="PIN" required>
                        <input class="verify-input" type="password" name="repeat" v-model="repeat" placeholder="Repeat PIN" required>
                        <button class="verify-btn" v-if="pin === repeat && !isLoading" @click="onSubmit">Create PIN</button>
                        <button class="verify-btn" v-if="pin === repeat && isLoading">
                          <div style="margin: 0 auto;">
                            <half-circle-spinner
                              :animation-duration="1000"
                              :size="60"
                              color="#252525"
                            />
                          </div>
                        </button>
                    </div>
                    <div class="text-center">
                        <img src="../../assets/images/key-lock.svg">
                    </div>
                    <div class="createpin-text">
                        <p>Your transactions are secure</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {onboard} from "../../services/onboarding.service";
    import {HalfCircleSpinner} from 'epic-spinners'
    import router from "../../router";


    export default {
        name: "CreatePin",
      components:{
        HalfCircleSpinner
      },
      data: function () {
        return {
          pin: '',
          repeat: '',
          isLoading: false,
        };
      },
      methods: {
        async onSubmit() {
          if(this.pin === '' || this.repeat === ''){
            return this.$toast.info('Kindly set a pin')
          }
          this.isLoading = true;
          await onboard.addPin(this.pin).then((res) => {
            console.log(res);
            this.isLoading = false;
            router.push({path: `/Landing`})
          }).catch((err) => {
              this.isLoading = false;
              this.$toast.error(err.message)
            }
          );
        }
      }
    }
</script>

<style scoped>
    body{
        background-color: #252525;
    }

</style>
