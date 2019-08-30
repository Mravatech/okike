<template>
    <div class="add-card-page">
        <div class="container">
            <div class="upper-menu">
                <div class="back-btn">
                    <a @click="$router.go(-1)"><img src="../../assets/images/back-btn2.svg" ></a>
                </div>
                <div class="addcard-btn">
                    <router-link to="AddBankCard"><img src="../../assets/images/add-card.svg" ></router-link>
                </div>
            </div>
            <div class="add-remove-card">
                <h3>Add or Remove Card</h3>
                <p>To be able to pay, add your card to<br> fund Wallet</p>
            </div>
            <div class="">
                <div class="visa_card">
                    <div class="atm-card-number">
                        <p>****1234</p>
                    </div>
                    <img src="../../assets/images/visa-card.jpg" >
                </div>
                <div class="verve_card">
                    <div class="atm-card-number">
                        <p>****1234</p>
                    </div>
                    <img src="../../assets/images/verve-card.jpg" >
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "MyCard.vue"
    }
</script>

<style scoped>
    .upper-menu{
        padding: 1.5rem 0;
    }
    .add-remove-card{
        padding: 1rem 0;
    }
    .add-remove-card h3{
        font-family: Avenir-Heavy;
        font-size: 25px;
        color: #000000;
        letter-spacing: 0;
    }
    .add-remove-card p{
        font-family: Avenir-Roman;
        font-size: 19px;
        color: #4A4A4A;
        letter-spacing: 0;
        margin-bottom: 0;
    }
    .visa_card{
        width: 100%;
        margin-bottom: 20px;
    }
    .visa_card img{
        width: 100%;
    }
    .verve_card{
        width: 100%;
    }
    .verve_card img{
        width: 100%;
    }
    .atm-card-number{
        position: absolute;
        z-index: 1;
        padding: 27% 0 0 61%;
    }
    .atm-card-number p{
        font-family: Montserrat-SemiBold;
        font-size: 24px;
        color: #FFFFFF;
        letter-spacing: 0.5px;
        margin-bottom: 0;
    }

</style>