<template>
  <div class="style-two">
    <h1 class="live-h1">
      {{ columnName }}
      <el-button class="ml-4" size="small" tag="a" target="_self" href="" round>
        更多<el-icon class="el-icon--right">
          <ArrowRightBold />
        </el-icon>
      </el-button>
    </h1>
    <div class="two-left cursor-pointer relative" @mousemove="courseArr[0].check = true" @mouseleave="courseArr[0].check = false"
    v-for="(arr,index) in courseArr" :key="index"
    >
      <div class="two-lef-img">
        <img class="img-two" :class="{ 'style-img': arr.check }"
          :src="arr.courseCover"
          alt="" />
        <div class="absolute" :class="{ maskLayer: arr.check }">
          <el-icon class="c-el-icon" :size="48" color="#fff">
            <VideoPlay />
          </el-icon>
        </div>
      </div>
      <div>
        <p class="text-2xl pl-5 pt-3 two-title" :title="arr.courseName">{{arr.courseName }}</p>
       <p class="text-sm pl-5 pt-3 text-gray-400" :title="arr.teacherName| arr.schoolName">
          {{arr.teacherName}}|{{ arr.schoolName }}
         </p> 
        <p class="text-sm mb-5 mt-7 pl-5" style="color: #777777">
          选课人数&nbsp;&nbsp;&nbsp;&nbsp;{{ conversion(arr.studentCount)}}万人
        </p>
      </div>
    </div>
    <ul class="two-right">
      <li v-for="(item, index) in courseList" @mousemove="item.check = true" @mouseleave="item.check = false" 
        :class="index === 2 || index === 5 ? 'mr-0' : ''" :key="index">
        <div class="tr-title">
          <img :class="{ 'style-img': item.check }"
         
          :src="item.courseCover"
            alt="" />
          <div class="absolute" :class="{ maskLayer2: item.check }">
            <el-icon class="two-right-icon" :size="48" color="#fff">
              <VideoPlay />
            </el-icon>
          </div>
        </div>
        <p class="text-sm pt-3 two-title" :title="item.courseName"> {{ item.courseName }}</p>
        <p class="text-sm pt-2 text-gray-400" :title="item.teacherName | item.schoolName"> {{ item.teacherName }} | {{
          item.schoolName }}</p>
      </li>
    </ul>
  </div>
</template>

<script setup>
// 导入elmentui
import { VideoPlay, ArrowRightBold } from "@element-plus/icons-vue";
import mixin from '../../mixins/mixin'

let { addBoole,conversion } = mixin();
const pops = defineProps({
  url: String,
  listName: String,
});

let courseList = ref(null);
let courseArr = ref('');
let columnName = pops.listName;
let x=Math.floor(Math.random()*3)

axios({
  method: 'post',
  url: pops.url,
  headers: {
    "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
    // "Host": "precourseservice-api.zhihuishu.com",
    'Accept': 'application/json, text/javascript, */*; q=0.01',
    // 'Content-Length': '14'
  }
}).then(
  (res) => {
    courseList.value = addBoole(res.data.data.slice(5, 11));
    courseArr.value = addBoole(res.data.data.slice(x,x+1));
    // console.log(courseArr.value)
  }
)

</script>

<style scoped>
.style-two {
  margin: 0 auto;
  margin-top: 30px;
  overflow: hidden;
}

.live-h1 {
  font-size: 30px;
  line-height: 42px;
}

.two-left {
  float: left;
  width: 500px;
  height: 428px;
  background-color: #f6f6f6;
  border-radius: 4px;
  margin-right: 20px;
  margin-top: 20px;
}

.maskLayer {
  width: 500px;
  height: 280px;
  top: 0;
  z-index: 3;
  background-color: rgba(0, 0, 0, 0.3);
  cursor: pointer;
}

.c-el-icon {
  top: 41%;
  left: 225px;
  z-index: -1;
}

.two-lef-img {
  border-radius: 5px 5px 0 0;
  width: 500px;
  height: 280px;
  overflow: hidden;
}

.two-lef-img>.img-two {
  width: 500px;
  height: 280px;
  transition: all 0.4s linear;
}

.style-img {
  transform: scale(1.2);
}

.two-title{
  width: 240px;
  line-height: 24px;
  margin-top: 10px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.two-title:hover {
  color: var(--color-blue);
}

.two-right>li {
  float: left;
  height: 200px;
  width: 240px;
  position: relative;
  cursor: pointer;
  margin-right: 20px;
  margin-top: 20px;
}

.mr-0 {
  margin-right: 0px !important;
}

.tr-title {
  width: 240px;
  height: 135px;
  overflow: hidden;
  border-radius: 5px;
}

.tr-title>img {
  width: 240px;
  height: 135px;
  transition: all 0.4s linear;
}

.maskLayer2 {
  width: 240px;
  height: 135px;
  top: 0;
  z-index: 3;
  background-color: rgba(0, 0, 0, 0.3);
  cursor: pointer;
}

.two-right-icon {
  top: 30%;
  left: 95px;
  z-index: -1;
}
</style>
