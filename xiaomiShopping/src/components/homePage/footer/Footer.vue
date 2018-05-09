<template>
<div class="footer">
  <div>
    <div class="top">
      <span>选购手机</span>
      <span>企业团购</span>
      <span>F码通道</span>
    </div>
    <div class="down">
      <span>米粉卡</span>
      <span>以旧换新</span>
      <span>话费充值</span>
    </div>
  </div>
  <div>
    <div v-for="item in imgInfo">
      <img :src="item" />
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'Footer',
  data() {
    return {
      imgInfo: [
        require('../../../assets/foot/foot1.jpg'),
        require('../../../assets/foot/foot2.jpg'),
        require('../../../assets/foot/foot3.jpg'),
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.footer {
  height: 170px;
  width: 1226px;
  margin: auto;
  margin-top: 12px;
}

img {
  height: 170px;
}

.footer>div:nth-child(1) {
  width: 234px;
  height: 100%;
  background: #5f5750;
  float: left;
}

.footer>div:nth-child(2) {
  height: 100%;
  float: left;
}

.top {
  height: 50%;
}

.down {
  height: 50%;
}

.footer span {
  display: inline-block;
  height: 100%;
  width: 31%;
  text-align: center;
  line-height: 85px;
  color: rgba(255, 255, 255, 0.7);
  font-size: 12px;
}

.footer>div:nth-child(2)>div {
  float: left;
  margin-left: 14px;
}

.footer>div:nth-child(2)>div:nth-child(1) {
  margin-left: 16px;
}
</style>
