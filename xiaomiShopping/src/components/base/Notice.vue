<template>
    <div v-if = "notice.show">
        <div class = "shade"></div>
        <div class = "noticeDiv">
            <div class = "top">
                <span>{{notice.title}}</span>
                <!-- <span>x</span> -->
            </div>
            <div class = "content">
                <span>{{notice.content}}</span>
            </div>
            <div class = "foot">
                <span v-if = "notice.ok.show" @click = "notice.ok.callBack">OK</span>
                <span v-if = "notice.ok.cancel" @click = "notice.cancel.callBack">Cancel</span>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Notice',
        props: ['noticeInfo'],
        data () {
            return {
                
            }
        },
        computed : {
            notice : function(){
                return this.noticeInfo
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .shade{
        position: fixed;
        width: 100%;
        height: 100%; 
        top: 0px;
        left: 0px;
        background-color: gray;
        opacity: .5;
    }
    .noticeDiv{
        width: 500px;
        height: 250px;
        background-color: #ff6700;
        position: absolute;
        top: 50%;
        left: 50%;
        margin-left: -250px;
        margin-top: -125px;
        color: white;
        border-radius: 5px;
    }
    .noticeDiv > div:nth-child(1){
        height: 50px;
        line-height: 50px;
    }
    .noticeDiv > div:nth-child(2){
        height: 150px;
        line-height: 150px;
        text-align: center;
    }
    .noticeDiv > div:nth-child(3){
        height: 50px;
        line-height: 50px;
        text-align: center;
    }
    /* .top > span:nth-child(2){
        float: right;
        display: inline-block;
        width: 10px;
        height: 10px;
        margin-right: 10px;
        cursor: pointer;
    } */
    .top > span:nth-child(1){
        margin-left: 10px;
    }
    .foot > span{
        display: inline-block;
        width: 70px;
        height: 25px;
        border: 1px solid white;
        line-height: 25px;
        border-radius: 5px;
        cursor: pointer;
    }
</style>
