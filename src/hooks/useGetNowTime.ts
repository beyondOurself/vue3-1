/*
 * @Author: your name
 * @Date: 2021-03-25 14:28:47
 * @LastEditTime: 2021-03-25 14:58:22
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \v3\vue3-1\src\hooks\useGetNowTime.ts
 */
import { ref } from 'vue'

const nowTime = ref("00:00:00");
const getNowTime = () => {
    const now = new Date();
    const hv = now.getHours();
    const hours = hv < 10 ? "0" + hv : hv;
    const mv = now.getMinutes();
    const minu = mv < 10 ? "0" + mv : mv;
    const sv = now.getSeconds();
    const second = sv < 10 ? "0" + sv : sv;
    nowTime.value = `${hours}:${minu}:${second}`;
    setTimeout(getNowTime, 1000);
};
export { nowTime, getNowTime }