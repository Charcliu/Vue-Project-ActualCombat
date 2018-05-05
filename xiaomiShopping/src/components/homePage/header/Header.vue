<template>
    <div class = "header">
        <div>
            <span v-for = "(item,index) in headerMsgLeft" class = "headerSpan">
                {{item}}
                <span v-if = "index != headerMsgLeft.length - 1">|</span>
            </span>
            <span v-for = "(item,index) in headerMsgRight" class = "headerSpanRight">
                {{item}}
            </span>
        </div>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex'
    export default {
        name: 'Header',
        data () {
            return {
                headerMsgLeft : ["小米商城","MIUI","IoT","云服务","水滴","金融","有品","Select Region"]
            }
        },
        computed : {
            ...mapGetters([
                'gettersCurrentUser'
            ]),
            headerMsgRight : function(){
                let arr = ["消息通知", "我的订单", "购物车"];
                return [this.gettersCurrentUser, ...arr];
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .header{
        height: 40px;
        font-size: 12px;
        color: #b0b0b0;
        background: #333;
        line-height: 40px;
    }
    .header > div{
        width: 1226px;
        margin: auto;
    }
    .headerSpan span{
        color: #424242;
        margin: 0 .5em;
    }
    .headerSpan:hover{
        color: white;
    }
    .headerSpan{
        cursor: pointer;
    }
</style>
