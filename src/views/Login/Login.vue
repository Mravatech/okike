<template>
    <div class="login-section">
        <div class="container">
            <div class="login-page">
                <div></div>
                <div>
                    <div class="logo_okike pb-5">
                        <img src="../../assets/images/okike-logo-white-sm.svg">
                    </div>
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
                                   erase-style=''
                                   :erase-on-complete='false'
                                   caret-animation='blink'>
                        </vue-typer>
                    </div>
                    <div class="pt-5">
                        <router-link to="Verify">
                            <button class="login-with-btn" >LOGIN WITH PHONE NUMBER</button>
                        </router-link>
                    </div>
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
