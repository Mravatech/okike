<template>
    <div class="add-cash-card-page">
        <div class="container add-cash-card-page-inner">
            <div class="back-btn">
                <a @click="$router.go(-1)"><img src="../../assets/images/back-btn2.svg" ></a>
            </div>
            <div class="add-cash-card">
                <h3>Change PIN</h3>
                <p>We also secure your orders while you place them.</p>
            </div>
            <div class="mastercard_flex">
                <div class="mastercard-input-box">

                    <div class="mb-3">
                        <input class="change-pin-input" type="text" placeholder="Current PIN">
                    </div>
                    <div class="mb-3">
                        <input class="change-pin-input" type="text" placeholder="New PIN">
                    </div>
                    <div class="mb-3">
                        <input class="change-pin-input" type="text" placeholder="Repeat PIN">
                    </div>
                    <div class="">
                        <router-link to="AddCashQuickteller"><button class="addcash-btn">Create New PIN</button></router-link>
                    </div>
                </div>
                <div class="pw-key">
                    <img src="../../assets/images/pw-key.svg" >
                    <p>Your transactions are secure</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ChangePin.vue"
    }
</script>

<style scoped>
    .back-btn{
        text-align: left;
        padding: 30px 0;
    }
    .change-pin-input{
        background: #D8D8D8;
        border: none;
        border-radius: 35px;
        font-family: Avenir-Roman;
        font-size: 19px;
        color: #4A4A4A;
        letter-spacing: 0;
        width: 100%;
        padding: 15px 20px;
    }

</style>