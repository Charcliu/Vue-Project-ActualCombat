<template>
<div class="notFound">
  <div class="text">{{msg}}</div>
  <mt-switch v-model="value" @change="switchButton"></mt-switch>
  <el-row>
    <el-col :span="24">
      <div class="grid-content bg-purple-dark"></div>
    </el-col>
  </el-row>
  <el-row>
    <el-col :span="12">
      <div class="grid-content bg-purple"></div>
    </el-col>
    <el-col :span="12">
      <div class="grid-content bg-purple-light"></div>
    </el-col>
  </el-row>
  <el-row>
    <el-col :span="8">
      <div class="grid-content bg-purple"></div>
    </el-col>
    <el-col :span="8">
      <div class="grid-content bg-purple-light"></div>
    </el-col>
    <el-col :span="8">
      <div class="grid-content bg-purple"></div>
    </el-col>
  </el-row>
  <el-row>
    <el-col :span="6">
      <div class="grid-content bg-purple"></div>
    </el-col>
    <el-col :span="6">
      <div class="grid-content bg-purple-light"></div>
    </el-col>
    <el-col :span="6">
      <div class="grid-content bg-purple"></div>
    </el-col>
    <el-col :span="6">
      <div class="grid-content bg-purple-light"></div>
    </el-col>
  </el-row>
  <el-row>
    <el-col :span="4">
      <div class="grid-content bg-purple"></div>
    </el-col>
    <el-col :span="4">
      <div class="grid-content bg-purple-light"></div>
    </el-col>
    <el-col :span="4">
      <div class="grid-content bg-purple"></div>
    </el-col>
    <el-col :span="4">
      <div class="grid-content bg-purple-light"></div>
    </el-col>
    <el-col :span="4">
      <div class="grid-content bg-purple"></div>
    </el-col>
    <el-col :span="4">
      <div class="grid-content bg-purple-light"></div>
    </el-col>
  </el-row>
</div>
</template>

<script>
import {
  Toast
} from 'mint-ui';

export default {
  name: 'NotFound',
  data() {
    return {
      msg: 'Not Found Page',
      value: false
    }
  },
  // 测试axios和proxyTable代理转发
  mounted: function() {
    this.$http({
        method: 'get',
        url: '/home/helloSpring',
      }).then(function(res) {
        console.log(res)
      })
      .catch(function(err) {
        console.log(err)
      })
  },
  methods: {
    switchButton: function() {
      // Toast('提示信息');
      Toast({
        message: '操作成功',
        iconClass: 'icon icon-success'
      });
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.notFound {
  position: fixed;
  left: 0px;
  top: 0px;
  height: 100%;
  width: 100%;
}

.text {
  position: absolute;
  height: 60px;
  top: 50%;
  left: 50%;
  margin-top: -30px;
  margin-left: -200px;
  font-size: 40px;
  width: 400px;
  text-align: center;
}

.el-row {
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
}

.el-col {
  border-radius: 4px;
}

.bg-purple-dark {
  background: #99a9bf;
}

.bg-purple {
  background: #d3dce6;
}

.bg-purple-light {
  background: #e5e9f2;
}

.grid-content {
  border-radius: 4px;
  min-height: 36px;
}

.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
</style>
