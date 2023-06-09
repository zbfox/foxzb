export const getData = async()=>{
    await get();
}

async function get(){
    axios({
        method:'get',
        url: 'https://precourseservice-api.zhihuishu.com/gateway/f/v1/api/course/queryClassify?uuid=&dateFormate=1685797839000',
    }).then((res)=>{
        return res.data.data;
    })
}