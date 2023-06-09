<template>
  <div class="style-one">
    <h1 class="live-h1">
      {{ columnName }}
      <el-button class="ml-4" size="small" tag="a" target="_self" href="" round>
        更多<el-icon class="el-icon--right">
          <ArrowRightBold />
        </el-icon>
      </el-button>
    </h1>
    <ul class="course-ul relative">
      <li v-for="(item, index) in courseList" :class="index === 4 ? 'mr-0' : ''" :key="index"
        class="float-left cursor-pointer" @mousemove="item.check = true" @mouseleave="item.check = false">
        <div class="">
          <img :class="{ 'style-img': item.check }" :src="item.crossPageImageUrl" />
          <img :class="{ 'course-ul-icon': item.listCourse === 1 }"
            src="https://image.zhihuishu.com/zhs_yufa_150820/ablecommons/zhangying/202106/f03528f310a747f1940794c555c6e59b.png"
            alt="" />
          <div class="absolute" :class="{ maskLayer: item.check }">
            <el-icon class="c-el-icon" :size="48" color="#fff">
              <VideoPlay />
            </el-icon>
          </div>
        </div>
        <p class="course-title course-title-1" :title="item.courseName">
          {{ item.courseName }}
        </p>
        <p class="text-gray-400 course-title" title="  item.speakName  |  item.schoolName ">
          <span v-if="item.speakerName">{{ item.speakerName }}|</span> {{ item.schoolName }}
        </p>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { VideoPlay, ArrowRightBold } from "@element-plus/icons-vue";
import mixin from '../../mixins/mixin'
let { addBoole } = mixin();
const pops = defineProps({
  // ["listCourse", "listName"]
  id: Number,
  url: String,
  listName: String,
});

let courseList = ref(null);
let columnName = pops.listName;
let i = pops.id;
let x = Math.floor(Math.random() * 50)

axios({
  method: 'get',
  url: pops.url,
}).then(
  (res) => {
    if (i === 0) {
      courseList.value = addBoole(res.data.rt[i].dataDataiList);
    } else {
      courseList.value = addBoole(res.data.rt[i].dataDataiList.slice(0, 5));
    }
  }
)
</script>

<style scoped>
.style-one {
  margin: 0 auto;
  margin-top: 30px;
  overflow: hidden;
  clear: both;
}

.live-h1 {
  font-size: 30px;
  line-height: 42px;
}

.course-ul {
  height: 255px;
}

.course-ul>li {
  position: relative;
  margin-right: 20px;
  float: left;
  height: 200px;
  margin-top: 20px;
}

.course-ul>.mr-0 {
  margin-right: 0px;
}

.course-ul>li>div {
  width: 240px;
  height: 135px;
  overflow: hidden;
  border-radius: 16px;
  border-radius: 4px;
}

.course-ul>li>div>img:first-child {
  cursor: pointer;
  width: 240px;
  height: 135px;
  transition: all 0.2s linear;
}

.style-img {
  transform: scale(1.2);
}

.course-ul-icon {
  position: absolute;
  top: 0px;
  left: 0px;
  width: 46px;
  height: 18px;
  z-index: 4;
}

.maskLayer {
  width: 240px;
  height: 135px;
  top: 0;
  z-index: 2;
  background-color: rgba(0, 0, 0, 0.3);
  cursor: pointer;
}

.c-el-icon {
  top: 35%;
  left: 100px;
  z-index: -10;
}

.course-title {
  width: 240px;
  line-height: 24px;
  margin-top: 10px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.course-title-1:hover {
  color: var(--color-blue);
}
</style>
