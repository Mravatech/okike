<template>
    <div class="login-section">
        <div class="container">
            <div class="login-page">
                <div></div>
                <img src="../../assets/images/okike-logo-white-sm.svg">
                <div class="abacha-text">
                    <vue-typer class="abacha-txt"
                            :text='["#AbachaInLagos","#BoliInLagos","#PalmWineInLagos"]'
                            :repeat='Infinity'
                            :shuffle='false'
                            initial-action='typing'
                            :pre-type-delay='70'
                            :type-delay='70'
                            :pre-erase-delay='2000'
                            :erase-delay='250'
                            :erase-on-complete='false'
                            caret-animation='blink'>

                    </vue-typer>
                <!--<vue-typed-js :strings="['#AbachaInLagos', '#BoliInLagos', '#PalmWineInLagos']" :loop="true" >-->
                    <!--<h4 class="typing abacha-txt"></h4>-->
                <!--</vue-typed-js>-->
                </div>
                <div class="">
                    <router-link to="Verify"><button class="login-with-btn" >LOGIN WITH PHONE NUMBER</button></router-link>
<!--                    <div class="login-social">-->
<!--                        <button class="login-with-btn2" >LOGIN WITH</button>-->
<!--                        <img src="../../assets/images/dot.svg">-->
<!--                        <div class="social_icon">-->
<!--                            <div class="fb">-->
<!--                                <font-awesome-icon :icon="{ prefix: 'fab', iconName: 'facebook-f' }" class="social"/>-->
<!--                            </div>-->
<!--                            <div class="fb">-->
<!--                                <font-awesome-icon :icon="{ prefix: 'fab', iconName: 'twitter' }" class="social"/>-->
<!--                            </div>-->
<!--                        </div>-->
<!--                    </div>-->
                </div>

                <div class="need-help">
                    <img src="../../assets/images/need-help.svg">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Login"
    }
</script>

<style scoped>

</style>
