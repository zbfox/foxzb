<template>
  <div class="content">
    <div class="m-nav relative" @mouseleave="isAllShow = false">
      <div class="float-left" v-for="item in img" :key="item">
        <a href="#" class="inline-block h-0 text-xs">
          <img class="nav-img mr-8" :src="item.url" alt="" />
        </a>
      </div>
      <div class="nav-left">
        <ul class="float-left mr-2 cursor-pointer" v-for="item in back" :key="item">
          <!-- {{ item.backg }} -->
          <li class="li" :style="{ backgroundImage: 'url(' + item.url + ')' }"></li>
        </ul>

        <ul class="nav-middle cursor-pointer">
          <li class="nav-left-li float-left" style="line-height: 50px">
            <a href="#" class="font-bold relative">
              <i class="nav-leftul-icon" href=""></i>
              职业专业库
            </a>

            <a class="nav-a text-gray-400" v-for="(item, index) in navLeftInfo" :key="index">{{ item }}</a>
          </li>
          <li class="nav-left-li float-right" style="line-height: 50px">
            <a href="#" class="font-bold relative">
              <i class="nav-leftli-icon" href=""></i>
              微专业
            </a>

            <a class="nav-a text-gray-400" v-for="(item, index) in navLeftIfo2" :key="index">{{ item }}</a>
          </li>
        </ul>
      </div>
      <div class="nav-right float-right" style="width: 103px; height: 120px; padding-top: 10px; padding-left: 10px">
        <div class="div1 cursor-pointer">语言留学</div>
        <span class="nav-right-all" @mousemove="isAllShow = true">更多
          <el-icon class="bg-blue-400 nav-right-icon" color="#fff" :size="18">
            <ArrowRight />
          </el-icon></span>
        <div v-show="isAllShow" class="absolute nav-info-all right-0 bg-white z-10">
          <a href="#" class="float-left inline-block text-center" v-for="item in listAll" :key="item">
            {{ item }}
          </a>
        </div>
      </div>
    </div>
    <Live></Live>
    <CourseClass :url="url1" :listName="listName1"></CourseClass>
    <ChinaClass :url="url2"  :listName="listName2"></ChinaClass>
    <CourseDetails :url="url3" :id="0" :listName="listName3"></CourseDetails>
    <CourseDetails :url="url3" :id="1" :listName="listName4"></CourseDetails>
    <CourseDetails :url="url3" :id="2" :listName="listName5"></CourseDetails>
    <CourseDetails :url="url3" :id="3" :listName="listName6"></CourseDetails>
  </div>
</template>

<script setup>
import { ArrowRight} from "@element-plus/icons-vue";
let img = ref([
  {
    url:
      "https://image.zhihuishu.com/zhs/b2cm/base1/202204/0718ec737b954952af8c8f5b58cd6bbf.png",
  },
  {
    url:
      "https://image.zhihuishu.com/zhs/b2cm/base1/202204/eda0803acfa845f0b22ccc02a39a0205.png",
  },
  {
    url:
      "https://image.zhihuishu.com/zhs/b2cm/base1/202304/06df4fc55b3f4f0dbc276254523b5807.png",
  },
]);

let back = ref([
  {
    url:
      "https://image.zhihuishu.com/zhs_yufa_150820/b2cm/base1/202207/898e4feda665452e9a904da7abaeac56.png",
  },
  {
    url:
      "https://image.zhihuishu.com/zhs_yufa_150820/b2cm/base1/202207/8dfcced893054890a46eb39e67a4564a.png",
  },
  {
    url:
      "https://image.zhihuishu.com/zhs_yufa_150820/b2cm/base1/202207/226ae9ec0b71402c961c6b34e1ec6745.png",
  },
  {
    url:
      "https://image.zhihuishu.com/zhs_yufa_150820/b2cm/base1/202207/2b68c392677a44bd95de29e89b086fc7.png",
  },
  {
    url:
      "https://image.zhihuishu.com/zhs_yufa_150820/b2cm/base1/202207/5d8aee1b82754dc4b8dda66175ab3be4.png",
  },
]);

let navLeftInfo = ref(["智能制造", "新媒体营销", "数字营销"]);
let navLeftIfo2 = ref(["创新创业", "大数据"]);

let isAllShow = ref(false);
let listAll = ref([
  "培训考证",
  "T互联网",
  "兴趣爱好",
  "心理情感",
  "职场发展",
  "健康生活",
  "艺术与设计",
  "历史人文",
  "知到大学",
  "法律政治",
  "金融财会"
]);

let url1 = ref('https://official-web-search.zhihuishu.com/indexPageSearch/virtualCourse');
let url2 =ref('https://precourseservice-api.zhihuishu.com/gateway/f/v1/api/course/queryList/2');
let url3 = ref('https://b2cpush.zhihuishu.com/b2cpush/courseChannel/getCourseDetailsByInterestLabelIds?interestLabelIds=8,5,9,12&enrollmentYear=&gender=&enrollmentYearId=&uuid=&excludeCourseIds=&exchangeInterestLabelId=');

const listName1 = ref("虚拟实验课");
const listName2 =ref("国家金课");
const listName3 =ref("语言留学");
const listName4 =ref('培训考证')
const listName5 =ref('心里情感')
const listName6 =ref('职场发展')
</script>

<style scoped>
.content {
  width: 1280px;
  margin: 0 auto;
  margin-top: 20px;
}

.m-nav {
  height: 140px;
}

.nav-img {
  width: 120px;
  height: 120px;
}

.nav-left {
  float: left;
  width: 720px;
  margin-top: 10px;
  background-size: 136px auto;
}

.nav-left>ul>.li {
  width: 136px;
  height: 50px;
  border-radius: 24.5px;
  background-size: 136px auto;
  margin-top: 10px;
  margin-bottom: 20px;
}

.nav-middle li {
  height: 50px;
}

.nav-left-li {
  text-align: center;
  padding: 0 24px;
  background-color: #fafafa;
  border-radius: 40px;
}

.nav-left-li>a {
  margin-left: 20px;
}

.nav-a:hover {
  color: var(--color-blue);
}

.nav-leftul-icon {
  position: absolute;
  float: left;
  top: -3px;
  left: -22px;
  display: inline-block;
  width: 24px;
  height: 24px;
  background: url(https://image.zhihuishu.com/zhs_yufa_150820/ablecommons/zhangying/202110/12648ab3219140338ad2b850afa38bab.png) no-repeat center center;
  background-size: 20px;
}

.nav-leftli-icon {
  position: absolute;
  float: left;
  top: -3px;
  left: -22px;
  display: inline-block;
  width: 24px;
  height: 24px;
  background: url(https://image.zhihuishu.com/zhs_yufa_150820/ablecommons/zhangying/202110/87dffdda42944ef3932938ae6a9f28e0.png) no-repeat center center;
  background-size: 20px;
}

.nav-right{
  margin-top: 10px;
}
.nav-right>.div1 {
  height: 50px;
  line-height: 50px;
  margin-bottom: 20px;
}

.nav-right-all {
  height: 55px;
  line-height: 55px;
  display: inline-block;
  color: var(--color-blue);
  text-align: center;
  cursor: pointer;
}

.nav-right-icon {
  margin-top: 2px;
  border-radius: 50%;
}

.nav-info-all {
  padding-left: 20px;
  border-radius: 11px;
  box-shadow: 0 0 5px #9c9c9c;
  width: 500px;
}

.nav-info-all>a {
  width: 103px;
  height: 50px;
  line-height: 50px;
}

.nav-info-all>a:hover {
  color: var(--color-blue);
}
</style>
