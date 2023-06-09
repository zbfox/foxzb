<template>
    <HeaderHome :typef="1"></HeaderHome>
    <div class="courseResource">
        <ul class="flex  ">
            <li v-for="(item, index) in courseInfo" class="flex items-center" @click="changeId(index)"
                :class="index === typef3 ? 'active category-name2' : 'category-name'">
                {{ item.name }}
            </li>
        </ul>
        <div class="pt-5 course-content">
            <div class="category-type" v-for="(item, index, idx) in cousListData" :key="idx"
                :class="index === 5 ? 'clear-both' : ''">
                <div v-if="item != null">
                    <span class="item-name">{{ typClass[idx].name }}</span>
                    <span v-for="(data, idxs) in item" :key="idxs" @click="changeTab(idx, idxs)"
                        :class="data.listId === typef2[idx].id ? 'active2' : ''" class="category-name3 text-gray-500">{{
                            data.name
                        }}</span>
                </div>
            </div>
        </div>
        <!-- 课程内容排列 -->
        <div class="course-ul relative">
            <li v-for="(item, index) in courseList" :class="(1 + index) % 5 === 0 ? 'mr-0' : ''" :key="index"
                class="float-left cursor-pointer" @mousemove="item.check = true" @mouseleave="item.check = false">
                <div class="">
                    <img :class="{ 'style-img': item.check }" :src="item.courseCover" />
                    <img :class="{ 'course-ul-icon': item.listCourse === 1 }"
                        src="https://image.zhihuishu.com/zhs/ablecommons/zhangying/202108/7cd96e6c28fc47dfa1782a9bafe74c7c.png"
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
                <p class="text-gray-400 course-title" :title="item.speakName | item.schoolName">
                    {{ item.teacherName }}|{{ item.schoolName }}
                </p>
            </li>
        </div>
    </div>
</template>

<script setup>
import mixin from '../mixins/mixin'
import { courseStore } from '../store/course'
let { addBoole2 } = mixin();
const router = useRoute();
let sroue = courseStore();
let cousListData = ref(null);
let courseList = ref(null);
const typef3 = ref(0);
let typef2 = ref([
    { id: 0 },
    { id: 0 },
    { id: 0 },
    { id: 0 },
    { id: 0 }
]);
const chegeType = () => {
    if (router.query.type >= 0) {
        typef3.value = router.query.type - 1;
    }
}


let typClass = ref([{ name: '分类' }, { name: '类别' }, { name: '学科' }, { name: '学校' }, { name: '排序' }]);
const loadData = async () => {
    const res = await sroue.mygetes;
    cousListData.value = addBoole2(res);
    const res2 = await sroue.getCourseDetail();
    courseList.value = res2;
};
loadData();

let courseInfo = ref([
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
    }
]);
let changeTab = (i, ids) => {
    typef2.value[i].id = ids;
};

let changeId = (id) => {
    typef3.value = id;
};

watchEffect(() => {
    if (router.query.type >= 0) { typef3.value = router.query.type - 1; }
})
chegeType();
</script>

<style lang="css" scoped>
.courseResource {
    padding-top: 75px;
    width: 1280px;
    height: 1800px;
    margin: 0 auto;
}

.category-name {
    height: 32px;
    margin-right: 15px;
    margin-bottom: 20px;
    padding: 0 15px;
}


.category-name2 {
    height: 32px;
    margin-right: 15px;
    margin-bottom: 20px;
    padding: 0 15px;
    color: #fff;
    cursor: pointer;
}

.category-name3 {
    display: inline-block;
    height: 32px;
    line-height: 32px;
    margin-bottom: 20px;
    padding: 0 15px;
    cursor: pointer;
}

.category-name3:hover {
    color: var(--color-blue);
}

.category-name:hover {
    cursor: pointer;
    color: var(--color-blue);
}

.active {
    background-color: #3d84ff;
    border-radius: 16px;
    color: #fff;
}

.active2 {
    background-color: #e2e9f6;
    border-radius: 16px;
    color: #3d84ff;
}

.course-content {
    background-color: #f6f6f6;
    /* border: 1px solid red; */
    border-radius: 15px;
    position: relative;
    padding: 30px 30px 0;
}

.category-type {
    margin: 0;
    padding: 0;
}

.item-name {
    display: inline-block;
    font-size: 16px;
    line-height: 32px;
    margin-right: 24px;
    width: 70px;
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
    z-index: -1;
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