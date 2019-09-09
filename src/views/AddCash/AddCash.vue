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
      <div class="mastercard_flex">
        <div class="mastercard-input-box">
          <div class="mastercard_dropdown">
              <select name="" id="" class="mastercard-input">
                  <option value="mastercard">MASTERCARD***2345</option>
                  <option value="visacard">VISACARD***2345</option>
                  <option value="vervecard">VERVECARD***2345</option>
              </select>
            <img src="../../assets/images/dropdown.svg" >
          </div>
          <div class="mb-3">
            <label class="pl-3">Amount</label><br>
            <input class="mastercard-amount-input" type="number" placeholder="N 00.0">
          </div>
          <div class="mb-3">
            <input class="mastercard-amount-input" type="number" placeholder="PIN">
            <p class="pin_txt">Input Okike Pin</p>
          </div>
          <div class="">
            <router-link to="WalletBalance"><button class="addcash-btn">Add Card</button></router-link>
          </div>
        </div>
        <div class="pw-key">
          <img src="../../assets/images/pw-key.svg" >
          <p>100% secure, payment is being encrypted and processed by</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "AddCash.vue"
  }
</script>

<style scoped>
  .back-btn{
    text-align: left;
    padding: 30px 0;
  }

</style>
