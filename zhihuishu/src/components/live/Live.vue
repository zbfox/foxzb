<template>
  <div class="live-cousre">
    <h1 class="live-h1">
      直播课LIVE

      <el-button class="ml-4" size="small" tag="a" target="_blank" @click='linkLive' round>
        更多<el-icon class="el-icon--right">
          <ArrowRightBold />
        </el-icon>
      </el-button>
    </h1>
    <div class="live-line"></div>
    <ul class="live-cousre-info">
      <li :class="index === 4 ? 'mar' : ''" v-for="(item, index) in liveList" :key="item">
        <el-icon class="live-icon" :size="48">
          <VideoPlay />
        </el-icon>
        <div class="text-center h-9 box-border">
          <span class="text-2xl float-left">今天</span>
          <p class="text-red-300 float-left pt-2 pl-3">
            {{ splitTime(item.liveTime) }}-{{ splitTime(item.playEndTime) }}
          </p>
        </div>
        <div>
          <img class="pic-box" :src="item.livePic" alt="" />
          <p class="live-title">{{ item.courseName }}</p>
          <p class="live-name text-gray-400">
            {{ item.speakName }} | {{ item.schoolName }}
          </p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { VideoPlay, ArrowRightBold } from "@element-plus/icons-vue";
import mixin from "../../mixins/mixin";
let liveList = ref(null);
let { splitTime } = mixin();
let j = Math.floor(Math.random() * 4)
const router = useRouter();

onBeforeMount(() => {
  axios
    .get(
      "https://appcomm-live.zhihuishu.com/app-commserv-live/web/live/listLiveInfo?livePage=1&playBackPage=0&pageSize=10"
    )
    .then(
      // 成功回调
      (success) => {
        // 请求成功后的数据
        let list = success.data.rt.liveList;
        liveList.value = list.slice(j, j + 5);
      },
      // 失败回调
      (error) => {
        console.log("请求失败！");
        // 请求失败原因
        console.log(error.message);
      }
    );
});
let linkLive = () => {
  router.push({
    path: '/live'
  })
}
</script>

<style scoped>
.live-cousre-info>li {
  top: -26px;
  float: left;
  width: 240px;
  margin-right: 20px;
  position: relative;
}

.pic-box {
  width: 240px;
  height: 135px;
  margin: 6px 0;
  border-radius: 4px;
}

.live-cousre-info>li>div:hover {
  cursor: pointer;
}

.live-cousre-info>li::before {
  width: 240px;
  height: 5px;
  clear: "";
  border-top: 2px solid gainsboro;
  border-radius: 5px 5px 0 0;
}

.live-cousre-info>.mar {
  margin-right: 0px;
}

.live-cousre {
  margin: 0 auto;
  margin-top: 30px;
  overflow: hidden;
  clear: both;
}

.live-h1 {
  font-size: 30px;
  line-height: 42px;
}

.live-line {
  background-color: aquamarine;
  border-radius: 2px;
  height: 4px;
  margin-top: 42px;
}

.live-icon {
  background-color: white;
  color: rgb(163, 91, 231);
  border-radius: 50%;
}

.live-cousre-info {}

.live-title {
  margin-top: 10px;
  line-height: 24px;
  width: 100%;
  line-height: 24px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.live-title:hover {
  color: var(--color-blue);
}

.live-name {
  display: inline-block;
  white-space: nowrap;
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-top: 10px;
  line-height: 20px;
}
</style>
