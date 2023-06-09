<template>
    <HeaderHome :live="1">
    </HeaderHome>
    <div class="liev-home relative">
        <div class="img-1">
            <img
                src="https://image.zhihuishu.com/zhs_yufa_150820/ablecommons/demo/202005/99bf3128ecee488f9256d3a65994bad2.jpg">
        </div>
        <div class="live-course">
            <ul class="min-w-full">
                <li class=" p-0 m-0 pl-44" v-for="item in arr" :key="item">
                    <div class="text-white flex mb-4 mt-4">
                        <el-icon class="c-el-icon mr-2" :size="48" color="#fff">
                            <VideoPlay />
                        </el-icon>
                        <div class="">
                            <span>{{ splitDate(item.liveTime)}}</span>
                            <p>{{ splitTime(item.liveTime) }}-{{ splitTime(item.playEndTime) }}</p>
                        </div>
                    </div>
                    <img class="float-left mr-6"
                        :src="item.livePic">
                    <div class="text-white float-left pt-14 mr-40">
                        <p class="font-semibold mb-2 text-lg whitespace-normal overflow-hidden" > {{ item.liveTitle }}</p>
                        <p class="text-gray-400" :title="item.speakName|item.schoolName">{{item.speakName}}&nbsp;|&nbsp;{{ item.schoolName }}</p>
                    </div>
                    <div class="float-right mt-9">
                        <el-button type="primary" round>未开始</el-button>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>
  
<script setup>
import { VideoPlay } from "@element-plus/icons-vue";
import { courseStore2 } from "../store/liveCourse";
import  mixin  from '../mixins/mixin'
let { splitTime,splitDate } = mixin();
let { getInfo } = courseStore2();
let arr = ref();
let list = async () => {
    arr.value = await getInfo();
    console.log(arr);
}
list();
</script>
<style lang="css">
.img-1 {
    height: 600px;
}

.img-1>img {
    object-fit: cover;
    width: 100%;
    height: 100%;
    border: 0;
    vertical-align: middle;
}

.liev-home {
    width: 100%;
    height: 100%;
    background-color: rgb(29, 29, 29);
}

.live-course {
    width: 1200px;
    height: 100%;
    margin: 0 auto;
}

.live-course>ul {
    width: 100%;
}

.live-course>ul>li {
    width: 100%;
    height: 267px;
}

.live-course>ul>li>img {
    width: 320px;
    height: 180px;
}

.el-button {
    width: 120px;
    height: 44px;
}
</style>