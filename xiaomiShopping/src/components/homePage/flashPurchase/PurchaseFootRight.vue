<template>
<div class="PurchaseFootRight">
  <div v-for="(item,index) in dataMsg" :class="{ color1 : index == 0,color2 : index == 1,color3 : index == 2,color4 : index == 3}">
    <img :src="item.url" />
    <div>{{item.name}}</div>
    <div>{{item.desc}}</div>
    <div>{{item.price}}</div>
  </div>
</div>
</template>

<script>
export default {
  name: 'PurchaseFootRight',
  props: ["showData"],
  data() {
    return {

    }
  },
  computed: {
    dataMsg: function() {
      return this.showData
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.color1 {
  border-top: 1px solid #ffac13;
}

.color2 {
  border-top: 1px solid #83c44e;
}

.color3 {
  border-top: 1px solid #2196f3;
}

.color4 {
  border-top: 1px solid #00c0a5;
}

.PurchaseFootRight {
  float: left;
  height: 340px;
  width: 992px;
}

.PurchaseFootRight>div {
  float: left;
  width: 234px;
  height: 339px;
  text-align: center;
  padding-top: 55px;
  margin-left: 14px
}

img {
  width: 160px;
  height: 160px;
}

.PurchaseFootRight>div div:nth-child(2) {
  margin: 0 20px 3px;
  font-size: 14px;
  font-weight: 400;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  color: #212121;
}

.PurchaseFootRight>div div:nth-child(3) {
  height: 18px;
  margin: 0 20px 12px;
  font-size: 12px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  _zoom: 1;
  color: #b0b0b0;
}

.PurchaseFootRight>div div:nth-child(4) {
  color: #ff6709;
  font-size: 14px;
}
</style>
