import { defineStore } from 'pinia'
// import mixin from '../mixins/mixin'
// import {getData} from '../'

export const courseStore2 = defineStore('course', ()=>{


    const getInfo = async ()=>{
      const res =  await  axios({method: 'get',url: "https://appcomm-live.zhihuishu.com/app-commserv-live/web/live/listLiveInfo?livePage=1&playBackPage=0&pageSize=10"})
        return res.data.rt.liveList;
    }

    return {
        getInfo,
    }
})

