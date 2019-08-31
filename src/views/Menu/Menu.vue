<template>
    <div class="menu-page animated">
        <div class="nav-left">
            <div class="menu-btn">
                <a @click="$router.go(-1)"><img src="../../assets/images/menu_btn.svg" ></a>
            </div>
        </div>
        <div class="nav-right">
            <div class="nav-right-inner">
                <div class="menu-top-right">
                    <router-link to="WalletBalance"><div class="wallet_bal">
                        <img src="../../assets/images/wallet.svg" >
                        <p>Wallet<br>Balance</p>
                    </div></router-link>
                    <div class="wallet-amount">
                        <h3>₦120,525.00</h3>
                        <p> <img src="../../assets/images/coin2.svg" > 567,899</p>
                    </div>
                </div>
                <div class="menu-nav-tabs">
                    <!--<div class="menu-nav-tab">-->
                        <!--<img src="../../assets/images/naira-icon.svg" >-->
                        <!--<p>Add Cash</p>-->
                    <!--</div>-->
                    <div class="menu-nav-tab">
                        <!--<img src="../../assets/images/naira-icon.svg" >-->
                        <!--<p>Add Cash</p>-->
                        <b-button v-b-modal.modal-center class="menu-button "><img src="../../assets/images/naira-icon.svg"> <p >Add Cash</p></b-button>

                        <b-modal id="modal-center" hide-footer hide-header centered class="fixed-bottom">
                            <h4 class="add_cash_title">Add Cash</h4>
                            <router-link to="MyCard"><div class="my-card-bg">
                                <div><img src="../../assets/images/card-green.svg"></div>
                                <div>
                                    <h5>MASTERCARD***2345</h5>
                                    <h6>Use your ATM/Banks Card or Add a New Card</h6>
                                </div>
                            </div></router-link>
                            <router-link to="AddCashQuickteller"><div class="my-profile">
                                <div><img src="../../assets/images/quickteller.svg"></div>
                                <div>
                                    <p>Add Cash by Quickteller</p>
                                </div>
                            </div></router-link>
                            <router-link to="BankTransfer"><div class="my-profile2">
                                <div><img src="../../assets/images/banktransfer.svg"></div>
                                <div>
                                    <p>Bank Transfer & Cash Deposit</p>
                                </div>
                            </div></router-link>
                        </b-modal>
                    </div>
                    <router-link to="MyCard"><div class="menu-nav-tab">
                        <img src="../../assets/images/card-icon.svg" >
                        <p>My Card</p>
                    </div></router-link>
                    <router-link to=""><div class="menu-nav-tab">
                        <img src="../../assets/images/star-icon.svg" >
                        <p>Reward Account</p>
                    </div></router-link>
                    <router-link to="Invite"><div class="menu-nav-tab">
                        <img src="../../assets/images/users-icon.svg" >
                        <p>Invite Friends</p>
                    </div></router-link>
                    <router-link to="History"><div class="menu-nav-tab">
                        <img src="../../assets/images/history-icon.svg" >
                        <p>History</p>
                    </div></router-link>
                    <router-link to="Settings"><div class="menu-nav-tab">
                        <img src="../../assets/images/settings-icon.svg" >
                        <p>Settings</p>
                    </div></router-link>
                </div>
                <div class="fixed-bottom">
                    <div class="logout-footer">
                        <div class="logout">
                            <img src="../../assets/images/logout.svg" >
                            <button class="logout-btn">Logout</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Menu.vue"
    }
</script>

