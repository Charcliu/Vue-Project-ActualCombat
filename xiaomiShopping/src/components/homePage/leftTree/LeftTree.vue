<template>
    <div class = "leftTree">
        <div class= "left">
            <div class = "leftClassify">
                <div v-for = "(item, index) in classifyData" @mouseover="getDetailInfo(index)" @mouseout="hideDetail">
                    {{item.name}}
                    <span>></span>
                </div>
            </div>
        </div>
        <LeftTreeDetail :detail-info = "detailInfoItem" v-on:add = "addCount" v-on:minus = "hideDetail"></LeftTreeDetail>
    </div>
</template>

<script>
    import { classifyData, detailInfo } from './leftTreeData';
    import LeftTreeDetail from './LeftTreeDetail';
    export default {
        name: 'leftTree',
        data () {
            return {
                classifyData : classifyData,
                detailInfoAll : detailInfo,
                detailInfoItem : {
                    data : null,
                    show : false
                },
                count : 0,
                timeoutId : null
            }
        },
        components : {
            LeftTreeDetail
        },
        methods : {
            getDetailInfo : function(param){
                this.count++;
                if(this.detailInfoAll[param]){
                    this.detailInfoItem.show = true;
                    this.detailInfoItem.data = this.detailInfoAll[param];
                }else{
                    this.detailInfoItem.show = false;
                    this.detailInfoItem.data = null;
                }
            },
            hideDetail : function(){
                let _this = this;
                _this.count--;
                clearTimeout(this.timeoutId);
                this.timeoutId = setTimeout(() => {
                    !_this.count ? _this.detailInfoItem.show = false : "";
                },500)
            },
            addCount : function(){
                this.count++;
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .left{
        height: 460px;
        width: 234px;
        background: rgba(0,0,0,0.6);
    }
    .leftTree{
        position: absolute;
        left: 0px;
        top: 0px;
    }
    .leftClassify{
        height: 420px;
        width: 100%;
        padding: 20px 0px;
        color: #fff;
        font-size: 14px;
    }
    .leftClassify > div{
        height: 42px;
        line-height: 42px;
        padding-left: 30px;
        cursor: pointer;
    }
    .leftClassify > div:hover{
        background-color: #ff6700;
    }
    .leftClassify span{
        float: right;
        padding-right: 20px;
        color: rgba(255,255,255,0.5);
    }
</style>
