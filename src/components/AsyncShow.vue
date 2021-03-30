<!--
 * @Author: your name
 * @Date: 2021-03-30 14:58:57
 * @LastEditTime: 2021-03-30 15:08:45
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \v3\vue3-1\src\components\AsyncShow.vue
-->
<template>
  <div>
    <h1>{{ result }}</h1>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  setup() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        return resolve({ result: "long" });
      }, 3000);
    });
  }
});
</script>