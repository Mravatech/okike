<template>
    <div class="wallet-balance-page">
        <div class="wallet-balance-inner">
            <div class="container wallet-balance-inner2">
                <div class="back-btn">
                    <a @click="$router.go(-1)"><img src="../../assets/images/back-btn2.svg" ></a>
                </div>
                <div class="customer-name">
                    <h4>Emeka Seyi</h4>
                    <h4><b>08000000000</b></h4>
                </div>
                <div class="coin-balance">
                    <p>Your Wallet & Coin Balance</p>
                    <h1><span class="balance-naira">&#8358;</span>120,525<span class="balance-kobo">.00</span></h1>
                    <div class="coin-amount">
                        <p><img src="../../assets/images/coin.svg" > 567,899</p>
                    </div>
                </div>

                <div></div>

                <div class="add-money-foot">
                    <div class="add-money-btn">
                        <router-link to="AddBankCard"><img src="../../assets/images/add-money-btn.svg" ></router-link>
                    </div>
                    <div class="buy-food-btn">
                        <router-link to="Delivery"><img src="../../assets/images/buy-food-btn.svg" ></router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "WalletBalance.vue"
    }
</script>

<style scoped>
    .back-btn{
        text-align: left;
        padding-top: 30px;
    }
    .customer-name h4{
        font-family: Avenir-Heavy;
        font-size: 25px;
        color: #4A4A4A;
        letter-spacing: 0;
        text-align: center;
    }
    .coin-balance p{
        font-family: Avenir-Roman;
        font-size: 19px;
        color: #000000;
        letter-spacing: 0;
    }
    .balance-naira{
        font-family: Avenir-Heavy;
        font-size: 30px;
        color: #4A4A4A;
        letter-spacing: 0;
    }
    .coin-balance h1{
        font-family: Avenir-Heavy;
        font-size: 46px;
        color: #4A4A4A;
        letter-spacing: 0;
    }
    .balance-kobo{
        font-family: Avenir-Heavy;
        font-size: 30px;
        color: #4A4A4A;
        letter-spacing: 0;
    }
    .coin-amount p{
        font-family: Avenir-Medium;
        font-size: 25px;
        color: #4A4A4A;
        letter-spacing: 0;
        text-align: center;
    }

    .add-money-foot{
        display: flex;
        justify-content: space-between;
        padding-bottom: 20px;
    }
    .add-money-btn img, .buy-food-btn img{
        width: 170px;
    }

</style>