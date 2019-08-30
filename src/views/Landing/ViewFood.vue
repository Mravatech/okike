<template>
    <div class="view-okike-food ">
        <div class="food-overlay">
            <div class="back-btn">
                <a @click="$router.go(-1)"><img src="../../assets/images/back-btn.svg" ></a>
            </div>
            <div class="food-title">
                <h3>Boli & Titus</h3>
            </div>

        </div>
        <div class="view-food-img">
            <img src="../../assets/images/boli_view.jpg">
        </div>

        <div class="food-selection">
            <div class="food-name-price">
                <h3>Boli & Titus</h3>
                <h3>&#8358; 750</h3>
            </div>
        </div>
        <div class="buy-combo">
            <p>Boli, Utazi, Sauce,<br>
                & 2 Titus Fish.</p>
            <button class="buy-combo-btn">Buy Combo</button>
        </div>
        <div class="customize-food">
            <h4>Customize your Order</h4>
            <div class="customize-border">
                <div class="order-name-price">
                    <h3>Boli</h3>
                    <p>&#8358;200</p>
                </div>
                <div class="increase-order">
                    <integer-plusminus class="increase-order-number" :min="0" :max="99" :value="0"></integer-plusminus>
                </div>
            </div>
            <div class="customize-border">
                <div class="order-name-price">
                    <h3>Titus Fish</h3>
                    <p>&#8358;200</p>
                </div>
                <div class="increase-order">
                    <integer-plusminus class="increase-order-number" :min="0" :max="99" :value="0"></integer-plusminus>
                </div>
            </div>
            <div class="customize-border">
                <div class="order-name-price">
                    <h3>Sauce</h3>
                    <p>&#8358;200</p>
                </div>
                <div class="increase-order">
                    <integer-plusminus class="increase-order-number" :min="0" :max="99" :value="0"></integer-plusminus>
                </div>
            </div>
            <div class="customize-border">
                <div class="order-name-price">
                    <h3>Stock Fish</h3>
                    <p>&#8358;200</p>
                </div>
                <div class="increase-order">
                    <integer-plusminus class="increase-order-number" :min="0" :max="99" :value="0"></integer-plusminus>
                </div>
            </div>
        </div>
        <div class="fixed-bottom">
            <div class="add-to-bag">
                <router-link to="Cart">
                    <div class="add-to-bag-bg">
                    <h3>&#8358; 3,300.<span class="">00</span></h3>
                    <div class="add-to-bag-inner">
                        <p>Add to Bag</p>
                        <img src="../../assets/images/btn-next.svg">
                    </div>
                </div>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
    import { IntegerPlusminus } from 'vue-integer-plusminus'
    export default {
        name: "ViewFood.vue",
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
        &.increase-order-number {
            font-size: 18px;
            background-color: #f1f1f1;
            border-radius: 20px;
            .int-pm-value {
                background-color: #f1f1f1;
                color: #000000;
                font-size: 18px;
                padding: 0 20px !important;
                border: none;
                height: 45px;
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
                font-size: 20px;
            }
            .int-pm-decrement {
                background: #ffffff !important;
                border: 2px solid #7B7B7B !important;
                border-radius: 50% !important;
                width: 45px;
                height: 45px;
                font-size: 20px;
            }
        }
    }
</style>

<style scoped>
.order-name-price{
    padding: 5px 15px;
}
.order-name-price h3{
    font-family: Avenir-Medium;
    font-size: 19px;
    color: #4A4A4A;
    letter-spacing: 0;
    margin-bottom: 0;
}
.order-name-price p{
    font-family: Avenir-Roman;
    font-size: 14px;
    color: #A7A7A7;
    letter-spacing: 0;
    margin-bottom: 0;
}
.increase-order{
    padding: 5px;
}


</style>