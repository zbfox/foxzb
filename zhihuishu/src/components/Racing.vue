<template>
    <div class="top relative">
        <div class="top-background">
        </div>
        <el-carousel class="absolute top-15" trigger="hover" height="400px" :interval="3000" arrow="always" >
            <el-carousel-item v-for="item in lun" :key="item">
                <img class="-z-10" :src="item.img" >
            </el-carousel-item>
        </el-carousel>
    </div>
</template>

<script setup>
const lun = ref([ 
    {
        img:'https://image.zhihuishu.com/zhs/b2cm/advertisingBanner_add/202304/8b5fce4baf04468391c7fdad1624bcb4.jpg'
    },
    {
        img:'../src/assets/img/banner.jpg'
    }
])
</script>

<style scoped>
.top{
    position: relative;
    width: 100%;
    margin: 0 auto;
    z-index: 0;
 
}
.top-background{
    position: absolute;
    width: 100%;
    height: 60px;
    z-index: 2;
    background: linear-gradient(180deg, rgb(0, 0, 0),rgba(107, 107, 107, 0.684));
}
img{
    width: auto;
    height: 396px;
}
</style>
