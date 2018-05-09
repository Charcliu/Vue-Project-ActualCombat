<template>
<div class="Purchase">
  <div class="head">
    <div>小米闪购</div>
    <div>
      <span><</span>
      <span>></span>
    </div>
  </div>
  <PurchaseFoot></PurchaseFoot>
</div>
</template>

<script>
import PurchaseFoot from './PurchaseFoot'
export default {
  name: 'Purchase',
  data() {
    return {

    }
  },
  components: {
    PurchaseFoot
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.Purchase {
  margin-top: 26px;
}

.head {
  width: 1226px;
  margin: auto;
  height: 58px;
}

.head>div:nth-child(1) {
  float: left;
  color: #333;
  font-size: 22px;
  font-weight: 200;
  height: 100%;
  line-height: 58px;
}

.head>div:nth-child(2) {
  float: right;
  height: 100%;
}

.head span {
  display: block;
  height: 24px;
  width: 36px;
  text-align: center;
  border: 1px solid #e0e0e0;
  margin-top: 16px;
  float: left;
  color: #e0e0e0;
  color: #b0b0b0;
}
</style>
