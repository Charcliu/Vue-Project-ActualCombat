<template>
    <div class = "topNav">
        <span></span>
        <div class = "simpleNav">
            <span v-for = "item in topNav" @mouseover="getName(item)" @mouseout="outHide">{{item}}</span>
        </div>
        <div class = "detailNav" v-if = "showDetail" @mouseover="getName(currentType)" @mouseout="outHide">
            <div>
                <div v-for = "item in currentDetail" class = "itemDetail">
                    <div>
                        <span v-if = "item.type">{{item.type}}</span>
                    </div>
                    <img :src = "item.url"/>
                    <div>{{item.name}}</div>
                    <div>{{item.price}}元</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {
        topNavData,
        navData
    } from './navData';
    export default {
        name: 'TopNav',
        data () {
            return {
                topNav : topNavData,
                topNavDetail : navData,
                currentType : "小米手机",
                showDetail : false,
                // 当鼠标悬浮于顶部导航或者悬浮于具体内容时，count加1，移出时count减1，当count > 0时，说明鼠标离开了顶部导航或者具体内容，可以隐藏具体内容Div
                count : 0,
                timeoutId : null
            }
        },
        computed : {
            currentDetail : function(){
                let result = this.topNavDetail.filter(function(item){
                    if(item.name == this.currentType){
                        return item;
                    }
                }, this)
                return result[0] ? result[0].urlList : []
            }
        },
        methods : {
            getName : function(param){
                this.count++;
                this.currentType = param;
                this.showDetail = true;
            },
            outHide : function(){
                let _this = this;
                this.count--;
                // 函数节流，防止离开事件多次执行。
                clearTimeout(this.timeoutId);
                this.timeoutId = setTimeout(function(){
                    !_this.count ? _this.showDetail = false : ""
                }, 3000);
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .topNav{
        height: 100px;
        background-color: white;
        width: 1226px;
        margin: auto;
    }
    .topNav > span:nth-child(1){
        background-image: url('../../../assets/logo-footer.png');
        display: inline-block;
        width: 56px;
        height: 56px;
        margin-top: 20px;
        float: left;
    }
    .simpleNav{
        color: #333;
        font-size: 16px;
        float: left;
        margin-left: 175px;
        line-height: 100px;
    }
    .simpleNav > span {
        margin-left: 20px;
        cursor: pointer;
    }
    .detailNav{
        position: absolute;
        left: 0px;
        width: 100%;
        z-index: 1;
        top: 140px;
        background-color: white;
        border-top: 1px solid #DDDDDD;
    }
    .detailNav > div{
        width: 1226px;
        margin: auto;
        text-align: center;
    }
    .itemDetail{
        height: 200px;
        width: 200px;
        float: left;
    }
    img{
        width: 160px;
        height: 110px;
        margin-top: 10px;
        cursor: pointer;
    }
    .itemDetail > div{
        height: 18px;
        line-height: 18px;
        font-size: 13px;
        margin-top: 1px;
    }
    .itemDetail span{
        padding: 1px 20px;
        border: 1px solid #ff6700;
        color: #ff6700;
    }
    .itemDetail > div:nth-child(3){
        font-size: 10px;
        color: #333;
    }
    .itemDetail > div:nth-child(4){
        font-size: 10px;
        color: #ff6700;
    }
</style>
