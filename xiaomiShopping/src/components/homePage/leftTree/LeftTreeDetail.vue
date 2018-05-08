<template>
    <div class = "leftTreeDetail" v-if = "detailInfoItem.show" @mouseover="showDetail" @mouseout="hideDetail">
       <div v-for = "item in showData">
           <div v-for = "detail in item" class = "item">
               <img :src = "detail.url"/>
               <span class = "detailName">{{detail.name}}</span>
           </div>
       </div>
    </div>
</template>

<script>
    
    export default {
        name: 'leftTreeDetail',
        props: ['detailInfo'],
        data () {
            return {
                
            }
        },
        computed : {
            detailInfoItem : function(){
                return this.detailInfo;
            },
            showData : function(){
                let resultArray = [],
                    row = 0;
                if(this.detailInfoItem.data){
                    row = Math.ceil(this.detailInfoItem.data.length / 6);
                    for(let i = 0; i < row; i++){
                        resultArray.push(this.detailInfoItem.data.slice(i*6, i*6 + 6));
                    }
                }
                return resultArray;
            }
        },
        methods : {
            showDetail : function(){
                this.$emit("add");
            },
            hideDetail : function(){
                this.$emit("minus");
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .leftTreeDetail{
        position: relative;
        left: 234px;
        top: -460px;
        background-color: #fff;
        height: 460px;
        z-index: 1;
        box-shadow: 2px 3px 19px 1px grey;
    }
    .leftTreeDetail > div{
        float: left;
        width: 265px;
    }
    .item{
        width: 100%;
        font-size: 14px;
        height: 76.6px;
        line-height: 82.6px;
    }
    img{
        width: 40px;
        height: 40px;
        float: left;
        margin-top: 22px;
        margin-left: 20px;
    }
    .item > span{
        display: inline-block;
        margin-left: 10px;
        cursor: pointer;
    }
    .detailName:hover{
        color: #ff6700;
    }
</style>
