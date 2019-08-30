<template>
    <div class="food-history-page">
        <div class="container ">
            <div class="upper-menu">
                <div class="back-btn">
                    <a @click="$router.go(-1)"><img src="../../assets/images/back-btn2.svg" ></a>
                </div>
                <div class="addbankcard-btn">
                    <img src="../../assets/images/refresh.svg" >
                    <router-link to=""><p>History</p></router-link>
                </div>
            </div>
        </div>
            <div class="">
                <div class="history-date-time">
                    <div class="history-name">
                        <h3>Boli & Titus</h3>
                        <p class="history-date">6/JULY/ - 12:35 PM</p>
                        <p class="history-address">15B Mike Adenuga Street, Victoria Island</p>
                    </div>
                    <div class="history-price">
                        <h4>&#8358;7,525</h4>
                    </div>
                </div>
                <div class="history-date-time2">
                    <div class="history-name">
                        <h3>Boli & Titus</h3>
                        <p class="history-date">6/JULY/ - 12:35 PM</p>
                        <p class="history-address">15B Mike Adenuga Street, Victoria Island</p>
                    </div>
                    <div class="history-price">
                        <h4>&#8358;7,525</h4>
                    </div>
                </div>
                <div class="history-date-time">
                    <div class="history-name">
                        <h3>Boli & Titus</h3>
                        <p class="history-date">6/JULY/ - 12:35 PM</p>
                        <p class="history-address">15B Mike Adenuga Street, Victoria Island</p>
                    </div>
                    <div class="history-price">
                        <h4>&#8358;7,525</h4>
                    </div>
                </div>
                <div class="history-date-time2">
                    <div class="history-name">
                        <h3>Boli & Titus</h3>
                        <p class="history-date">6/JULY/ - 12:35 PM</p>
                        <p class="history-address">15B Mike Adenuga Street, Victoria Island</p>
                    </div>
                    <div class="history-price">
                        <h4>&#8358;7,525</h4>
                    </div>
                </div>
                <div class="history-date-time">
                    <div class="history-name">
                        <h3>Boli & Titus</h3>
                        <p class="history-date">6/JULY/ - 12:35 PM</p>
                        <p class="history-address">15B Mike Adenuga Street, Victoria Island</p>
                    </div>
                    <div class="history-price">
                        <h4>&#8358;7,525</h4>
                    </div>
                </div>
                <div class="history-date-time2">
                    <div class="history-name">
                        <h3>Boli & Titus</h3>
                        <p class="history-date">6/JULY/ - 12:35 PM</p>
                        <p class="history-address">15B Mike Adenuga Street, Victoria Island</p>
                    </div>
                    <div class="history-price">
                        <h4>&#8358;7,525</h4>
                    </div>
                </div>
                <div class="history-date-time">
                    <div class="history-name">
                        <h3>Boli & Titus</h3>
                        <p class="history-date">6/JULY/ - 12:35 PM</p>
                        <p class="history-address">15B Mike Adenuga Street, Victoria Island</p>
                    </div>
                    <div class="history-price">
                        <h4>&#8358;7,525</h4>
                    </div>
                </div>
                <div class="history-date-time2">
                    <div class="history-name">
                        <h3>Boli & Titus</h3>
                        <p class="history-date">6/JULY/ - 12:35 PM</p>
                        <p class="history-address">15B Mike Adenuga Street, Victoria Island</p>
                    </div>
                    <div class="history-price">
                        <h4>&#8358;7,525</h4>
                    </div>
                </div>
            </div>

    </div>
</template>

<script>
    export default {
        name: "History.vue"
    }
</script>

<style scoped>
    .upper-menu{
        padding: 1.5rem 0;
        border-bottom: 1px solid #D8D8D8;
    }
    a{
        text-decoration: none;
        color: #000000;
        font-family: Avenir-Heavy;
        font-size: 22px;
        letter-spacing: 0;
    }
    .addbankcard-btn{
        padding-top: 7px;
        display: flex;
    }
    .addbankcard-btn p{
        padding-top: 8px;
        padding-left: 5px;
        margin-bottom: 0;
    }
    .history-date-time{
        display: flex;
        justify-content: space-between;
        padding: 1rem 0;
    }
    .history-date-time2{
        display: flex;
        justify-content: space-between;
        background-color: #F4F4F4;
        padding: 1rem 0;
    }
    .history-name{
        padding-left: 15px;
    }
    .history-name h3{
        font-family: Avenir-Medium;
        font-size: 20px;
        color: #000000;
        letter-spacing: 0;
        margin-bottom: 0;
    }
    .history-date{
        font-family: Avenir-Book;
        font-size: 12px;
        color: #4A4A4A;
        letter-spacing: 0;
        margin-bottom: 0;
    }
    .history-address{
        font-family: Avenir-Book;
        font-size: 14px;
        color: #000000;
        letter-spacing: 0;
        margin-bottom: 0;
    }
    .history-price{
        padding: 15px;
    }
    .history-price h4{
        font-family: LucidaGrande;
        font-size: 19px;
        color: #3AA08E;
        letter-spacing: 0;
        margin-bottom: 0;
    }

</style>