export default function () {
    const splitTime = (list) => {
        let arr = list.slice(11, 16);
        return arr;
    }

    const addBoole = (item) => {
        let list = null;
        item.forEach(element => {
            element.check = false;
        });
        return item;
    }

    //数值转换，191215===>19.12万人
    const conversion = (num) => {
        let s = num.toString();
        let s2 = s.substring(s.length - 6, s.length - 2)
        let s3 = s2 / 100
        return s3;
    }

    //给每条数据添加一个自定义id，用于选择
    const addBoole2 = (item) => {
        let list = item;
        for (const key in item) {
            if (list[key] != null) {
                list[key].forEach((el, id) => {
                    el.listId = id;
                })
            }
        }
        return list;
    }

    const splitDate = (item) => {
        let it = item.slice(5,10);
        it = it.replace(/(^0)|(?<=^.{3})0/g,''); 
        it = it.replace(/\D/g,'/');
          
        return it;

    }

    return {
        splitTime,
        addBoole,
        conversion,
        addBoole2,
        splitDate
    }
}