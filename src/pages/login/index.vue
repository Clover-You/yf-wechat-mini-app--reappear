<!--
* <p>
* 登录页
* </p>
*
* @version: v1.0
* @author: Clover
* @create: 2022-11-01 15:00
-->
<script setup lang="ts">
// import Taro from '@tarojs/taro'

import { ref } from 'vue';

// const doLogin = () => {
//   console.log('hello world');
//   Taro.login({
//     success: (s) => {
//       console.log(s);
//     }
//   })
// }

const loading = ref(true)

const getPhoneNumber = (e) => {
  loading.value = true
  console.log(e);
  
}
</script>
<template>
  <nut-popup :style="{ padding: '30px 50px' }" round v-model:visible="loading" :z-index="100" :overlay="true">
    <nut-icon name="loading" class="nut-icon-am-infinite"/>
  </nut-popup>
  <view class="login-box">
    <!-- <nut-icon name="loading1"></nut-icon> -->
    <nut-button type="primary" block size="large"  open-type="getPhoneNumber" @getphonenumber="getPhoneNumber">登录</nut-button>
  </view>
</template>
<style lang="less" >
.login-box {
  padding: 40rpx;
  top: 50%;
  position: absolute;
  width: 100%;
  box-sizing: border-box;
  transform: translateY(-50%);
}
</style>