<style scoped>
    .menu-button{
        border: none;
        background: none;
        display: flex;
        padding-left: 0 !important;
    }
    .menu-button:hover, .menu-button:focus, .menu-button:active{
        border: none;
        background: none;
        display: flex;
    }
    .modal.show .modal-dialog {
        -webkit-transform: none;
        transform: none;
        align-items: flex-end !important;
    }
    .add_cash_title{
        font-family: Avenir-Heavy;
        font-size: 24px;
        color: #000000;
        letter-spacing: 0;
        margin-bottom: 0;
        padding: 1rem;
    }
    .my-card-bg{
        display: flex;
        padding: 10px;
        margin-bottom: 1rem;
        background: #F0F0F0;
        border-bottom: 1px solid #E2E2E2;
    }
    .my-card-bg img{
        padding-right: 1rem;
    }
    .my-card-bg h6{
        font-family: Avenir-Roman;
        font-size: 13px;
        color: #7C7C7C;
        letter-spacing: 0;
        margin-bottom: 0;
        padding-top: 10px;
    }
    .my-card-bg h5{
        font-family: Avenir-Black;
        font-size: 16px;
        color: #000000;
        letter-spacing: 0;
        margin-bottom: 0;
        padding-top: 10px;
    }
    .my-profile{
        display: flex;
        padding: 10px;
        margin-bottom: 1rem;
        border-bottom: 1px solid #E2E2E2;
    }
    .my-profile2{
        display: flex;
        padding: 10px;
        margin-bottom: 1rem;
    }
    .my-profile2 img{
        padding-right: 1rem;
    }
    .my-profile2 h5{
        font-family: Avenir-Black;
        font-size: 16px;
        color: #000000;
        letter-spacing: 0;
        margin-bottom: 0;
        padding-top: 10px;
    }

    .my-profile2 p{
        font-family: Avenir-Roman;
        font-size: 19px;
        color: #000000;
        letter-spacing: 0;
        margin-bottom: 0;
    }
    .my-profile img{
        padding-right: 1rem;
    }
    .my-profile h5{
        font-family: Avenir-Black;
        font-size: 16px;
        color: #000000;
        letter-spacing: 0;
        margin-bottom: 0;
        padding-top: 10px;
    }

    .my-profile p{
        font-family: Avenir-Roman;
        font-size: 19px;
        color: #000000;
        letter-spacing: 0;
        margin-bottom: 0;
    }

    a{
        text-decoration: none;
    }
    a:hover, a:active, a:focus{
        text-decoration: none;
    }
    .menu-page{
        width: 100%;
        height: 100vh;
        display: flex;
        /*-webkit-animation-timing-function: ease-in-out;*/
        /*animation-timing-function: ease-in-out;*/
        /*-webkit-animation-name: fadeInRight;*/
        /*animation-name: fadeInRight;*/
    }
    .nav-left{
        background: #ffffff;
        width: 20vh;
        height: 100vh;
    }
    .menu-btn{
        text-align: center;
        padding-top: 1.5rem;
    }
    .nav-right{
        background: #16A085;
        width: 80vh;
        height: 100vh;
    }
    .nav-right-inner{
        height: 100vh;
        background: url("../../assets/images/logo_menu_bg.png") bottom 0px right no-repeat;
        background-size: 240px 220px;
    }
    .menu-top-right{
        background: #1D6F61;
        color: #ffffff;
        display: flex;
        justify-content: space-between;
        padding: 1rem;
    }
    .wallet_bal{
        display: flex;
    }
    .wallet_bal p{
        font-family: Avenir-Heavy;
        font-size: 14px;
        color: #FFFFFF;
        letter-spacing: 0;
        line-height: 15px;
        margin-bottom: 0;
        padding: 8px 8px 0;
    }
    .wallet-amount h3{
        font-family: LucidaGrande-Bold;
        font-size: 18px;
        color: #FFFFFF;
        letter-spacing: 0;
        margin-bottom: 0;
    }
    .wallet-amount p{
        font-family: Avenir-Medium;
        font-size: 15px;
        color: #FFFFFF;
        letter-spacing: 0;
        text-align: right;
        margin-bottom: 0;
    }
    .menu-nav-tab{
        display: flex;
        padding: 1rem;
        color: #ffffff;
    }
    .menu-nav-tab img{
        padding-right: 1rem;
    }
    .menu-nav-tab p{
        font-family: Montserrat-Regular;
        font-size: 21px;
        color: #FFFFFF;
        letter-spacing: 0;
        margin-bottom: 0;
        padding-top: 2px;
    }
    .logout-footer{
        display: flex;
        justify-content: center;
        margin: 20% 0 5%;
    }
    .logout{
        display: flex;
        justify-content: center;
        padding: 10px;
        background: #FFFFFF;
        border-radius: 10px;
        /*transform: scaleX(-1);*/
        text-align: center;
        width: 165px;
        align-items: center;
    }
    .logout-btn{
        border: none;
        padding-left: 10px;
        width: 100%;
        font-family: Avenir-Black;
        font-size: 20px;
        color: #16A085;
        letter-spacing: 0;
        background: none;
    }

</style>