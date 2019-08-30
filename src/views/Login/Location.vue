<template>
    <div class="okike-verify">
        <div class="okike-verify-inner">
            <div class="container okike-verify-inner2">
                <div class="back-btn">
                    <a @click="$router.go(-1)"><img src="../../assets/images/back-btn.svg" ></a>
                </div>

                <div class="verify-code-title">
                    <h3>You’re almost there.</h3>
                    <p>Finally, let us know where you are and <br>we’ll, deliver straight to your doorstep.</p>
                </div>
                <div class="locations">
                    <div class="verify-number">
                        <div class="enter-location" @click="onSubmit(data.uuid)" v-for="data in location" :key="data.uuid">
                            <div class="verify-input-location">{{ data.name }}<br><span class="location-hashtag">{{ data.tag }}</span></div>
                            <img src="../../assets/images/location.svg" >
                        </div>
                    </div>
                    <div class="abacha-everywhere">
                        <p>#AbachaEverywhere</p>
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
        name: "Location.vue",
      data: function () {
        return {
          location: [],
          isLoading: false
        };
      },
      created(){
          this.fetchLocation();
      },
      methods: {
        async fetchLocation() {
          this.isLoading = true;
          await onboard.fetchLocations().then((res) => {
            console.log(res);
            this.isLoading = false;
            this.location = res;
            // router.push({path: `/Location`})
          }).catch((err) => {
              this.isLoading = false;
              this.$toast.error(err.message)
            }
          );
        },
        async onSubmit(uuid) {
          this.isLoading = true;
          await onboard.addLocation(uuid).then((res) => {
            console.log(res);
            this.isLoading = false;
            router.push({path: `/Username`})
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

</style>
