<template>
  <div class="okike-cart-page">
    <div class="cart-section">
      <div class="back-btn2">
        <a @click="$router.go(-1)"><img src="../../assets/images/back-btn2.svg" alt="back button"></a>
      </div>
      <div class="cart-logo">
        <img src="../../assets/images/cart_img.svg" alt="Cart">
      </div>
      <div class="" style="width: 37px;"></div>
    </div>

    <div class="customize-food">
      <div class="food-card2">
        <div class="food-name-price2">
          <h3>Boli & Titus</h3>
          <h4>&#8358; 7,525</h4>
        </div>
        <div class="cart-border">
          <div class="order-name-price">
            <img src="../../assets/images/close-btn.svg" alt="close button">
          </div>
          <div class="product_img">
            <img src="../../assets/images/abacha-meal.jpg">
          </div>
          <div class="increase-order">
            <integer-plusminus class="increase-order-number demo-vertical" :min="0" :max="99" :value="0" :vertical="true"></integer-plusminus>
          </div>
        </div>
      </div>
      <div class="food-card2">
        <div class="food-name-price2">
          <h3>Boli & Titus</h3>
          <h4>&#8358; 7,525</h4>
        </div>
        <div class="cart-border">
          <div class="order-name-price">
            <img src="../../assets/images/close-btn.svg" alt="close button">
          </div>
          <div class="product_img">
            <img src="../../assets/images/abacha-meal.jpg">
          </div>
          <div class="increase-order">
            <integer-plusminus class="increase-order-number demo-vertical" :min="0" :max="99" :value="0" :vertical="true"></integer-plusminus>
          </div>
        </div>
      </div>
      <div class="food-card2">
        <div class="food-name-price2">
          <h3>Boli & Titus</h3>
          <h4>&#8358; 7,525</h4>
        </div>
        <div class="cart-border">
          <div class="order-name-price">
            <img src="../../assets/images/close-btn.svg" alt="close button">
          </div>
          <div class="product_img">
            <img src="../../assets/images/abacha-meal.jpg">
          </div>
          <div class="increase-order">
            <integer-plusminus class="increase-order-number demo-vertical" :min="0" :max="99" :value="0" :vertical="true"></integer-plusminus>
          </div>
        </div>
      </div>
      <div class="food-card2">
        <div class="food-name-price2">
          <h3>Boli & Titus</h3>
          <h4>&#8358; 7,525</h4>
        </div>
        <div class="cart-border">
          <div class="order-name-price">
            <img src="../../assets/images/close-btn.svg" alt="close button">
          </div>
          <div class="product_img">
            <img src="../../assets/images/abacha-meal.jpg">
          </div>
          <div class="increase-order">
            <integer-plusminus class="increase-order-number demo-vertical" :min="0" :max="99" :value="0" :vertical="true"></integer-plusminus>
          </div>
        </div>
      </div>
    </div>
    <div class="fixed-bottom">
      <div class="checkout-card">
        <div class="cart-total">
          <p>Cart Total:</p>
          <h4>&#8358;7,525.00</h4>
        </div>
        <div class="checkout">
          <router-link to="WalletBalance">
            <p>Checkout</p>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { IntegerPlusminus } from 'vue-integer-plusminus'
  export default {
    name: "Cart.vue",
    components: { IntegerPlusminus },
    data () {
      return {
        ipm_value: 0,
        ipm_min: 0,
        ipm_max: 99,
        ipm_step: 1,
        ipm_slot_decr: '-1',
        ipm_slot_incr: '+1',
        ipm_vertical: false,
        demo_slot_value: 0
      }
    }
  }
</script>

<style lang="scss">

  .int-pm {
    &.demo-vertical {
      font-size: 18px;
      border-radius: 20px;
      background-color: #ffffff;
      box-shadow: 0 0 14px 0 rgba(209,209,209,0.50);
      .int-pm-value {
        background-color: #ffffff;
        color: #000000;
        font-size: 18px;
        padding: 12px 0 !important;

        border: none;
        width: 45px;
      }
      .int-pm-btn {
        border: none !important;
        color: white;
      }
      .int-pm-increment {
        background: #7B7B7B !important;
        border-radius: 50% !important;
        width: 45px;
        height: 45px;
        font-size: 22px;
      }
      .int-pm-decrement {
        background: #ffffff !important;
        border: 2px solid #7B7B7B !important;
        border-radius: 50% !important;
        width: 45px;
        height: 45px;
        font-size: 22px;
      }
    }
  }
</style>
<style scoped>
  .cart-section{
    display: flex;
    justify-content: space-between;
    padding: 1rem;
  }
  .cart-logo{
    padding-top: 1rem;
  }
  .food-name-price2{
    text-align: center;
  }
  .food-name-price2 h3{
    font-family: Avenir-Heavy;
    font-size: 24px;
    color: #000000;
    letter-spacing: 0;
    text-align: center;
  }
  .food-name-price2 h4{
    font-family: Avenir-Heavy;
    font-size: 20px;
    color: #3AA08E;
    letter-spacing: 0;
  }

  .back-btn{
    /*position: relative;*/
    /*z-index: 8;*/
  }
  .customize-food{
    position: relative;
    z-index: 3;
    padding: 1rem;
    overflow-x: overlay;
    scroll-behavior: smooth;
    height: 68vh;
  }
  .checkout-card{
    background: #FFFFFF;
    box-shadow: 0 0 14px 0 rgba(209,209,209,0.50);
    border-radius: 35px;
    padding: 1rem;
    margin: 0.5rem;
  }
  .checkout{
    background: #209580;
    color: #ffffff;
    border-radius: 27.5px;
    display: flex;
    justify-content: center;
    padding: 0.3rem;
  }
  .checkout p{
    font-family: Avenir-Heavy;
    font-size: 22px;
    color: #FFFFFF;
    letter-spacing: 0;
    margin-bottom: 0;
    padding: 5px;
  }
  .cart-total{
    display: flex;
    justify-content: space-between;
  }
  .cart-total p{
    font-family: Avenir-Heavy;
    font-size: 16px;
    color: #4A4A4A;
    letter-spacing: 0;
    margin-bottom: 0;
  }
  .cart-total h4{
    font-family: Avenir-Heavy;
    font-size: 20px;
    color: #3AA08E;
    letter-spacing: 0;
  }
  .food-card2{
    width: 100%;
    margin-top: 0;
    padding: 15px 5px 20px;
    border-bottom: 1px solid #DADADA;
  }
  .cart-border{
    width: 100%;
    margin-bottom: 15px;
    display: flex;
    justify-content: space-between;
  }
  .order-name-price{
    padding-top: 45px;
  }
  .product_img{
    border-radius: 50px;
  }
  .product_img img{
    border-radius: 50px;
    width: 160px;
    height: 160px;
  }
  .increase-order{
    padding-top: 20px;
  }


</style>
