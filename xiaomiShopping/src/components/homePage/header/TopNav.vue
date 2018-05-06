<template>
    <div class = "topNav">
        <span></span>
        <div class = "simpleNav">
            <span v-for = "item in topNav" @mouseover="getName(item)">{{item}}</span>
        </div>
        <div class = "detailNav" v-if = "showDetail">
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
    export default {
        name: 'TopNav',
        data () {
            return {
                topNav : ["小米手机", "红米", "电视", "笔记本", "盒子", "新品", "路由器", "智能硬件", "服务", "社区"],
                topNavDetail : [
                    {
                        name : "小米手机",
                        urlList : [
                            {
                                url : require("../../../assets/mix2s.png"),
                                price : 3299,
                                name : "小米MIX 2S",
                                type : "新品"
                            },
                            {
                                url : require("../../../assets/mix2.png"),
                                price : 3299,
                                name : "小米MIX 2S",
                                type : "新品"
                            },
                            {
                                url : require("../../../assets/5x.jpg"),
                                price : 3299,
                                name : "小米MIX 2S",
                                type : "新品"
                            },
                            {
                                url : require("../../../assets/max2.png"),
                                price : 3299,
                                name : "小米MIX 2S",
                                type : "新品"
                            },
                            {
                                url : require("../../../assets/mi6x.jpg"),
                                price : 3299,
                                name : "小米MIX 2S",
                                type : "新品"
                            },
                            {
                                url : require("../../../assets/note2.png"),
                                price : 3299,
                                name : "小米MIX 2S",
                                type : "新品"
                            }
                        ]
                    }
                ],
                currentType : "小米手机",
                showDetail : false
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
                this.currentType = param;
                this.showDetail = true;
            },
            outHide : function(){
                this.showDetail = false;
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
