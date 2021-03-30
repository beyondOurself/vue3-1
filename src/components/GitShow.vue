<!--
 * @Author: long
 * @Date: 2021-03-30 15:23:32
 * @LastEditTime: 2021-03-30 15:37:28
 * @LastEditors: Please set LastEditors
 * @Description: suspense 组件测试使用
 * @FilePath: \v3\vue3-1\src\components\GitShow.vue
-->
<template>
  <div>
    <img :src="result && result.imgUrl" />
  </div>
</template>
<script lang="ts">
import axios from "axios";
import { defineComponent } from "vue";
export default defineComponent({
  async setup() {
    const rawData = await axios.get(
      "https://apiblog.jspang.com/default/getGirl-1"
    );
    return { result: rawData.data };
  }
});
</script>