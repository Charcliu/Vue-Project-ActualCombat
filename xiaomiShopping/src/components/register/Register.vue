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
            }
        }
    },
    computed : {
        ...mapGetters([
            'gettersUserInfo'
        ])
    },
    methods : {
        ...mapMutations([
            'addUser' 
        ]),
        registerUser : function(){

            /*let errorType = {
                status : false,
                title : "Tips",
                type : ""
            }

            this.userName == "" ? errorType = {
                status : true,
                type : "UserName Can not Be Empty."
            } : errorType = {
                status : false,
                type : ""
            };*/

            let status = this.gettersUserInfo.some(function(item){
                return item.userName == this.userName;
            }, this);

            if(!status){
                this.addUser({
                    userName : this.userName,
                    passWord : this.passWord
                }) 
            }else{
                let _this = this;
                this.noticeInfo = {
                    show : true,
                    title : "Tips",
                    content : "The UserName is Repeat!!!",
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
        }
    },
    components : {
        Notice
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
    .registerButton{
        width: 300px;
        margin: auto;
        text-align: center;
        background-color: #ff6700;
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
</style>
