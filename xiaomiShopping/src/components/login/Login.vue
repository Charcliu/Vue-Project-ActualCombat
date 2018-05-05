<template>
    <div class="login">
        <div class = "header">
            <span></span>
        </div>
        <div class= "middle">
            <div class = "loginDiv">
                <div>
                    <span>帐号登录</span>
                </div>
                <div>
                    <input type = "text" v-model = "userName"/>
                    <input type = "password" v-model = "passWord"/>
                </div>
                <div class = "loginBtn" @click = "loginEvent">
                    登录
                </div>
                <div class = "register">
                    <span @click = "goRegister">立即注册</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import { mapGetters, mapMutations } from 'vuex'

    export default {
        name: 'Login',
        data () {
            return {
                userName : "",
                passWord : ""
            }
        },
        computed : {
            ...mapGetters([
                'gettersUserInfo'
            ])
        },
        methods : {
            ...mapMutations([
                'setLoginUser'
            ]),
            goRegister : function(){
                this.$router.push('register');
            },
            loginEvent : function(){
                let _this = this;
                let validateUser = this.gettersUserInfo.some((item) => {
                    return item.userName == _this.userName &&
                        item.passWord == _this.passWord
                })

                if(!validateUser){
                    this.$message({
                        message: '用户名密码错误！',
                        type: 'error'
                    });
                }else{
                    this.setLoginUser(this.userName);
                    this.$router.push('home');
                }
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .header{
        width: 1130px;
        margin: 0 auto;
    }
    .header > span:nth-child(1){
        background-image: url('../../assets/mistore_logo.png');
        display: inline-block;
        width: 200px;
        height: 98px;
        line-height: 98px;
    }
    .middle{
        background-image: url('../../assets/loginImg.jpg');
        width: 100%;
        height: 585px;
        background-position: -515px;
    }
    .loginDiv{
        width: 410px;
        background-color: white;
        float: right;
        margin-right: 190px;
        height: 524px;
        margin-top: 30px;
    }
    .loginDiv > div:nth-child(1){
        height: 83px;
        line-height: 83px;
    }
    .loginDiv > div:nth-child(1) > span{
        color: #f56600;
        font-size: 24px;
        margin-left: 65px;
    }
    .loginDiv input{
        width: 346px;
        height: 48px;
        border: 1px solid #DDDDDD;
        margin: auto;
        display: block;
        margin-bottom: 10px;
    }
    .loginDiv input:nth-child(2){
        margin-bottom: 25px;
    }
    .loginBtn{
        background-color: #ef5b00;
        width: 346px;
        height: 50px;
        line-height: 50px;
        display: block;
        margin-bottom: 14px;
        text-align: center;
        font-size: 14px;
        color: #fff;
        cursor: pointer;
        margin: auto;
    }
    .register{
        width: 346px;
        margin: auto;
        text-align: right;
        color: #757575;
        margin-top: 5px;
    }
    .register > span{
        cursor: pointer;
    }
    .register > span:hover{
        color: #ef5b00;
    }
</style>
