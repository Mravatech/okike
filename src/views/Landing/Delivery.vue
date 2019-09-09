<template>
  <div class="add-cash-card-page">
    <div class="container add-cash-card-page-inner">
      <div class="back-btn">
        <a @click="$router.go(-1)"><img src="../../assets/images/back-btn2.svg" ></a>
      </div>
      <div class="add-cash-card">
        <h3>Delivery Address</h3>
        <p>Where should we deliver your order?</p>
      </div>
      <div class="mastercard_flex">
        <div class="mastercard-input-box">

          <div class="mb-4">
            <div class="select_state">Select State *</div>
            <!--<input class="change-pin-input" type="text" placeholder="Select Location">-->
            <div class="">
              <select class="change-pin-input">
                <option value="lagos" class="state_option">Lagos</option>
                <option value="enugu" class="state_option">Enugu</option>
                <option value="abuja" class="state_option">Abuja</option>
              </select>
            </div>
          </div>
          <div class="mb-4">
            <div class="select_state">Address/Location *</div>
            <input class="change-pin-input mb-2" type="text" placeholder="Address">
            <input class="change-pin-input" type="text" placeholder="Local Government">
          </div>
          <div class="mb-4">
            <div class="select_state">Phone Number</div>
            <input class="change-pin-input" type="number" placeholder="090012345678">
          </div>
          <div class="">
            <router-link to="Confirmation"><button class="addcash-btn">Submit</button></router-link>
          </div>
        </div>
        <div class="pw-key">

        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Delivery.vue",
    methods:{

    }
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
  .select_state{
    font-family: Avenir-Roman;
    font-size: 16px;
    color: #000000;
    font-weight: 800;
    padding-bottom: 7px;
  }
  .state_option{
    color: #ffffff;
    padding: 10px;
  }

</style>
