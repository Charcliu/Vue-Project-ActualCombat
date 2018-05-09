<template>
<div class="home">
  <Header></Header>
  <TopNav></TopNav>
  <Swipper :swipper-info="bgImg"></Swipper>
  <Footer></Footer>
  <Purchase></Purchase>
</div>
</template>

<script>
// 头部组件
import Header from './header/Header'
import TopNav from './header/TopNav'
import Footer from './footer/Footer'
import Purchase from './flashPurchase/Purchase'
// 轮播图组件
import Swipper from '../base/Swipper'
export default {
  name: 'Home',
  data() {
    return {
      bgImg: {
        url: [
          require("../../assets/xmad.jpg"),
          require("../../assets/card2.jpg"),
          require("../../assets/card3.jpg"),
          require("../../assets/card4.jpg")
        ],
        startIndex: 0,
        autoplay: true,
        interval: 6000
      }
    }
  },
  components: {
    Header,
    TopNav,
    Swipper,
    Footer,
    Purchase
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
