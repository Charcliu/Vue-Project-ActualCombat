<template>
<div class="PurchaseFoot">
  <div class="Countdown">
    <div>{{endTimeHours}} : {{endTimeMinutes}}场</div>
    <div>
      <img :src="countdownImg" />
    </div>
    <div>距离开始还有</div>
    <div>
      <span>{{leftTimer.hours}}</span>
      <span>:</span>
      <span>{{leftTimer.minutes}}</span>
      <span>:</span>
      <span>{{leftTimer.seconds}}</span>
    </div>
  </div>
  <div></div>
</div>
</template>

<script>
export default {
  name: 'PurchaseFoot',
  data() {
    return {
      countdownImg: require('../../../assets/purchase/flashPurchase.png'),
      leftTimer: {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
      }
    }
  },
  created: function() {
    /**
     * 倒计时
     */
    this.getTime();
    setInterval(this.getTime, 1000)
  },
  computed: {
    endTime: function() {
      let now = new Date();
      return new Date(now.getFullYear(), now.getMonth() + 1, now.getDate(), 0, 0, 0);
    },
    endTimeHours: function() {
      let result = "";
      this.endTime.getHours() < 10 ? result = "0" + this.endTime.getHours() : result = this.endTime.getHours();
      return result;
    },
    endTimeMinutes: function() {
      let result = "";
      this.endTime.getMinutes() < 10 ? result = "0" + this.endTime.getMinutes() : result = this.endTime.getMinutes();
      return result;
    }
  },
  methods: {
    filterTime: function(param) {
      let result = "";
      param < 10 ? result = "0" + param : result = param;
      return result;
    },
    getTime: function() {
      let leftTime = (new Date(this.endTime)) - new Date(); //计算剩余的毫秒数
      this.leftTimer.days = this.filterTime(parseInt(leftTime / 1000 / 60 / 60 / 24, 10)); //计算剩余的天数
      this.leftTimer.hours = this.filterTime(parseInt(leftTime / 1000 / 60 / 60 % 24, 10)); //计算剩余的小时
      this.leftTimer.minutes = this.filterTime(parseInt(leftTime / 1000 / 60 % 60, 10)); //计算剩余的分钟
      this.leftTimer.seconds = this.filterTime(parseInt(leftTime / 1000 % 60, 10)); //计算剩余的秒数
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.PurchaseFoot {
  width: 1226px;
  margin: auto;
}

.Countdown {
  width: 234px;
  height: 340px;
  border-top: 1px solid #e53935;
  text-align: center;
}

.Countdown span:nth-child(1),
.Countdown span:nth-child(3),
.Countdown span:nth-child(5) {
  width: 46px;
  height: 46px;
  background: #605751;
  display: inline-block;
  text-align: center;
  line-height: 46px;
  color: #fff;
  font-size: 24px;
}

.Countdown span:nth-child(2),
.Countdown span:nth-child(4) {
  width: 15px;
  height: 46px;
  background: #fff;
  display: inline-block;
  text-align: center;
  line-height: 46px;
  color: #605751;
  font-size: 28px;
}

.Countdown>div:nth-child(1) {
  margin-top: 55px;
  font-size: 21px;
  color: #ef3a3b;
}

.Countdown>div:nth-child(2) {
  margin: 25px auto;
}

.Countdown>div:nth-child(3) {
  color: rgba(0, 0, 0, 0.54);
  font-size: 15px;
}

.Countdown>div:nth-child(4) {
  margin-top: 28px;
}
</style>
