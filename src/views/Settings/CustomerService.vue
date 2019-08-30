<template>
    <div class="add-cash-card-page">
        <div class="container add-cash-card-page-inner">
            <div class="back-btn">
                <a @click="$router.go(-1)"><img src="../../assets/images/back-btn2.svg" ></a>
            </div>
            <router-link to="Settings"><div class="add-cash-card">
                <h3>Customer Service</h3>
                <p>If you have an challenge transacting or placing your orders on Okike, talk to us.</p>
            </div></router-link>
            <div class="bank-transfer-section">
                <div class="bank-transfer-box">
                    <div class="bank_transfer mb-2 pt-3">
                        <a href="tel:08010000000"><button class="addcash-btn ">Call: 0801 0000 000</button></a>
                    </div>
                    <div class="bank_transfer">
                        <a href="mailto:08010000000"><button class="addcash-btn">Email: hello@okike.ng</button></a>
                    </div>

                </div>
                <div class="okike_foot_logo">
                    <img src="../../assets/images/okike_foot_logo.svg" >
                    <p>Okike Foods Limited</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "CustomerService.vue"
    }
</script>

<style scoped>
    .back-btn{
        text-align: left;
        padding: 30px 0;
    }
    .bank-transfer-section{
        display: flex;
        justify-content: space-between;
        flex-direction: column;
        height: 65vh;
    }

    .okike_foot_logo{
        text-align: center;
    }
    .okike_foot_logo p{
        font-family: Montserrat-Medium;
        font-size: 16px;
        color: #B7B7B7;
        letter-spacing: 0;
        margin-bottom: 0;
        padding-top: 2rem;
    }

</style>