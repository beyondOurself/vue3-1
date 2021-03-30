<!--
 * @Author: your name
 * @Date: 2021-03-24 15:55:23
 * @LastEditTime: 2021-03-25 16:58:13
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \v3\vue3-1\src\App.vue
-->
<template>
  <div>
    <!-- <img alt="Vue logo" src="./assets/logo.png" />
    <div>选择一位二愣子为您服务</div>
    <div>
      <Button
        v-for="(item, index) in erlenzis"
        :key="index"
        @click="selectElz(index)"
      >
        {{ item }}
      </Button>
    </div>
    <div>您选择了【{{ erlenzi }}】</div>
    <div>
      <button @click="updateOverText">确认点餐</button>
    </div>
    <span>{{ overTextRef }}</span>
         
         -->
    <!-- <div><button @click="getNowTime">开始时间</button></div>
    <div>{{ nowTime }}</div> -->
    <!-- <div v-if="loading">正在加载中</div>
    <div v-if="loaded">
      <img :src="result.imgUrl" />
    </div> -->
    <modal></modal>
  </div>
</template>
<script lang="ts">
import modal from "./components/Modal.vue";
import { nowTime, getNowTime } from "./hooks/useGetNowTime";
import userUrlAxios from "./hooks/useGetBeautyUrl";
import {
  onBeforeMount,
  onBeforeUnmount,
  onBeforeUpdate,
  onMounted,
  onRenderTracked,
  onRenderTriggered,
  onUnmounted,
  onUpdated,
  reactive,
  ref,
  toRefs,
  watch
} from "vue";

interface DataProps {
  erlenzis: string[];
  erlenzi: string;
  selectElz: (index: number) => void;
}

export default {
  name: "App",
  components: {
    modal
  },
  setup() {
    const data: DataProps = reactive({
      erlenzis: ["狗娃", "狗蛋", "狗剩"],
      erlenzi: "",
      selectElz: (index: number) => {
        data.erlenzi = data.erlenzis[index];
      }
    });
    const refData = toRefs(data);

    onBeforeMount(() => {
      console.log("组件挂载之前执行");
    });
    onMounted(() => {
      console.log("组件挂载之后执行");
    });
    onBeforeUpdate(() => {
      console.log("组件更新之前执行");
    });
    onUpdated(() => {
      console.log("组件更新之后执行");
    });
    onBeforeUnmount(() => {
      console.log("组件卸载之前执行");
    });
    onUnmounted(() => {
      console.log("组件卸载之后执行");
    });
    // onRenderTracked(event => {
    //   console.log(event);
    //   console.log("状态跟踪*******");
    // });
    onRenderTriggered(event => {
      console.log("状态精确跟踪********");
      console.log(event);
    });
    const overTextRef = ref("红浪漫");
    const updateOverText = () => {
      overTextRef.value = `点餐完成|${data.erlenzi}`;
    };
    watch(overTextRef, (nv, ov) => {
      document.title = nv;
    });

    const { result, loading, loaded, error } = userUrlAxios(
      "https://apiblog.jspang.com/default/getGirl"
    );

    return {
      ...refData,
      overTextRef,
      updateOverText,
      nowTime,
      getNowTime,
      result,
      loading,
      loaded,
      error
    };
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
