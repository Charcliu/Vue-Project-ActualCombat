<template>
<div class="Purchase">
  <div class="head">
    <div>小米闪购</div>
    <div>
      <span :class="{ active: currentPage > 0}" @click="delCurrentPage"><</span>
      <span :class="{ active: currentPage < classifyData.length - 1}" @click="addCurrentPage">></span>
    </div>
  </div>
  <div class="PurchaseFoot">
    <PurchaseFootLeft></PurchaseFootLeft>
    <PurchaseFootRight :show-data="showData"></PurchaseFootRight>
  </div>
</div>
</template>

<script>
import PurchaseFootLeft from './PurchaseFootLeft'
import PurchaseFootRight from './PurchaseFootRight'
import {
  purchaseRightData
} from './purchaseRightData'
export default {
  name: 'Purchase',
  data() {
    return {
      purchaseRightData: purchaseRightData,
      currentPage: 0
    }
  },
  computed: {
    classifyData: function() {
      let result = [];
      for (let i = 0; i < Math.ceil(this.purchaseRightData.length / 4); i++) {
        result.push(this.purchaseRightData.slice(i * 4, i * 4 + 4))
      }
      return result;
    },
    maxChange: function() {
      return this.classifyData.length - 1;
    },
    showData: function() {
      return this.classifyData[this.currentPage]
    }
  },
  methods: {
    addCurrentPage: function() {
      this.currentPage < this.classifyData.length - 1 ? this.currentPage++ : ""
    },
    delCurrentPage: function() {
      this.currentPage > 0 ? this.currentPage-- : ""
    }
  },
  components: {
    PurchaseFootLeft,
    PurchaseFootRight
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
  line-height: 24px;
  width: 36px;
  text-align: center;
  border: 1px solid #e0e0e0;
  margin-top: 16px;
  float: left;
  color: #e0e0e0;
  cursor: pointer;
}

.PurchaseFoot {
  width: 1226px;
  margin: auto;
}

.active {
  color: #b0b0b0 !important;
}
</style>
