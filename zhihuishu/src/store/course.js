import { defineStore } from 'pinia'


export const courseStore = defineStore('course', {
    state: () => { return { courseTagDtos: [] } },
    getters: {
        mygetes() {
            return this.getInfo();
        },
        mygetDetails(){
            return this.getCourseDetail();
        }
    },
    actions: {
         getInfo() {
            // let { addBoole } = mixin();
            return axios({
                method: 'get',
                url: "https://precourseservice-api.zhihuishu.com/gateway/f/v1/api/course/queryClassify?uuid=&dateFormate=1685797839000",
            }).then((res)=>{
               return res.data.data;
            });
        },
        getCourseDetail(){
            return axios({
                method:'get',
                url:' https://official-web-search.zhihuishu.com/indexPageSearch/shareCourse?family=-1&coursePackageId=-1&zhsmCourseCategory=-1&subjectFirstCode=-1&schoolLevel=-1&orderRuler=-1&pageNo=0&pageSize=60&zhsmCourseCategoryTag=-1&uuid=&dateFormate=1685857920000'
            }).then((res)=>{
                return res.data.rt;
            });
        }

    }

})