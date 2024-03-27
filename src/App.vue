<script setup>
import { useDark } from '@vueuse/core'
import { ref, watch } from 'vue';

const isDark = useDark()
const showButton = ref(false)
const value = ref('');
const errorInfo = ref('');
const showKeyboard = ref(true);
const ACCESS_TOKEN = '000000';

watch(value, (newVal) => {
  if (newVal.length === 6 && newVal !== ACCESS_TOKEN) {
    errorInfo.value = '密码错误';
    showKeyboard.value = false;
    setTimeout(() => {
      showButton.value = false;
      value.value = '';
    }, 500);
  } else if (newVal.length === 6 && newVal === ACCESS_TOKEN) {
    showButton.value = true;
    showKeyboard.value = false;
  } else {
    errorInfo.value = '';
  }
});

const openDoor = () => {
  showToast({
    message: '开门成功',
    icon: 'like-o',
  });
  setTimeout(() => {
    showButton.value = false;
    value.value = '';
  }, 1800);
}

</script>

<template>
  <van-config-provider :theme="isDark ? 'dark' : 'light'">
    <div class="van-input">
      <van-password-input v-if="!showButton" :value="value" info="密码为 6 位数字" :error-info="errorInfo"
        :focused="showKeyboard" @focus="showKeyboard = true" />
      <van-number-keyboard v-model="value" :show="showKeyboard" @blur="showKeyboard = false" />
      <van-button v-if="showButton" type="primary" size="large" @click="openDoor">芝麻开门</van-button>
    </div>
  </van-config-provider>
</template>

<style>
.van-theme-dark body {
  color: #ffffff;
  background-color: black;
}

.van-input {
  margin: 150px 20px;
  text-align: center;
}
</style>
