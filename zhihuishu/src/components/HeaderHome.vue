<template>
  <div ref="hande" class="bg-in" :style="typef === 0 ? style : style1">
    <div class="m-home flex items-center justify-between pt-3">
      <div>
        <a class="w-48 z-10" @click="goTO">
          <img class="w-min" :src="typef === 0 ? img1 : img[0]" />
        </a>

      </div>
      <div class="relative float-left z-10" @mouseleave="show = false">
        <div class="div-h">
          <span @mouseover="show = true" class="m-dropdown text-base text-center">
            全部频道<el-icon class="el-icon--right">
              <ArrowDownBold />
            </el-icon>
          </span>
        </div>
        <div @mouseleave="show = false" style=" height: 200px; position: absolute">
          <el-collapse-transition>
            <div class="m-all-list" style="color: black" v-show="show">
              <p class="m-li" v-for="(item, index) in courseInfo" :class="index === 8 ? 'text-amber-400 mb-1' : ''">
                <a @click="goCourse(item.type)">
                  {{ item.name }}
                </a>
              </p>
            </div>
          </el-collapse-transition>
        </div>
      </div>
      <div class="relative m-search z-10 flex items-center">
        <input class="w-96 boder-r absolute m-search" type="text" placeholder="请搜索课程/老师/学校" />
        <el-button class="w-max max-h-11 absolute right-1" :size="44" type="primary" :icon="Search" round>搜索</el-button>
      </div>
      <div class="clear-both"></div>
      <ul class="flex justify-betwee z-10" v-if="true">
        <li class="flex flex-col items-center w-14 mr-2 ml-2" v-for="item in titleName" :key="item.id">
          <a href="#" class="m-icon">
            <el-icon :size="22">
              <User />
            </el-icon>
          </a>
          <span class="text-xs">{{ item }}</span>
        </li>
      </ul>
    </div>
  </div>
  <div class="fixed coursefix" :style="live_select === 1 ? background3 : ''">
    <ul>
      <li :class="live_select === 1 ? 'livek' : ''"><el-icon :size="22">
          <Headset />
        </el-icon></li>
      <li :class="live_select === 1 ? 'livek' : ''"><el-icon :size="22">
          <Comment />
        </el-icon></li>
      <li :class="live_select === 1 ? 'livek' : '' "><el-icon :size="22">
          <Menu />
        </el-icon></li>
      <li @click="runTop" :class="live_select === 1 ? 'livek' : ''"><el-icon :size="22">
          <Upload />
        </el-icon></li>
    </ul>
  </div>
</template>

<script setup>
import { ArrowDownBold, Search, User, Headset, Comment, Menu, Upload } from "@element-plus/icons-vue";
let pops = defineProps({
  typef: {
    type: Number,
    default: 0,
  },
  live: {
    type: Number,
    default: 0
  }
});
let router = useRouter();
let typef = ref(pops.typef);
let input = ref("");
let show = ref(false);
let hande = ref(null);
let style = ref({
  boxShadow: 'rgba(175, 175, 175, 0.05) 0px 10px 10px 0px',
  background: 'none',
  color: ''
});

let live_select = ref(pops.live);


let background3 = ref({
  backgroundColor: '#333333'
});

let style1 = ref({
  boxShadow: 'rgba(175, 175, 175, 0.05) 0px 10px 10px 0px',
  background: 'rgb(255,255,255,0.95)',
  color: ''
})
let img = ref(['https://www.zhihuishu.com/assets/images/home-logo-light.png',
  'https://www.zhihuishu.com/assets/images/home-logo-dark.png']);

let img1 = ref('');
let titleName = ref(['同步课堂', '切换模式', 'APP下载', '我的学堂', '登陆下载']);
let background1 = ref('rgb(255,255,255)');
let courseInfo = ref([
  {
    type: '0',
    name: '直播'
  },
  {
    type: '1',
    name: '大学共享课'
  }, {
    type: '2',
    name: '研究生共享课'
  }, {
    type: '3',
    name: '职业教育课'
  }, {
    type: '4',
    name: '虚拟实验课'
  }, {
    type: '5',
    name: '社会实践课'
  }, {
    type: '6',
    name: '兴趣课'
  }, {
    type: '-1',
    name: '微专业'
  }, {
    type: '-2',
    name: '会员精选'
  }
]);



// 获取滚轮事件

let { x, y } = useWindowScroll();
watch(() => {
  if (y.value > 80) {
    style.value.background = background1.value;
    style.value.color = '#000'
    img1.value = img.value[0];
  } else {
    let background2 = ref('none')
    style.value.background = background2.value;
    style.value.color = '#fff';
    img1.value = img.value[1];
  }
});
let runTop = () => {
  // window.scrollTo(0,0)
  //获取当前页面的滚动条纵坐标位置
  let top = document.documentElement.scrollTop || document.body.scrollTop
  // 实现滚动效果
  let timeTop = setInterval(() => {
    document.body.scrollTop = document.documentElement.scrollTop = top -= 50
    if (top <= 0) {
      clearInterval(timeTop)
    }
  }, 10)
}

let goTO = () => {
  router.push(
    { path: '/home' }
  )
}

let goCourse = (ty) => {
  router.push(
    { path: '/courseResource', query: { type: ty } }
  );
}
</script>

<style lang="css" scoped>
.block-col-2 .demonstration {
  display: block;
  color: var(--el-text-color-secondary);
  font-size: 14px;
  margin-bottom: 20px;
}

.m-home {
  width: 1400px;
  margin: 0 auto;
}

.m-home a {
  cursor: pointer;
}

.el-button {
  width: 93px;
}

.div-h {
  height: 56px;
  line-height: 56px;
  width: 112px;
}

.m-dropdown {
  display: inline-block;
  width: 112px;
  height: 32px;
  border-radius: 16px;
  background-color: #9c9c9c7a;
  line-height: 32px;
  cursor: pointer;
}

.m-li {
  margin-left: 0px;
  margin-right: 0px;
  padding: 10px 0px;
  text-align: center;
}

.m-li:hover {
  cursor: pointer;
  background-color: #ececec;
}

.m-all-list {
  padding: 2px 0;
  width: 200px;
  margin-top: 0px;
  overflow: hidden;
  box-sizing: border-box;
  border-radius: 11px;
  box-shadow: 0 0 5px #9c9c9c;
  background: #fff;
}

.m-search {
  height: 44px !important;
  box-sizing: border-box;
  width: 520px;
}

.bg-in {
  width: 100%;
  min-width: 1400px;
  z-index: 20;
  position: fixed;
  top: 0px;
}

.w-min {
  width: 200px;
  height: auto;
}

.boder-r {
  background: #9c9c9c57;
  padding-left: 30px;
  border-radius: 30px;
  outline: none;
}

.m-icon {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 32px;
  height: 32px;
  background: #c1c1c1;
  border-radius: 50%;
  color: #9c9c9c;
  transition: all 0.2s linear;
}

.m-icon:hover {
  color: wheat;
  background-color: #2062d2fa;
}

.coursefix {
  z-index: 25;
  top: 40%;
  right: 10px;
  width: 40px;
  padding-top: 5px;
  padding-bottom: 5px;
  text-align: center;
  cursor: pointer;
  background-color: #fff;
  box-shadow: 0 0 5px #bcbbbb;
  border-radius: 20px;
}

.coursefix>ul {
  padding: 10px 0px;
}

.coursefix>ul>li {
  width: 40px;
  height: 35px;
  line-height: 45px;
  color: rgb(156, 156, 156);
}

.livek:hover {
  background-color: #1a1919;
}
</style>
