<template>
    <div class="okike-splash3">
        <div class="okike-splash3-inner">
            <div class="container okike-splash3-inner2">
                <div></div>
                <div class="cash-icons">
                    <img src="../../assets/images/cash-icons.svg">
                </div>
                <div class="explore-txt">
                    <h3>Explore your <br><b>African Taste</b>, <br>From the tips of <br>your <b>fingers</b></h3>
                </div>
                <div class="foot-note2">
                    <div class="typer-txt">
                        <vue-typer
                                :text='["#AbachaInLagos","#BoliInLagos","#PalmWineInLagos"]'
                                :repeat='Infinity'
                                :shuffle='false'
                                initial-action='typing'
                                :pre-type-delay='70'
                                :type-delay='70'
                                :pre-erase-delay='2000'
                                :erase-delay='250'
                                :erase-on-complete='false'
                                caret-animation='blink'
                        ></vue-typer>
                        <!--<vue-typed-js :strings="['#AbachaInLagos', '#BoliInLagos', '#PalmWineInLagos']" :loop="true" >-->
                            <!--<h4 class="typing"></h4>-->
                        <!--</vue-typed-js>-->

                    </div>
                    <div ><router-link to="Login"><img src="../../assets/images/next-btn.svg" class="bounce-1"></router-link></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Splash3.vue"
    }
</script>

<style scoped>

</style>
