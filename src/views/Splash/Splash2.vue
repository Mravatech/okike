<template>
    <div class="okike-splash2">
        <div class="okike-splash2-inner">
            <div class="container okike-splash2-inner2">
                <div></div>
                <div>
                    <router-link to="Splash3"><img src="../../assets/images/okike-logo-white.svg"></router-link>
                </div>
                <div class="explore-txt">
                    <h3>Explore your <br><b>African Taste</b>, <br>From the tips of <br>your <b>fingers</b></h3>
                </div>
                <div class="foot-note-2">
                    <p><router-link to="Splash2"><font-awesome-icon icon="circle" class="fontawesom"/></router-link>
                        <router-link to="Splash3"><font-awesome-icon icon="circle" class="fontawesom1"/></router-link>
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Splash2.vue",
        created(){
            setTimeout( () => this.$router.push({ path: '/Splash3'}), 3000);

        }
    }
</script>

<style scoped>

</style>