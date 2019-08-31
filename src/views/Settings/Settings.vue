<template>
    <div class="food-history-page">
        <div class="container ">
            <div class="upper-menu">
                <div class="back-btn">
                    <a @click="$router.go(-1)"><img src="../../assets/images/back-btn2.svg" ></a>
                </div>
                <div class="settings-btn">
                    <!--<img src="../../assets/images/refresh.svg" >-->

                    <p><font-awesome-icon icon="cog" class=""/> Settings</p>
                </div>
            </div>
        </div>
        <div class="settings-detail">
            <div class="settings-details">
                <div class="change_pin">
                    <router-link to="ChangePin"><h3>Change PIN</h3></router-link>
                </div>
                <div class="change_pin">
                    <router-link to=""><h3>App Version Info</h3></router-link>
                </div>
                <div class="change_pin">
                    <router-link to=""><h3>Send Feedbacks</h3></router-link>
                </div>
                <div class="change_pin">
                    <router-link to="CustomerService"><h3>Contact Customer Service</h3></router-link>
                </div>
                <div class="change_pin2">
                    <router-link to=""><h3>Sign Out from this Device</h3></router-link>
                </div>
            </div>
            <div class="okike_foot_logo">
                <img src="../../assets/images/okike_foot_logo.svg" >
                <p>Okike Foods Limited</p>
            </div>

        </div>

    </div>
</template>

<script>
    export default {
        name: "Settings.vue"
    }
</script>

<style scoped>
    .upper-menu{
        padding: 1.5rem 0;
    }
    a{
        text-decoration: none;
        color: #000000;
        font-family: Avenir-Heavy;
        font-size: 22px;
        letter-spacing: 0;
    }
    a:hover, a:active, a:focus{
        text-decoration: none;
    }
    .settings-btn{
        padding-top: 7px;
        display: flex;
    }
    .settings-btn p{
        padding-top: 8px;
        padding-left: 5px;
        margin-bottom: 0;
        color: #000000;
        font-family: Avenir-Heavy;
        font-size: 22px;
        letter-spacing: 0;
    }
    .settings-detail{
        display: flex;
        justify-content: space-between;
        flex-direction: column;
        height: 82vh;
    }
    .settings-details{
        padding: 1rem;
    }
    .change_pin{
        border-bottom: 1px solid #D8D8D8;
        padding: 1.4rem 0 0.7rem;
    }
    .change_pin h3{
        font-family: Avenir-Medium;
        font-size: 19px;
        color: #4A4A4A;
        letter-spacing: 0;
    }
    .change_pin2{
        padding: 1rem 0;
    }
    .change_pin2 h3{
        font-family: Avenir-Medium;
        font-size: 19px;
        color: #4A4A4A;
        letter-spacing: 0;
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