<template>
    <div class = "swipper">
        <LeftTree></LeftTree>
        <div v-for = "(item, index) in urlList" v-if = "index == currentIndex" class = "imgContent">
            <img :src = "item"/>
            <span class = "left" @click = "switchImg(0)"></span>
            <span class = "right" @click = "switchImg(1)"></span>
        </div>
    </div>
</template>

<script>
    import LeftTree from '../homePage/leftTree/LeftTree'
    export default {
        name: 'Swipper',
        props : ['swipperInfo'],
        data () {
            return {
                currentIndex : this.swipperInfo.startIndex
            }
        },
        computed : {
            urlList : function(){
                return this.swipperInfo.url
            },
            urlSize : function(){
                return this.swipperInfo.url.length
            }
        },
        mounted : function(){
            let _this = this;
            if(!this.swipperInfo.autoplay){
                return
            }
            setInterval(function(){
                _this.currentIndex < _this.urlSize - 1 ? _this.currentIndex++ : _this.currentIndex = 0;
            }, this.swipperInfo.interval)
        },
        methods : {
            switchImg :function(param){
                if(param){
                    this.currentIndex + 1 < this.urlSize ? this.currentIndex++ : this.currentIndex = 0;
                }else{
                    this.currentIndex > 0 ? this.currentIndex-- : this.currentIndex = this.urlSize - 1;
                }
            }
        },
        components : {
            LeftTree
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .imgContent{
        width: 1226px;
        margin: auto;
    }
    .left{
        background-image: url("../../assets/icon-slides.png");
        width: 41px;
        height: 68px;
        display: inline-block;
        position: absolute;
        left: 234px;
        top: 200px;
        background-position: 82px;
        cursor: pointer;
    }
    .right{
        background-image: url("../../assets/icon-slides.png");
        width: 41px;
        height: 68px;
        display: inline-block;
        position: absolute;
        right: 0px;
        top: 200px;
        background-position: 41px;
        cursor: pointer;
    }
    .left:hover{
        background-position: 0px;
    }
    .right:hover{
        background-position: -41px;
    }
    .swipper{
        width: 1226px;
        margin: auto;
        position: relative;
    }
</style>
