<template>
    <div class="okike-splash">
        <div></div>
        <div>
            <router-link to="Splash2"> <img src="../../assets/images/okike-logo.svg"></router-link>
        </div>
        <div class="foot-note">
            <p>Okike Foods Limited</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Splash.vue",
        created(){
            setTimeout( () => this.$router.push({ path: '/Splash2'}), 3000);

        }
    }
    // setTimeout(()=>{
    //     this.Splash()
    // },1000);
</script>

<style scoped>

</style>