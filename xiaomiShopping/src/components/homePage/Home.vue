<template>
    <div class = "home">
        <Header></Header>
        <Swipper :swipper-info = "bgImg"></Swipper>
    </div>
</template>

<script>
    // 头部组件
    import Header from './header/Header'
    // 轮播图组件
    import Swipper from '../base/Swipper'
    export default {
        name: 'Home',
        data () {
            return {
                bgImg : {
                    url : [
                        require("../../assets/card2.jpg"),
                        require("../../assets/card3.jpg"),
                        require("../../assets/card4.jpg")
                    ],
                    startIndex : 0,
                    autoplay : true,
                    interval : 6000
                }
            }
        },
        components : {
            Header,
            Swipper
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
