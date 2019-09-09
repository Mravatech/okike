<template>
    <div class="wallet-balance-page">
        <div class="wallet-balance-inner">
            <div class="container wallet-balance-inner2">
                <div class="back-btn">
                    <a @click="$router.go(-1)"><img src="../../assets/images/back-btn2.svg" ></a>
                </div>
                <div class="customer-name">
                    <h4>Your Order was successful, <br>our dispatch rider is on his <br>way to you.</h4>
                </div>
                <div class="confirm_icons container">
                    <div class="confirm1">
                        <img src="../../assets/images/confirm1.svg" >
                    </div>
                    <div class="confirm2 floating">
                        <img src="../../assets/images/confirm2.svg" >
                    </div>
                    <div class="confirm1">
                        <img src="../../assets/images/confirm3.svg" >
                    </div>
                    <div class="confirm2 floating">
                        <img src="../../assets/images/confirm4.svg" >
                    </div>
                </div>
                <div class="coin-balance">
                    <p>Keep your Phone switched on, for your delivery is on the <br>way, and you will be contacted</p>
                </div>

                <div></div>

                <div class="">
                    <router-link to="Landing"><button class="addcash-btn">Return Home</button></router-link>
                </div>
                <div></div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Confirmation.vue"
    }
</script>

<style scoped>
    .back-btn{
        text-align: left;
        padding-top: 30px;
    }
    .addcash-btn{
        width: 100% !important;
    }
    .customer-name h4{
        font-family: Avenir-Heavy;
        font-size: 20px;
        color: #4A4A4A;
        letter-spacing: 0;
        text-align: center;
    }
    .coin-balance p{
        font-family: Avenir-Medium;
        font-size: 13px;
        color: #9B9B9B;
        letter-spacing: 0;
        text-align: center;
    }
    .confirm_icons{
        display: flex;
        justify-content: center;
        padding: 20px 5px;
    }
    .floating {
        animation-name: floating;
        animation-duration: 3s;
        animation-iteration-count: infinite;
        animation-timing-function: ease-in-out;
    }

    @keyframes floating {
        from { transform: translate(0,  0px); }
        65%  { transform: translate(0, 15px); }
        to   { transform: translate(0, -0px); }
    }
    .confirm1{
        padding: 0 5px;
        transform: translatey(0px);
        animation: float 6s ease-in-out infinite;
    }
    .confirm2{
        padding: 0 5px;
    }
    .add-money-btn img, .buy-food-btn img{
        width: 170px;
    }
    @keyframes float {
        0% {
            transform: translatey(0px);
        }
        50% {
            transform: translatey(-20px);
        }
        100% {
            transform: translatey(0px);
        }
    }

</style>