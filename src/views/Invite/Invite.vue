<template>
    <div class="invite-friends">
        <div class="invite-friends-inner">
            <div class="container invite-friends-inner2">
                <div class="back-btn">
                    <a @click="$router.go(-1)"><img src="../../assets/images/back-btn.svg" ></a>
                </div>
                <div class="invite-title">
                    <p>Invite Friends</p>
                </div>
                <div class="invite-code">
                    <p>Your Invite Code is:</p>
                    <h1>SEYI321</h1>
                    <div class="sharing-txt">
                        <p>Sharing awesomeness is the best!<br>
                            Get your friends to join you on Okike</p>
                    </div>
                </div>

                <div class="invite-friends-click">
                    <router-link to=""><button class="invite-btn">Invite Friends</button></router-link>
                </div>
                <div></div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Invite.vue"
    }
</script>

<style scoped>
    .back-btn{
        text-align: left;
        padding-top: 30px;
    }
    .invite-title p{
        font-family: Avenir-Medium;
        font-size: 25px;
        color: #FFFFFF;
        letter-spacing: 0;
    }
    .invite-code p{
        font-family: Avenir-Roman;
        font-size: 19px;
        color: #FFFFFF;
        letter-spacing: 0;
        margin-bottom: 0;
    }
    .invite-code h1{
        font-family: Avenir-Black;
        font-size: 60px;
        color: #FFFFFF;
        letter-spacing: 0;
    }
    .sharing-txt{
        padding-top: 30px;
    }
    .sharing-txt p{
        font-family: Avenir-Medium;
        font-size: 18px;
        color: #FFFFFF;
        letter-spacing: 0;
        text-align: center;
    }
    .invite-btn{
        background: #FFFFFF;
        border-radius: 37.5px;
        font-family: Avenir-Heavy;
        font-size: 22px;
        color: #E57227;
        letter-spacing: 0;
        padding: 13px 24px;
    }

</style>