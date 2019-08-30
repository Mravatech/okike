<template>
    <div class="add-cash-card-page">
        <div class="container add-cash-card-page-inner">
            <div class="back-btn">
                <a @click="$router.go(-1)"><img src="../../assets/images/back-btn2.svg" ></a>
            </div>
            <div class="add-cash-card">
                <h3>Add Cash by Bank Card</h3>
                <p>Add cash through any of the existing
                    <br>Bank Cards or add multiple cards.</p>
            </div>
            <div class="bank-transfer-section">
                <div class="bank-transfer-box">
                    <div class="bank_transfer mb-2 pt-3">
                        <h4 class="">Bank Transfer</h4>
                        <p class="">• 	Use your Okike Phone Number as the transaction Reference or Remark</p>
                    </div>
                    <div class="bank_transfer mb-2 pt-2">
                        <h4 class="">Cash Deposit</h4>
                        <p class="">• 	Use your Okike Phone Number as name of depositor.</p>
                    </div>
                    <div class="bank_transfer2 mb-2 pt-2">
                        <h4>UBA (United Bank of Africa)</h4>
                        <p>Okike Foods Limited.</p>
                        <p>Account Number: <b>001000000</b></p>
                    </div>
                </div>
                <div class="bank-transfer-foot">
                    <p>Your account will be credited within 30 minutes.</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "BankTransfer.vue"
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
        height: 67vh;
    }
    .bank_transfer{
        border-bottom: 1px solid #E2E2E2;
    }
    .bank_transfer h4{
        font-family: Avenir-Heavy;
        font-size: 16px;
        color: #4A4A4A;
        letter-spacing: 0;
    }
    .bank_transfer p{
        font-family: Avenir-Roman;
        font-size: 16px;
        color: #4A4A4A;
        letter-spacing: 0;
        padding-left: 10px;
    }
    .bank_transfer2{
        border-top: 1px solid #E2E2E2;
    }
    .bank_transfer2 h4{
        font-family: Avenir-Heavy;
        font-size: 16px;
        color: #4A4A4A;
        letter-spacing: 0;
    }
    .bank_transfer2 p{
        font-family: Avenir-Roman;
        font-size: 16px;
        color: #4A4A4A;
        letter-spacing: 0;
        margin-bottom: 0;
    }
    .bank-transfer-foot{
        text-align: center;
    }
    .bank-transfer-foot p{
        font-family: Avenir-Roman;
        font-size: 14px;
        color: #A2A2A2;
        letter-spacing: 0;
        text-align: center;
    }

</style>