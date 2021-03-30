<!--
 * @Author: your name
 * @Date: 2021-03-25 16:53:15
 * @LastEditTime: 2021-03-25 17:02:07
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \v3\vue3-1\src\components\Modal.vue
-->
<template>
  <teleport to="#modal">
    <div id="center">
      <h2>JSPang11</h2>
    </div>
  </teleport>
</template>
<script lang="ts">
export default {};
</script>
<style>
#center {
  width: 200px;
  height: 200px;
  border: 2px solid black;
  background: white;
  position: fixed;
  left: 50%;
  top: 50%;
  margin-left: -100px;
  margin-top: -100px;
}
</style>