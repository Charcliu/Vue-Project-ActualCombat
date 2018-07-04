<template>
    <div class = "register">
        <div class = "layout">
            <div>
                <a class = "milogo"></a>
            </div>
            <div>
                <span class = "accoutSpan">注册小米账号</span>
            </div>
            <div class = "registerInfo">
                <div>
                    <span>用户名：</span>
                    <input type = "text" placeholder = "请输入用户名" v-model = "userName"/>
                </div>
                <div>
                    <span>密码：</span>
                    <input type = "password" placeholder = "请输入密码" v-model = "passWord"/>
                </div>
            </div>
            <div>
                <div class= "registerButton" @click = "registerUser">
                    <span>注册</span>
                </div>
            </div>
            <div class = "login">
                <span @click = "goLogin">立即登录</span>
            </div>
        </div>
        <Notice :notice-info = "noticeInfo"></Notice>
    </div>
</template>

<script>

import { mapMutations, mapGetters } from 'vuex'
// 公共弹框组件
import Notice from '../base/Notice'

export default {
    name: 'Register',
    data () {
        return {
            userName : "",
            passWord : "",
            noticeInfo : {
                show : false,
                title : "",
                content : "",
                ok : {
                    show : false,
                    callBack : null
                },
                cancel : {
                    show : false,
                    callBack : null
                }
            },
            radio : '1'
        }
    },
    computed : {
        ...mapGetters([
            'gettersUserInfo'
        ]),
        getErrorMsg : function(){
            let errorType = {
                status : false,
                title : "",
                type : ""
            };

            if(this.userName != ""){
                let status = this.gettersUserInfo.some(function(item){
                    return item.userName == this.userName;
                }, this);

                if(status){
                    errorType = {
                        status : true,
                        title : "Tips",
                        type : "UserName Can not Repeat."
                    }
                }
            }else{
                errorType = {
                    status : true,
                    title : "Tips",
                    type : "UserName Can not Be Empty."
                }
            }
            return errorType;
        }
    },
    methods : {
        ...mapMutations([
            'addUser'
        ]),
        registerUser : function(){
            let errorType = this.getErrorMsg;

            if(!errorType.status){
                this.addUser({
                    userName : this.userName,
                    passWord : this.passWord
                })
                // elementUI 提示组件
                this.$message({
                    message: '恭喜你，注册成功！',
                    type: 'success'
                });
            }else{
                let _this = this;
                this.noticeInfo = {
                    show : errorType.status,
                    title : errorType.title,
                    content : errorType.type,
                    ok : {
                        show : true,
                        callBack : function(){
                            _this.noticeInfo.show = false;
                        }
                    },
                    cancel : {
                        show : false,
                        callBack : null
                    }
                }
            }
        },
        goLogin : function(){
            this.$router.push('login');
        }
    },
    components : {
        Notice
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang = "scss" scoped>
    .register{
        position: fixed;
        left: 0px;
        top: 0px;
        height: 100%;
        width: 100%;
    }
    .layout{
        width: 854px;
        margin: 0 auto;
    }
    .layout > div{
        width: 100%;
        position: relative;
        margin-top: 50px;
    }
    .milogo{
        background-image: url(../../assets/milogo.png);
        text-decoration: none;
        width: 49px;
        height: 48px;
        margin: 0 auto;
        display: block;
        cursor: default;
    }
    .accoutSpan{
        font-size: 28px;
        font-family: arial,"Hiragino Sans GB", "Microsoft YaHei","微軟正黑體","儷黑 Pro", sans-serif;
        display: block;
        margin: auto;
        width: 200px;
        text-align: center;
    }
    .registerInfo > div{
        width: 300px;
        margin: auto;
        font-size: 20px;
        margin-bottom: 10px;
    }
    .registerInfo span{
        display: inline-block;
        width: 80px;
    }
    .registerInfo input{
        width: 210px;
        height: 25px;
    }

    /* Test Sass */
    $register_button_color: #ff6700;

    .registerButton{
        width: 300px;
        margin: auto;
        text-align: center;
        background-color: $register_button_color;
        border: 1px solid rgba(186,186,186,0.3);
        color: #fff;
        height: 42px;
        line-height: 42px;
        cursor: pointer;
    }
    .errorTips{
        width: 300px;
        margin: auto;
        text-align: center;
        color: red;
        font-size: 15px;
    }
    .login{
        margin: auto;
        text-align: right;
        color: #757575;
        width: 304px !important;
        margin-top: 5px !important;
    }
    .login > span{
        cursor: pointer;
    }
    .login > span:hover{
        color: #ef5b00;
    }
</style>
