/*
 * @Author: your name
 * @Date: 2021-03-25 16:27:51
 * @LastEditTime: 2021-03-25 16:36:12
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \v3\vue3-1\src\hooks\useGetBeautyUrl.ts
 */
import { ref } from 'vue'
import axios from 'axios'
function userUrlAxios(url: string) {

    const result = ref(null)
    const loading = ref(true)
    const loaded = ref(false)
    const error = ref(false)

    axios.get(url).then(res => {
        loading.value = false
        loaded.value = true
        result.value = res.data
    }).catch(e => {

        error.value = e
        loading.value = false
    })
    return { result, loading, loaded, error }
}

export default userUrlAxios
