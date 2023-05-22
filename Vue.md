# Vue

Vue (发音为 /vjuː/，类似 **view**) 是一款用于构建用户界面的 JavaScript 框架。它基于标准 HTML、CSS 和 JavaScript 构建，并提供了一套声明式的、组件化的编程模型，帮助你高效地开发用户界面。无论是简单还是复杂的界面，Vue 都可以胜任。



Vue 是一个框架，也是一个生态。其功能覆盖了大部分前端开发常见的需求。但 Web 世界是十分多样化的，不同的开发者在 Web  上构建的东西可能在形式和规模上会有很大的不同。考虑到这一点，Vue  的设计非常注重灵活性和“可以被逐步集成”这个特点。根据你的需求场景，你可以用不同的方式使用 Vue：

- 无需构建步骤，渐进式增强静态的 HTML
- 在任何页面中作为 Web Components 嵌入
- 单页应用 (SPA)
- 全栈 / 服务端渲染 (SSR)
- Jamstack / 静态站点生成 (SSG)
- 开发桌面端、移动端、WebGL，甚至是命令行终端中的界面

## Object.defineProperty技术

```
<script type="text/javascript">
		let number = 18;
		let person = {
			name: "张三",
			sex: "男"
		}

		Object.defineProperties(person, "age" {
			value: 18,
			enumerator: true, //控制属性是否可以枚举，默认false
			writable: true, //控制属性是否可以被修改，默认false
			configurable: true, //控制属性是否可以被删除，默认是false

			//当有人读取person的age属性时，get函数（getter）就会被调用，且返回值就是age的
			get() {
				console.log("有人读取了age属性")
				return number
			}
			//当修改person的值的时候就会调用set函数（setter）就会被调用，收到修改的具体值

			set(value) {
				console.log("有人修改了age属性",value)
				number= value
			}
		})
	</script>
```



## 基础

全局构建版本

```
<script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>

<div id="app">{{ message }}</div>

<script>
  const { createApp } = Vue
  
  createApp({
    data() {
      return {
        message: 'Hello Vue!'
      }
    }
  }).mount('#app')
</script>


```

  

2.使用new Vue（）

```
// $el挂载在#app上
new Vue({
  el: '#app',
  data: obj
})

// $mount挂载在app上
const app = new Vue({
  data: obj
})
app.$mount('#app');

// 这样app就可以使用Vue的全局注册的组件，以及组件实例的components中的组件。
new Vue({
  el: '#app',
  components: {
    'component-a': ComponentA,
    'component-b': ComponentB
  }
})

```



3.使用new==构造器==

```
var Comp = Vue.extend({
  props: ['msg'],
  template: '<div>{{ msg }}</div>'
})

// el挂载，如果构造器有需要的props，则在new中通过propsData传入
var vm = new Comp({
  el:'#app',
  propsData: {
    msg: 'hello'
  }
})

// $mount挂载
new Comp().$mount('#app');

```



## 语法

```vue
<script src="../vue/vue.js"></script>
	<body>
		<div id="app">
			<template v-if="notice">
				<h1>通知</h1>
				<p>限时免运费</p>
				<p>全场5折庆祝</p>
				<p>{{name}}</p>
			</template>
			<button v-on:click="cik ">button</button>
		</div>
	</body>

	<script>
		new Vue({
			el: "#app",
			data: {
				notice: false,
				name: "李四"
			},
			methods: {
			//方法
				cik: function() {
					this.notice = true
				}
			}
		})
	</script>
```

el：挂载点

文本插值

==<p>{{name}}</p>==

双大括号标签会被替换为相应组件实例中 `name`属性的值。同时每次 `name` 属性更改时它也会同步更新。

#### 事件修饰符

`.prevent`:阻止默认事件(常用)

`.stop`:阻止事件冒泡(常用)

`.once`：事件只能触发一次(常用)

`.capture` - 阻止捕获

`.self` - 只监听触发该元素的事件

`.left` - 左键事件

`.right` - 右键事件

`.middle` - 中间滚轮事件

`.passive`：事件默认行为立即执行，无需等待事件回调,直接执事件

```html
<!-- 阻止单击事件冒泡 -->
<a v-on:click.stop="doThis"></a>
<!-- 提交事件不再重载页面 -->
<form v-on:submit.prevent="onSubmit"></form>
<!-- 修饰符可以串联  -->
<a v-on:click.stop.prevent="doThat"></a>
<!-- 只有修饰符 -->
<form v-on:submit.prevent></form>
<!-- 添加事件侦听器时使用事件捕获模式 -->
<div v-on:click.capture="doThis">...</div>
<!-- 只当事件在该元素本身（而不是子元素）触发时触发回调 -->
<div v-on:click.self="doThat">...</div>

<!-- click 事件只能点击一次，2.1.4版本新增 -->
<a v-on:click.once="doThis"></a>
```

==当绑定 v-on:click 事件时，想传入参数同时也传入当前元素：==

Vue提供了内置变量，名字叫做==`$event`==，就是原生的DOM的事件对象==`e`==

事件对象`$event`

```javascript
<button v-on:click="say('hi',$event)">say hi</button>

methods:{
  say:function(message,e){
     alert(message);
     console.log(e.currentTarget);
  }
}
```



#### 按键修饰符

Vue 允许为 v-on 在监听键盘事件时添加按键修饰符：

```html
<!-- 只有在 keyCode 是 13 时调用 vm.submit() -->
<input v-on:keyup.13="submit">
```

实例：

组合键

```html
<!-- Alt + C -->
<input @keyup.alt.67="clear">
<!-- Ctrl + Click -->
<div @click.ctrl="doSomething">Do something</div>
```

## 计算属性

我们可以使用 `methods` 来替代 `computed`，效果上两个都是一样的，但是 computed 是基于它的依赖缓存，只有相关依赖发生改变时才会重新取值。而使用 methods ，在重新渲染的时候，函数总会重新调用执行。

```javascript
computed: {	// 计算属性的特性就是把不经常改变值的方法结果放在缓存中,减少系统开销
		     DateTimeFunction:function() {
				return Date.now()
		 }
}
```

如果计算属性需要被修改，那必须写set函数去响应修改，且set中 要引起计算时的依赖的数据发生变化

```html
<body>
    <div id="app">
        姓名<input type="text" v-model="name">
        地址<input type="text" v-model="address">
        <p>{{fullName}}</p>
    </div>
</body>
<script src="../vue/vue.js"></script>
<script>
    var vm = new Vue({
        el: "#app",
        data: {
            name: "张三",
            address: "兰州"
        },
        computed: {
            fullName: {
                get() {
                    //get函数当有值被调用时执行
                    console.log("被调用了")
                    return this.name + "," + this.address
                },
                set() {
                    //修改fullName的返回值时执行set函数
                    console.log("set被修改了")
                    return this.name + "," + this.address
                }
            }
        }
    })
```



控制台输入：

`vm.fullName="wangzhu"`

![image-20230330200432619](C:\Users\Hryi\AppData\Roaming\Typora\typora-user-images\image-20230330200432619.png)

![image-20230330200453106](C:\Users\Hryi\AppData\Roaming\Typora\typora-user-images\image-20230330200453106.png)

**简写形式**

只使用于不修改属性的方法

```javascript
computed: {
        fullName(){
                    console.log("被调用了")
                    return this.name + "," + this.address

                  }
}
```

## 监视属性

watch：监视

 通过watch 来响应数据的变化。

1.当监视属性的值发送变化时，回调函数自动调用，进行相关操作

2.监视的属性必须存在，才能进行监视
3.监视的两种方法：

​      （1） .new Vue时传入watch配置 

​      （2） .通过vm.$watch监视

```javascript
     computed: {
        info(){
            return this.inHost ? "炎热":"凉爽"
        }
        },
        methods: {
            changeWater(){
                this.inHost = !this.inHost
                this.x++
            }
        },
        watch:{//监视数据的变化
            info:{
              handler(newValue,oldValue){
                  //当监视属性变化时调用handler函数
                // newValue:新的值  oldValue：旧的值
                console.log("info被修改了",newValue,oldValue)
              }
            }
        }
      
    })
      //另外写法,当项目初始不知道监视那个属性时书写，后期直接添加被监视的属性即可
      vm.$watch('info',{
        handler(newValue,oldValue){
                // newValue:新的值  oldValue：旧的值
                console.log("info被修改了",newValue,oldValue)
              }
      })
```

## 深度监视

用于多级结构下所有数据的值的监视

```javascript
数据：
data: {
            inHost: true,
            x: 1,
            number: {
                a: 1,
                b: 1
            }
        }, 

//监视多级结构中所有数据属性的改变,开启深度监视deep
               number:{
                deep:true,
                handler(){
                    console.log("number中的值被修改了")
                },
                immediate:true
                   //初始化监听
           
              }
           
            
  //监视多级结构中某个数据属性的改变
            //   'number.a'原始的写法
            'number.a': {
               handler(){
                console.log("a的值被修改了")
               },
```

使用时根据数据层级的情况是否开启deep

开启深度监视:==`deep:true`==

**简写**

`immediate`,初始化时会调用一次handler，自动开启触发函数true、fals

```javascript
// 简写
第一种：
    vm.$watch('info',function(newValue, oldValue) {
            // newValue:新的值  oldValue：旧的值
            console.log("info被修改了", newValue, oldValue)
        }
    )

第二种：
'number.a'(newValue,oldValue){
                console.log("a的值被修改了",newValue,oldValue)
            }
```

==**computer与watch之间的区别：**==

* computer能完成的功能，watch都可以完成
* watch能完成的功能，computer不一定能完成，例如：watch可以进行异步的操作
  * 所有被Vue管理的函数，最好写成普通函数，这样this指向才是vm，或者组件实例对象
  * 所有被Vue管理的（定时器，ajax的回调函数等），最好写成箭头函数，这样this的指向才是v，或组件实例对象

## 样式绑定

**class属性绑定**

动态调节

```vue
<div id="dynamic">  
    <div v-bind:style="{color: 'red', fontSize: fontSize + 'px'}">可以动态调节</div>  
    <div v-bind:style="objectStyle"> 不可以动态调节</div>   
    {{fontSize}}   
    <button @click="++fontSize">+</button> 
    <button @click="--fontSize">-</button>
</div>
<script>
var app = new Vue({
    el: '#dynamic',
    data: {
        fontSize: 20,
        objectStyle: {
            color: 'green',
            fontSize: this.fontSize + 'px'
        }
    }
})
</script>
```

```vue
<style>
    .hongzi {
        color: red;
    }

    .dazi {
        font-size: 50px;
    }

    .xiezi {
        font-style: italic;
    }

    .liangzi {
        color: #00aa00;
        font-size: 26px;
    }

    .style1{
        background-color: #6855bc;
    }
    .style2{
        width: 200px;
        height: 150px;
        text-align: center;
    }
</style>

<body>
    <div id="app">
        //通过类名class绑定样式
        <p :class="fangan1">春</p>
        <p :class="fangan2">夏</p>
        <p :class="fangan3">秋</p>
        <p :class="fangan4">冬</p>
        <button :disabled="10+40===40" title="为false时运行使用按钮，为true禁用按钮">button</button>
        <button v-on:click="style1 ++">font—size++</button>
        <button v-on:click="signSize">font—size--</button>
        //内联样式
        <p class="style1" :style="{fontSize:style1+'px',borderRadius:radiussize+'px',height:hei+'px'}">这是样式操作的示例对象</p>
        //使用数组将多个样式使用于一个元素上，或者直接绑定到样式上
        <p class="style2" :style="[colorstyle,font]">样式</p>
        
        <button @click="randomBackgorund">改变背景</button>
        <button @click="radiussize+=5">增加圆角</button>
    </div>
</body>
<script src="../vue/vue.js"></script>
<script>
    var vm = new Vue({
        el: "#app",
        data: {
            fangan1: "hongzi dazi xiezi",
            fangan2: ['liangzi', 'xiezi'],
            fangan3: {
                'hongzi': 1,
                'dazi': 1,
                'xiezi': 0,
                'liangzi': 0
            },
            fangan4: {
                'hongzi': 0,
                'dazi': 0,
                'xiezi': 0,
                'liangzi': 0
            },
            style1:26,
            colors:["red","blue","alicblue","cyan","aqua","green","lime","beige","khaki","DarkRed","Gray"],
            colorstyle:{
                color:'yellow',
                backgroundColor: 'blue',
                borderRadius:'15px'
            },
            font:{
                fontSize:29+'px',
                fontWeight:'bold'
            },
            wi:200,
            hei:150
            ,
            sizestyle:{
                width:this.wi+'px',
                heigth:this.hei+'px'
            }
            ,
            radiussize:5
        },
        methods: {
            signSize:function(){
                console.log(this.style1);
                // 改变字体大小
                 if(this.style1 >1){
                    this.style1--
                 }
            },
            randomBackgorund:function(){
                console.log(this.colorstyle.color);
                //使用随机数代表颜色数组的下标从而给颜色属性赋值
                this.colorstyle.backgroundColor=this.colors[Math.floor(Math.random()*this.colors.length)];
                this.colorstyle.color=this.colors[Math.floor(Math.random()*this.colors.length)];
            },
            addRadius:function(){

            }
        },
    })
</script>
```

#### 方法绑定样式

==通过方法绑定样式：==

```html
<button :disabled="isDisabled(item)" :style="{cursor:isCursor(item)}"
                        @click="decreaseShang(item,index)">-</button>

data：{
shou: true,
            cus: "not-allowed"
}


    //按钮禁用样式
            isDisabled(item){
                if(item.count===1){
                    return this.shou=true
                }
            },
            //鼠标禁用样式
            isCursor(item){
                if(item.count===1){
                    return "not-allowed"
                }
            }
```



## 指令

指令是带有 `v-` 前缀的特殊 attribute。Vue 提供了许多内置指令，包括 `v-bind` 和 `v-html`。

指令 attribute 的期望值为一个 JavaScript 表达式 (除了少数几个例外，即之后要讨论到的 `v-for`、`v-on` 和 `v-slot`)。一个指令的任务是在其表达式的值变化时响应式地更新 DOM。以 `v-if`为例：

==<p v-if="seen">Now you see me</p>==

`v-if` 指令会基于表达式 `seen` 的值的真假来移除/插入该 `<p>` 元素。

```html
<a v-bind:href="url"> ... </a>

<!-- 简写 -->
<a :href="url"> ... </a>
```

```html
<a v-on:click="doSomething"> ... </a>

<!-- 简写 -->
<a @click="doSomething"> ... </a>
```



### 条件渲染

`v-show`

当对应的show里面的条件成立则显示响应标签的内容

```html
 <div id="app">
        {{n}}
        <button @click="addS">n+</button>
        <p v-show="n==1">Anguler</p>
        <p v-show="n==2">Realct</p>
        <p v-show="n==3">Vue</p>
    </div>
</body>
<script src="../vue/vue.js"></script>
<script>
    var vm = new Vue({
        el:"#app",
        data:{
            n:0,
            i:1
        },
        methods: {
            addS(){
                this.n++
            }
        },
    })
</script>
```

### 列表渲染

`v-for`

```html
<div id="app">
  <ol>
    <li v-for="site in sites">
      {{ site.name }}
    </li>
  </ol>
</div>
 
<script>
new Vue({
  el: '#app',
  data: {
    sites: [
      { name: 'Runoob' },
      { name: 'Google' },
      { name: 'Taobao' }
    ]
  }
})
</script>
```

**迭代键值对**

```html

<div id="app">
  <ul>
    <li v-for="(value, key, index) in object">
     {{ index }}. {{ key }} : {{ value }}
        索引           键          值
    </li>
  </ul>
</div>


new Vue({
  el: '#app',
  data: {
    object: {
      name: '菜鸟教程',
      url: 'http://www.runoob.com',
      slogan: '学的不仅是技术，更是梦想！'
    }
  }
})


     0. name : 菜鸟教程
    1. url : http://www.runoob.com
    2. slogan : 学的不仅是技术，更是梦想！ 
```

### 过滤器

过滤器（Filters），常用语==文本格式化==，过滤器使用在差值表达式，v-bin属性绑定

**过滤器函数：**

```vue
<body>

    <div id="app">
        <p>{{message | api}}</p>
    </div>
</body>
<script src="../vue/vue.js"></script>
<script>
    var vm = new Vue({
        el: "#app",
        data: {
            message: "hello!"
        },
        //过滤器本质上是个函数,私有过滤器
        filters: {
            api(v) {
                //获取数组下标为0的字符，转为大写字符
                const f = v.charAt(0).toUpperCase()
                console.log(f)
                //字符串的slice方法可以截取下标为i的后面所有的数据
                const s =v.slice(1)
                console.log(s)
                //返回新的字符
                return f+s
            }
        }
    })
</script>
```

#### 全局过滤器：

当全局过滤器和私有过滤器重名则，使就近原则

```vue
<body>

    <div id="app">
        <p>{{message | api}}</p>
    </div>
</body>
<script src="../vue/vue.js"></script>
<script>

    //定义全局全局过滤器
    Vue.filter('api', function(str){
          //获取数组下标为0的字符，转为大写字符
                const f = str.charAt(0).toUpperCase()
                console.log(f)
                //字符串的slice方法可以截取下标为i的后面所有的数据
                const s =str.slice(1)
                console.log(s)
                return f+s
    })

```

### Day.js

Day.js是一个极简的JavaScript库，可以为现代浏览器解析、验证、操作和显示日期和时间。

[安装 | Day.js中文网 (fenxianglu.cn)](https://dayjs.fenxianglu.cn/category/#node-js)

导入CDN：

<script src="https://cdn.jsdelivr.net/npm/dayjs@1.11.7/dayjs.min.js"></script>

#### 案例：列表过滤

```javascript
<body>
    <div id="app">
        <div id="al">
            输入查询信息：<input type="text" v-model="searcheBox">
            <select v-model="selectOption">
                <option value="" disabled>--请选择--</option>
                <option value="甘肃">甘肃</option>
                <option value="陕西">陕西</option>
            </select>
            <button @click="sortArray">姓名排序</button>
            <button>地址排序</button>
            <ul>
                <li v-for="(item, index) in selectMsg" :key="index">{{item.name}}---{{item.age}}---{{item.address}}</li>
            </ul>
        </div>
    </div>
</body>
<script src="../vue/vue.js"></script>
<script>
    var vm = new Vue({
        el: "#app",
        data: {
            searcheBox: "",
            role: [
                { name: "张三", age: 18, address: "甘肃省兰州市" },
                { name: "李四", age: 19, address: "甘肃省陇南市" },
                { name: "王五", age: 25, address: "陕西省西安市" },
                { name: "赵六", age: 21, address: "陕西省咸阳市" },
                { name: "张六", age: 22, address: "甘肃省兰州市" },
                { name: "李五", age: 23, address: "甘肃省陇南市" },
                { name: "王三", age: 24, address: "陕西省西安市" },
                { name: "赵二", age: 21, address: "陕西省咸阳市" }
            ],
            selectOption: ""
        },
        methods: {

            sortArray: function () {
                this.selectMsg = this.selectMsg.sort()
                console.log(this.selectMsg)
            }
        },
        computed: {
            selectMsg: function () {
                let msg = this.role.sort(compare('age'))
                s = this.searcheBox
                option = this.selectOption
                if (!s && !option) {
                    return msg
                }
                s = s.trim().toLowerCase()
                if (s) {
                    //过滤函数，如果该数组中的值符合则返回符合值
                    msg = msg.filter(function (item) {
                        if (item.address.toLowerCase().indexOf(s) !== -1) {
                            return item
                        }
                    })
                }
                if (option) {
                    msg = msg.filter(function (item) {
                        if (item.address.toLowerCase().indexOf(option) !== -1) {
                            return item
                        }
                    })
                }

                return msg
//列表排序
                function compare(pt) {
                    return function (a, b) {
                        var vaule1 = a[pt];
                        var vaule2 = b[pt];
                        return vaule1 - vaule2
                    }
                }
            }

            

        },
        watch: {
            'selectOption'(nval, oval) {

            }
        },


    })
</script>
```

`filter`过滤

### 列表排序

```javascript
let msg = this.role.sort(compare('age'))

                function compare(pt) {
                    return function (a, b) {
                        var vaule1 = a[pt];
                        var vaule2 = b[pt];
                        return vaule1 - vaule2
                    }
                }
```

## axios

专注于数据库的请求的库。

[axios中文网：|axios API 中文文档 | axios (axios-js.com)](http://axios-js.com/)

使用CDN：

```javascript
<script src="https://unpkg.com/axios/dist/axios.min.js"></script>
```

使用npm包

```bash
1.下载npm包
npm install --save axios vue-axios

2.使用
全局文件下导入：main.js

import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)

3.通过axios方法获取数据
this.$http.get("https://www.escook.cn/api/cart").then(
		(res)=>{
			this.lis=res.data
		}
	)

```

## Vue-cli

vue-cli是Vue.js开发的标准工具，简化了程序员基于webpack创建工程化的Vue项目的过程

[官方文档：Home | Vue CLI (vuejs.org)](https://cli.vuejs.org/)

vue脚手架

==全局安装==

```
npm install -g @vue/cli
```

基于vue-cli快速生成工程化的vue项目

在终端下运行指定命令:`vue create 项目名称`

* 第一项：创建vue2项目
* 第二项：创建vue3项目
* 第三项：手动创建项目

![image-20230411201608124](C:\Users\Hryi\AppData\Roaming\Typora\typora-user-images\image-20230411201608124.png)

手动创建项目：![image-20230411201526952](C:\Users\Hryi\AppData\Roaming\Typora\typora-user-images\image-20230411201526952.png)

选择版本：![image-20230411201948767](C:\Users\Hryi\AppData\Roaming\Typora\typora-user-images\image-20230411201948767.png)

运行：` npm run serve`

可以通过`nvm install xxx`的操作，安装不同版本的`node`，再通过上述命令查看本地已经安装过的`node`版本，再`nvm use xxx`就可以快速切换node版本

* **vue create 项目名称 是基于webpack创建的项目**

### 目录结构

![image-20230412195002151](C:\Users\Hryi\AppData\Roaming\Typora\typora-user-images\image-20230412195002151.png)

`public`:唯一页面，主页

`src：`源代码文件

`package.js`文件后缀都是配置文件

`assets`：存放静态资源文件

`components`：封装的一些可复用组件

`man.js`:项目的入口文件，整个项目的启动文件

`app.vue`:项目的根组件

**运行流程：**

==通过`main.js`把`App.vue`渲染到`index.html`的指定区域中。==

vue组件

main.js文件

```javascript
import Vue from 'vue'
import App from './App.vue'
//导入Vue根组件，将来要把app.vue中的模版结构渲染到HTML页面中

Vue.config.productionTip = false

//创建vue的实例对象
new Vue({
	
	//把render函数指定的组件，渲染到HTML页面中
	render: h => h(App),
	
}).$mount('#app')
//vue实例$mount（）方法和el挂载一样
```

模版文件

`app.vue`文件

```vue
<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app',
  components: {
    HelloWorld
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
```

## 组件

组件化开发：

* 根据封装思想把页面上重复用的一些ui封装成组件

vue中规定：组件的后缀名就是==.vue==。之前接触到的App.vue就是一个vue组件。

### Vue组件的三个组成部分

* `template`---组件的模版结构
* `script`---组件的javaScript行为
* `style`---组件的样式

组件是对UI结构的复用

```vue
<template>
	//组件模版
	<div id="cpp">
		<h1>Hello</h1>
		<h2>{{username}}</h2>
	</div>
</template>

<script>
	//默认导出，固定写法
	export default{
		// data:数据源
		name:"cpp",
		// .vue组件中的data不能像之前一样,不能指向对象
		// 注意：组件中的data必须是个函数
		// data:{
		// 	username:"张三"
		// }
		data() {
			这个return出去的{}中,可以定义数据
			return{
				username:"张三"
			}
		}
	}
</script>

<style>
	//组件的样式
	#cpp{
		width: 600px;
		height:600px;
		background-color: beige;
	}
</style>
```

### 组件的使用

组价被封装好之后，彼此之间是相互独立的，不存在父子关系

在==使用组件==的时候根据组件的嵌套关系形成了**父子关系**、**兄弟关系**

**使用组件的步骤**

* 在根组件中导入组件==import==语法
* 使用==components==节点注册组件
* 以==标签形式==使用注册的组件

```vue
<template>
<!-- 3.以标签形式使用组件 -->
		<HelloWorld></HelloWorld>
		<vue></vue>
	</div>
</template>

<script>
// 1.导入组件
import HelloWorld from '@/components/HelloWorld.vue'


	//默认导出，固定写法
	export default{
		// 2.注册组件
		components:{
			HelloWorld,
            vue
		},
```

**通过components注册的组件是==私有子组件==**

注册==全局组件==

在vue的mian.js入口文件中，通过Vue.component（）方法，可以注册全局组件

频繁使用的组件建议全局注册

**main.js文件注册为全局组件**

```vue
import Rigth from '@/components/Rigth.vue'
Vue.component('MyRigth',Rigth);
```

直接在组件中使用标签

<MyRigth></MyRigth>

### 组件的**props**

props是组件的自定义属性，在封装组件的时候，合理的使用props，提高组件的复用性

**props是只读的，不建议修改props的值**

==封装组件==

```vue
        <p>count的值 {{ init }}</p>
        <button @click="init++">+1</button>
    </div>
</template>

<script>
export default {
    name: 'Rigth',

    //组件的自定义属性
    props:["init"],
}
    
或者

export default {
    name: 'Rigth',

    //组件的自定义属性
  props: {
    //自定义属性
    init: {
      default: 0,
      //使用type指定init的值类型
      type:Number,
    //   必填项,校验是否给init传值了
       required: true,
    },
  },
}
    
```

在父组件中使用

==使用者==

```vue
<MyRigth init="0"></MyRigth>
//传进去一个初始值
```

### 样式冲突

标签名称相同时==a==组件下的**标签样式**会与==b==组件中的**样式**冲突

使用自定义属性解决

```html
使用自定义属性
 <div class="box" data-v-001>
    <h1 data-v-001>组件的样式</h1>
    <p data-v-001>count的值 {{ names }}</p>
    <button data-v-001 @click="names++">+1</button>
  </div>
  
  <style>
h1[data-v-001] {
  background: burlywood;
}
</style>
```

#### scoped属性

解决样式冲突

加==`scoped`属性==自动开启解决样式冲突

```css
<style scoped>
h1{
  background: burlywood;
}
</style>
```

当开启`scoped`属性后添加`deep`修改组件中样式

vsdoe下报错办法：`div/deep/`

```css
div/deep/ p {
  width: 200px;
  height: 80px;
  background: red;
}
```
## 生命周期

![img](https://img-blog.csdnimg.cn/2021032421314699.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3N1MjIzMTU5NTc0Mg==,size_16,color_FFFFFF,t_70)

==created()==钩子props，data等可以使用

==mounted()==挂载完页面后执行的钩子

==beforeUpdate( )==和==updated( )==生命周期钩子在**组件发生变化**时执行一次



## 组件之间的数据共享

**父组件向子组件之间共享数据**

需要使用自定义属性

> 父组件通过v-bin把值传送给子组件定义的属性

> 子组件可以使用父组件传送过来的属性的值

![image-20230413155732705](C:\Users\Hryi\AppData\Roaming\Typora\typora-user-images\image-20230413155732705.png)

* ==父向子传递值，子组件最好不要修改传递过来的值==



#### 子组件向父组件传值

子组件向父组件传值则需要==自定义事件==

`this.$emit()`方法

使用的时候

`@numchange=" "`

当调用`.$emit()`事件就会被触发然后传递一个参数

![image-20230413161815837](C:\Users\Hryi\AppData\Roaming\Typora\typora-user-images\image-20230413161815837.png)

#### 兄弟组件共享数据

在vue2.x中，兄弟组件之间共享数据使用==EventBus==

封装一个js谁调用这个就共享数据

* 创建eventBus.js模块，并向外共享一个vue的实例对象
* 在数据发送方，调用bus.$emit（‘事件名称’，要发送的数据）方法==触发自定义事件==
* 在数据接收方，调用bus.$on（‘事件名称’，事件处理函数）方法==注册一个自定义事件==

![image-20230413185609016](C:\Users\Hryi\AppData\Roaming\Typora\typora-user-images\image-20230413185609016.png)

## ref

ref用来辅助开发者在**不依赖**jQuery的情况下，获取DOM元素或者组件的引用

`ref` 是 Vue.js 提供的一个指令，用于给元素或子组件注册引用信息。它可以为元素或子组件设置一个唯一的标识符，以便在组件内部或者父组件中通过这个标识符获取到这个元素或组件的实例，进而对其进行操作。

需要拿到某个标签的DOM元素

* 先给标签起一个==ref==名称
* 使用`$refs.名称`获取DOM元素，ref的名称不能冲突

```vue
<span ref="hello">HELLO WORLD</span>
<button @click="outPutThis">获取this</button>


methods: {
	outPutThis(){
//通过ref修改DOM元素
				this.$refs.hello.style.color = "yellow"
			}
		},
```

**ref**获取组件元素

* 定义组件的ref

```vue

<button @click="caresLeft">重置rigth组件里面的值</button>
//1.定义组件的ref
<right @event-name="getMessage" ref="caresLef"></right>


 methods:{
//2.定义方法，点击时调用，修改ref获取到的相应组件的元素或方法
caresLeft(){
      this.$refs.caresLef.message = 0
      console.log()
    }
}
```

### this.$nextTick(cd)方法

当某些方法需要在DOM更新完成后执行，则调研cd回调推迟到一个DOM更新之后执行

* ==保证cd回调函数执行最新的DOM元素==

一般使用方法

```

caresLeft(){
//当方法被调用后在DOM元素更新完成后执行focus方法获取焦点
     this.$nextTick(()=>{
      this.$refs.caresLef.focus()
     });
    }
```

一般情况下根据实际情况选择使用updated()和this.$nextTick(cd)的方法，

updated（）会随着数据的变化而刷新页面

#### 数组方法

==foEach（）==方法循环判断数组

* 当找到对应元素且返回元素，循环依然执行

  ```javascript
   arra.forEach((item, index) => {
  ​    if (item === "1") {
  ​     console.log();
  ​    }
     });
  ```

  

==some（）==循环

* 找到对应元素后，停止循环体，返回对应元素

  ```javascript
  Array.some((item, index) => {
          if (item === "i") {
            console.log(i);
          }
        });
  ```

==every（）==方法

* `every` 和数学中的"所有"类似，当所有的元素都符合条件才返回true。另外，空数组也是返回true。(空数组中所有元素都符合给定的条件，注：因为空数组没有元素)。

```vue
//判断数组中的元素是否为真
init:[
        {names:true},
        {names:true},
        {names:true},
        {names:true}
      ]
      
      
const result = init.every(item => item.names)
```

==reduce（）==条件求和方法

对数组中的每个元素执行一个由您提供的**reducer**函数(升序执行)，将其结果汇总为单个返回值。

```javascript
 const arr = [{
            name: "zhan", state: true, price: 80, count: 1
        }, {
            name: "li", state: false, price: 70, count: 2
        }, {
            name: "wang", state: true, price: 45, count: 3
        }
        ]
        
        // accumulator 累计器
        // currentValue 当前值
        // currentIndex 当前索引
        // array 数组
        // initialValue 初始值
        // arr.filter(item=>item.state).reduce((accumulator,currentIndex)=>{
        //     // 方法体
        // },initialValue)

        //过滤出为true的数据
        const list = arr.filter(item => item.state).reduce((acc, item) => {
            return acc += item.price * item.count
        }, 0)
        console.log(list)
```

简化：

```
 const list = arr.filter(item => item.state).reduce((acc, item) => acc += item.price * item.count, 0)
```

## 动态组件

vue提供了内置组件<component>组件，==专门用来实现动态组件的渲染==

使用动态组件==**显示**==和==**隐藏**==

  动态组件每次被隐藏的时候都会被==销毁==，其中的数据也会丢失

```html
使用动态组件
	<button @click="bt='Header'">点击显示或者隐藏</button>
	<button @click="bt='Bottoms'">点击显示或者隐藏</button>

<component :is="bt" ></component>
 <!-- is属性的值是components下注册的名称-->


 data() {
    return {
	  bt:"Header",
    };
  },
```

#### keep-alive

keep-alive保持在后台活跃，防止被销毁 

​    当组件被==缓存==的时候，会自动触发组件的`deactivated`生命周期

​    当组件被==激活==的时候，会自动触发组件的`activated`生命周期函数

* include属性：只匹配有名称的组件，指定组件允许缓存
* 通过exclude属性，制定不缓存的，==两种属性**不能同时使用**==

```html
<keep-alive exclude="Header"或者include="Bottoms">
		<component :is="bt" ></component>
	</keep-alive>
```

## 插槽

插槽**（slot）**

==封装组件的时候用到==，把不确定的部分定义为插槽

![image-20230420224530471](C:\Users\Hryi\AppData\Roaming\Typora\typora-user-images\image-20230420224530471.png)

**定义插槽**

* 每个插槽都有一个`name`，默认为==default==，

```html
<template>
    <div id="Slot">
        <h1>插槽</h1> 
        <slot name="default"> </slot>
    </div>
</template>
```

使用，直接在里面添加，给定name，根据name名称替换会替换掉slot，在模版上添加

`v-slot`==：插槽名称==

```html
 <HTMLSolt v-slot:default>
 简写：具名插槽 <HTMLSolt #default>
      <p>String</p>
 </HTMLSolt>
     
     
```

**通过插槽传递==对象==**

```html
使用命名
 <HTMLSolt>
     //接收对象
      <template #default="{ msg , user}">
        <p></p>
        <p>{{ msg }}</p>
        <p>{{ user }}</p>
      </template>
</HTMLSolt>
```

插槽传递：

```html
 <div id="Slot">
        <h1>插槽</h1> 
    //传递对象
        <slot name="default" msg="isData" :user="isData"> </slot>
</div>

isData:{
            names:"张三",
            age:19,
            address:"兰州市城关区"
 }
```

## 自定义指令

在vue组件中，可以在directives节点下==声明私有自定义指令==

声明==自定义指令==

参数：`binding`元素对象，可以点出来基本属性

```vue
  data() {
    return {
      test1: "hello",
      color:"blue"
    };
directives: {
    // 自定义指令
    color: {
      // 当指令第一次被绑定到标签上，执行bind（）函数，el是当前绑定标签的DOM元素
//binding元素对象
      bind(el，binding) {
        console.log("第一次绑定"，binding.value)
       el.style.color=binding.value//通过传过来的值修改color的属性
      }
    }
  },
```

使用：

```js
<h1 v-color="color">根组件</h1>
```

**update**函数

* 在每次DOM跟新的时候触发

```js
通过修改color调用update函数，实现新的color赋值改变页面颜色
<button @click="color='yellow'">点击切换color</button>


//绑定后dom元素更新则调用update函数
      update(el,obj) {
        console.log("更新color",obj)
        el.style.color=obj.value
  },
```



==**简写**==

```js
直接在directives下书写
directives：{
  color(el, binding) {
        el.style.color = binding.value;
      },
}
```



#### 全局自定义指令

main.js文件下全局命名

```js
Vue.directive("color", function (el, binding) {
  el.style.color = binding.value;
});
```

## ESlint

可组装的JavaScript和JSX检查工具（https://www.eslint.com.cn/）

```bash
$ npm install eslint --save-dev
```

常见规则

**Prettier**前端代码格式化工具[https://www.oschina.net/p/prettier]

## axios挂载到Vue原型上

缺点：

* 导入axios

  `import axios from 'axios'`

* 挂载到vue上

  `Vue.prototype.axios= axios`

  `Vue.prototype.$http= axios`

使用：

```bash
	this.别名.get/set/post..请求
	this.axios.get("https://www.escook.cn/api/cart").then(
		(res)=>{
			this.lis=res.data
		}
```

配置根路径



```js
//axios.defaults.baseURL='http://127.0.0.1:3306'
axios.defaults.baseURL = "请求根路径";

this.$http.get("/api/cart").then(
		(res)=>{
			this.lis=res.data
		}
	)
```

## 路由router

router：对应关系

==（#链接）hash==地址与页面的关系

location.hash/location.href输出页面完整的url

前端路由工作方式：

* 用户点击路由链接
* 导致URL地址栏中的hash值发生变化
* 前端路由监听hsah变化
* 前端路由把对应的hash地址组件渲染

![image-20230422164159269](C:\Users\Hryi\AppData\Roaming\Typora\typora-user-images\image-20230422164159269.png)

#### vue-router

vue.js官网给出的路由解决方法，他只结合了vue项目进行使用，能够管理SPA项目中组件的切换。

[vue-router的官方文档地址](https://router.vuejs.org/zh/)

步骤：

* 安装vue-router包
* 创建路由模块
* 导入挂载路由模块
* 声明路由连接和占位符

**CDN：**

```html
<script src="/path/to/vue.js"></script>
<script src="/path/to/vue-router.js"></script>
```

```bash
npm 下载
npm install vue-router

导入
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)//把vueroutr安装为Vue的插件

```



使用：

```js
//导入模块
import Vue from 'vue'
import VueRouter from 'vue-router'

//把VueRouter安装为Vue项目的插件
Vue.use(VueRouter);

//创建路由的实例对象
const router = new VueRouter()

//把插件共享出去
export default router
```

使用:

![image-20230422172501359](C:\Users\Hryi\AppData\Roaming\Typora\typora-user-images\image-20230422172501359.png)

在路由模块里面配置对应关系，router\index.js文件

```
//导入需要的组件
import Index from '@/components/index'
Vue.use(Router)
// 数组定义hash地址和组件之间的关系
let routes = [
    {
        path: '/index',
        name: 'index',
        component: Index
        //需要建立链接的模版
    }
];
const router = new VueRouter({
        routes
    },
);
```

app.vue使用路由定位

```
<!-- vue-router提供了link标签，和a链接一样 -->
    <router-link to="/hello">hello</router-link>
    <p></p>
    <router-link to="/index">index</router-link>
    <!--vue-ruter提供了router-view组件-->
    <!-- 占位符，替换掉 -->
    <router-view/>
```



#### 重定向

用户访问某个页面的时候强制跳转地址，从而展示特定的组件

通过路由规则的==redirect==属性，指定新的路由地址

```js
配置一个默认路径： { path: "/", redirect: “/Hello" },
```

#### 嵌套路由

通过路由实现组件的嵌套展示

![image-20230423221310202](C:\Users\Hryi\AppData\Roaming\Typora\typora-user-images\image-20230423221310202.png)

使用children声明子路由规则：

```
// routes数组定义"hash地址"和"组"之间的关系
let routes = [
    //路由规则
    {
        path: "/index",
        name: "index",
        component: Index,       
    },
    {
        path: "/hello",
        component: Hello,
        // redirect: "/hello/home",//重定向到home组件
        //通过children声明子路由规则
        children: [{

            path: "home",// 访问/index/home
            component: HTMLHome
        },{
            path:"",
            component: HTMLHome
            //默认子路由，直接展示该组件,path为空字符串
        }]
    },
    //
    { path: "/", component: Hello },//
];
```

#### 动态路由匹配

动态路由的规则就是，把hash地址中可变的部分定义为==参数项==，提高路由规则的复用性

```js
    <router-link to="/hello/1">hello</router-link>
//定义在路径里面的参数为路径参数
    <router-link to="/hello/2">hello1</router-link>
    <router-link to="/hello/3">hello2</router-link>
    
   // this获取路由的路径参数id
<h1>HelloWorld----{{ this.$route.params.mid }}----{{mid}}</h1>
//组件模版
 props:["mid"],
 //用于接收mid的值    
     
     
     
 {
        path: "/hello/:mid",//为动态路由配置参数
        component: Hello,
        props:true,//配置props获取路径参数
 }
```

**获取访问参数**

![image-20230425135716407](C:\Users\Hryi\AppData\Roaming\Typora\typora-user-images\image-20230425135716407.png)

```js
<router-link to="/hello/1?name=zs&age=16">hello</router-link>
   
 //获取query,可以获取查询参数
{{this.$route.query}}
//fullpath获取全部路径
```

#### 声明式导航&编程式导航

* 使用 <router-link>这种叫做声明式导航，点击链接实现的导航
* location.href通过浏览器的api导航

编程式导航api

提供了导航的api，常见的有

* this.$router.push('hash地址')，跳到指定的页面，并且增加一条历史记录

  ```js
    <button @click="goLi">通过编程式api跳转页面</button>
    
      methods: {
          goLi(){
              this.$router.push("/hello/1")
          }
      },
  ```

  

* this.$router.replece('hash地址')，跳到指定的页面，会覆盖当前的历史记录

  

* this.$router.go(‘数值 n’)，==在历史记录中前进或者后退页面==

```js
  this.$router.go(-1)//后退页面，-1，-2等，后退几个历史记录，超过上线则不动
  为正整数，则前进页面
```

#### 导航守卫

控制路由访问权限如下

![image-20230425142555193](C:\Users\Hryi\AppData\Roaming\Typora\typora-user-images\image-20230425142555193.png)

**全局前置守卫**

每次发生==导航跳转==都会触发前置守卫，在前置守卫中配置==每个路由==的访问控制

```js
在路由文件下配置，路由守卫的三个参数
router.beforeEach((to, from, next) => {
   //to,是将要访问的路由的信息对象
   //from，是将要离开的路由的信息对象
   //next 是一个函数，调用next（）表示放行，允许通过此次路由导航
})
```

next（）直接放行

当前用户没有访问权限强制跳转到登陆页面，next（'/login'）

当前用户没有访问权限，不允许跳转到后台页面，next（false）

```js
 //先判断点击的是否为/hello/1/home路径
 if (to.path==="/hello/1/home") {
    //先获取token，
    const token = localStorage.getItem("token")
    if(token){
        //获取到token则放行
        next()
    }else{
        //否则跳转到hello组件
    next('/hello/2')    
    }
  }else{
    next()
  }
  
  
```

## vite

vite这个名字起源于法语就是很快的意思。应为他是冷服务不打包 用es6 import 来引入对应 的js。其次就是使用rollup 去打包。开发中有热更新等。

- 一个开发服务器，它基于 [原生 ES 模块](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules) 提供了 [丰富的内建功能](https://vitejs.cn/guide/features.html)，如速度快到惊人的 [模块热更新（HMR）](https://vitejs.cn/guide/features.html#hot-module-replacement)。
- 一套构建指令，它使用 [Rollup](https://rollupjs.org) 打包你的代码，并且它是预配置的，可输出用于生产环境的高度优化过的静态资源。

使用 NPM:

```bash
$ npm init vite@latest
```

使用 Yarn:

```bash
$ yarn create vite
```

使用 PNPM:

```bash
$ pnpm create vite
```

项目文件夹下执行：`pnpm install`下载依赖

运行项目`pnpm dev`



pnpm的**安装**

`pnpm`由npm/yarn衍生而来，解决了npm/yarn内部潜在的bug，极大的优化了性能，扩展了使用场景

* (1). 需要先通过npm全局安装pnpm `npm install pnpm -g`

* (2). 设置磁盘存储地址：`pnpm config set store-dir D:\Develop\pnpm\.pnpm-store`

* 查看源 `pnpm config get registry`

  切换淘宝源`pnpm config set registry http://registry.npm.taobao.org`

  ```bash
  # 查看依赖(全局)
  pnpm list [-g]
  ```



**路由router下载**

npm

```bash
npm install vue-router@4
```

## vue3路由配置

```js
index.js文件

// 1. 定义路由组件.
// 也可以从其他文件导入
import {createRouter,createWebHashHistory}  from 'vue-router'


// 2. 定义一些路由
// 每个路由都需要映射到一个组件。
// 我们后面再讨论嵌套路由。
const routes = [
  {
    //默认路由路径
    path: '/',
    component: () => import('../view/Home.vue'),//动态路由配置协议
},
  { path: '/about', component: () => import('../view/About.vue'), },
]

// 3. 创建路由实例并传递 `routes` 配置
// 你可以在这里输入更多的配置，但我们在这里
// 暂时保持简单
const router = createRouter({
  // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
  history: createWebHashHistory(),
  routes, // `routes: routes` 的缩写
})

export default router;
```

main：

```js
import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router/index'

//use必须在mount前面
createApp(App).use(router).mount('#app')
```

### vue.config.js配置vite下的@路径问题

安装插件：`unplugin-auto-import`是一个按需自动导入Vue/Vue Router等官方Api的插件

```bash
pnpm add unplugin-auto-import -D
```



```js
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import AutoImport from 'unplugin-auto-import/vite'


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()，
           AutoImport({   // 注册并使用配置项
      imports:['vue','vue-router']})
           ],
  resolve:{
    //设置路径别名
    alias:{
      '@':path.resolve(__dirname,'./src')
    }
  }
})
```

## vue3语法

vue3支持vue2的写法

==setup定义模版和插件==

```js
<script setup>
import News from "./view/News.vue";
const str = "你好"
</script>
```

==setup写法：==组合式API，根据自己的需求书写

==vue2.x的写法：==选项式API

展示数据

```js
不可修改//直接页面展示
const a = '1'

{{a}}
```

修改数据

```js
// ref响应式数据，reactive比较ref方便都是响应式数据
import {ref,reactive} from 'vue'
const str = "你好"
//var s =ref(1)
//需要修改的时候得  s.value=2,修改a的值
//reactive只能书写数组，对象
var s = reactive({a:1})
const strThis=()=>{
s.a++
  console.log(s.a)
}

 <button @click="strThis">++</button>
  {{s.a}}
```

setup写法

```js
setup(){
    import {ref,reactive} from 'vue'
const str = "你好"
var s = reactive({a:1})
return{
s,str
}
}
```

vue3数据拦截不同

Vue2.x：Object.defineProperty

Vue3.x:new Proxy

#### toRefs

- 作用：将一个`响应式对象`，转换为`普通对象`，并且将其中的属性转换为 `Ref` 对象

![img](https://img-blog.csdnimg.cn/20210505171717555.png?type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1RMMTgzODI5NTA0OTc=,size_16,color_FFFFFF,t_70)

```js
const obj = reactive({

 name:"张三",

 age:18

})

let obj2 = toRef(obj)

const strThis=()=>{

 obj.name="王五"

 console.log(s.a)

 console.log(obj)

 console.log(obj2._object.name)//被转换为ref普通对象

}
```

#### compute

==修改计算属性==需要提供相应的`getter（）`，`setter（）`方法

```
    {{ changThis }}
    <br>
    <input type="text" v-model="changThis"/>
</template>

<script setup>
const str = ref("这是数据")
const changThis=computed({
 get(){
    
        return str.value
    },
    set(val){
        str.value=val
    }
})
```

使用计算属性

```js

const couserFliter = computed(() => {

      return  courseList._value[0].couserContent.sort((a,b)=>a.coursePice-b.coursePice)
});
```



#### watch

vue3支持多个监控，数组书写

```js
watch([str, rm], (newValue, oldeValue) => {
  console.log(newValue + "," + oldeValue);
},{
        immediate:true
                   //初始化监听
});
```

**监视子元素**

```js
watch(()=>s.a,(newValue, oldeValue)=>{
  console.log(newValue + "," + oldeValue);
},{
    immediate:true//开启初始化监听
   // deep:true   //开启深度监听，这样就无需书写s.a了，直接写s
});
```

立即执行，自动监听

**watchEffect()函数**

持续初始监听，相当于上面的监视子元素写法

```js
watchEffect(()=>{
  console.log(s.a);
})
```



## setup语法插件

导入插件：

`unplugin-auto-import`是一个按需自动导入Vue/Vue Router等官方Api的插件

安装插件

```bash
pnpm add unplugin-auto-import -D
```

vit.config.js中配置文件

```js
//引入插件
import AutoImport from 'unplugin-auto-import/vite'

配置
export const AutoImportDeps = () =>
  AutoImport({
    imports: ['vue', 'vue-router','你的库的名字'],
    include: [/\.[tj]sx?$/, /\.vue$/, /\.vue\?vue/, /\.md$/],
    dts: 'src/auto-imports.d.ts',
  })
```

## vue3生命周期





```js
vue2           ------->      vue3
 
beforeCreate   -------->      setup(()=>{})//开始创建组件之前，在 beforeCreate 和 created 之前执行，创建的是 data 和 method
created //创建后      -------->      setup(()=>{})
beforeMount    -------->      onBeforeMount(()=>{})//组件挂在到节点之前，不能获取dom，还没有挂在到节点
mounted        -------->      onMounted(()=>{})//组件挂在到节点之后、获取dom
beforeUpdate   -------->      onBeforeUpdate(()=>{})//组件更新前执行
updated        -------->      onUpdated(()=>{})//组件更新之后执行
beforeDestroy  -------->      onBeforeUnmount(()=>{})//组件卸载之前执行的函数，dom销毁前
destroyed      -------->      onUnmounted(()=>{})//组件卸载之后执行的函数，dom销毁后
activated      -------->      onActivated(()=>{})//被包含在 <keep-alive> 中的组件，会多出两个生命周期钩子函数，被激活时执行；
deactivated    -------->      onDeactivated(()=>{})//组件切换消失时执行
errorCaptured  -------->      onErrorCaptured(()=>{})//捕获子孙组件异常时激活钩子函数，报错消息
```

## Router

写法：

​	vue2----------------------------vue3

* `this.$router`   ====>`router `  = `useRouter()`
* `this.$route  `  ====>`route`  = `useRoute()`

router-link 去除了tag属性，

```html
 <router-link tag="div"></router-link> <!--渲染为div标签-->
```

#### 配置导航守卫

```js
const routes = [
  {
    //默认路由路径
    path: '/home',
    name:'Home',
    beforeEnter: (to, from, next) => {
      // 配置路由独享守卫
      if(frue){
        next()
      }else{
        next("/login")
      }

    },
    component: () => import('../view/Home.vue'),//动态路由配置协议
},
  { path: '/about', component: () => import('../view/About.vue'), },
]
```

## 组件传值

==父传子==

**父：**

```html
<script>
let msg="这是父组件传过来的值"
</script>

<template>

  <News :msg="msg"></News>
</template>template>
```

==子:==

接收

```html
<template>
  <h1>
    news
  </h1>
  ------{{ msg }}
</template>

<script setup>
defineProps({//定义接收数据
  msg:{
    type:String,
    default:"11111"
  }
})
</script>
```

==子传父==

子组件：

```html
//定义方法使得参数被送出去 
<button @click="transFer">传给父组件</button>
</template>

<script setup>

let emit =defineEmits(["changeStr"]);// 语法糖 使用vue3语法糖定义传递的属性名
const str =ref(["这是子组件传递过来的值" ])
const transFer = ()=>{
   console.log(str)
   emit('changeStr', str._value);
}
</script>



```

父组件：

```html
//定义方法接收子组件传递的参数
const getStr=(val)=>{
  console.log(val)
}
</script>

<template>
   <About @changeStr="getStr"></About>//定义方法接收，
</template>
```

兄弟组件传递值

defineProps():vue3声明props的方法

- Vue2.x使用`EventBus`进行组件通信，而Vue3.x推荐使用`mitt.js`。
- 通过npm安装

```bash
npm install --save mitt
```

- 可以在`main.js`挂载到全局

```js
// 标准的ES模块化引入方式
import mitt from 'mitt'

const app = createApp(App)

// vue3.x的全局实例，要挂载在config.globalProperties上
app.config.globalProperties.$EventBus = new mitt()
```

- `/common/EventBus.js`：也可以封装一个ES模块，对外暴露一个Mitt实例

```js
import mitt from 'mitt'
export default new mitt()
```

- `/views/Home.vue`：业务模块引入来使用

```js
import EventBus from '/common/EventBus.js'
```

```js
// setup中没有this，需要通过getCurrentInstance来获取Vue实例
import { getCurrentInstance } from 'vue'

// ctx等同于Vue2.x的this
    const { ctx } = getCurrentInstance()
    ctx.$EventBus.on//使用on方法接收数据
```

A组件中：

```vue
<template>
  <h1>A组件</h1>
  <button @click="getBstr">传递给b组件</button>
</template>

<script setup>
import Bus from "../Bus/EventBus";
//通过调用封装的bus方法emit执行自定义方法
let msg = ref("这是A组件的值");
const getBstr = () => {
  Bus.emit("fn", msg);
};
</script>
```

b组件中：

```vue
<template>
    <h1>B组件</h1>
    {{ str }}
</template>
<script setup>
import Bus from '../Bus/EventBus'

let str=ref("")
// 接收数据
onBeforeMount(() => {
    Bus.on("fn",data=>
    {
        str.value = data.value
        console.log(data)
    })
})
</script>

```

## 插槽：

父组件

```vue
  <About>
     具名插槽
            <template #yyy>
                <p>nihhhhhh</p>
            </template>
            <template #xxx>
                11111111
            </template>
      作用域插槽
            <template v-slot="{data}">
                {{ data }}
            </template>
        </About>
```

子组件：

```vue
  <slot name="xxx"></slot>
    <slot name="yyy"></slot>
    <p v-for="item in arrStr " :key="item.id">
    <slot :data="item"></slot>
```

## Telpeport

传送组件

```vue
子组件：
class传送
    <teleport to='.body' > 这是传送组件2</teleport>
    id传送
    <teleport to='#body' > 这是传送组件2</teleport>
    标签传送
    <teleport to='body' > 这是传送组件2</teleport>
```

```vue
父组件：
使用必须在组件之前使用，否则，渲染不成功
 <p class="body">
            这是传送组件1  </p>
<About></About>
```

### 异步组件

按需求加载组件

插件：

[VueUse中文文档 | VueUse中文文档 (vueusejs.com)](http://www.vueusejs.com/)

VueUse是一款基于[组合式API](https://v3.vuejs.org/guide/composition-api-introduction.html)的函数集合。

```bash
npm i @vueuse/core
```

```js
<script src="https://unpkg.com/@vueuse/shared"></script> 
<script src="https://unpkg.com/@vueuse/core"></script>
```



```vue
异步加载
<script setup>
import A from "./view/A.vue";
import B from "./view/B.vue";
const AsyncChild = defineAsyncComponent({
  // 加载函数，可以自己import导入vue组件
  loader: () =>
    new Promise(
      (resolve, reject) =>
        setTimeout(() => {
          resolve(directiveVue);
        }),
      1000
    ),//Promise是一种异步编程的方式，可以让我们更好地处理异步操作。
  loadingComponent: A,                                                                                                                    
  delay: 200,// 展示加载组件前的延迟时间，默认为 200ms
  errorComponent: B,//失败加载的组件
  timeout: 2000,  // 如果提供了一个 timeout 时间限制，并超时了
  // 也会显示这里配置的报错组件，默认值是：Infinity
});
onMounted(() => {
  console.log("app");
});
var isShowAsyncComp = ref(false);
const loader = () => {
  isShowAsyncComp.value = true;
};
</script>

<template>
  <div>
    <h1>根组件</h1>
  </div>
  <button v-on:click="loader()">点击加载组价</button>
  <AsyncChild v-if="isShowAsyncComp"/>
</template>
```

根据浏览器滚轮位置判断是否加载某个组件

```js
const target = ref(null)
    const { stop } = useIntersectionObserver(
      target,
      ([{ isIntersecting }]) => {
        console.log(isIntersecting)
        isShowAsyncComp._value = isIntersecting
      },
    )
```

## Mixin

[Mixin](https://so.csdn.net/so/search?q=Mixin&spm=1001.2101.3001.7020) 提供了一种非常灵活的方式，来分发 Vue 组件中的可复用功能。一个 mixin 对象可以包含任意组件选项。当组件使用 mixin 对象时，所有 mixin 对象的选项将被“混合”进入该组件本身的选项

- ==Vuex公共状态管理==，如果在一个组件中更改了Vuex中的某个数据，那么其它所有引用了Vuex中该数据的组件也会跟着变化。
- ==Mixin中的数据和方法都是独立的==，组件之间使用后是互相不影响的。

新建一个存放mixin.js文件夹

```js
import {ref} from "vue"
export default function(){
    const str = ref(1)
    const addBut=()=>{
        console.log("1");
        str.value ++
    }

    return{
        str,
        addBut
    }
}

选项式：
export const mixins = {
    data() {
        return {
            num: 1
        }
    },
    methods: {
        addStr() {
            this.num++
        }
    }
}
```

使用前先导入js文件

```vue
<template>
{{ str }}
    <button @click="addBut">dianji</button>
</template>
<script setup>
import mixin from "../mixins/mixin"
let {str,addBut}= mixin();//结构化数据
</script>


选项式api：
import { mixins } from "../mixins/mixin";
// let {str,addBut}= mixin();
export default {
  name: 'A',
  mixins: [mixins],
};
```

## 依赖注入（provide,inject）

`provide` 和 `inject` 可以帮助我们解决这一问题。 [[1\]](https://cn.vuejs.org/guide/components/provide-inject.html#footnote-1) 一个父组件相对于其所有的后代组件，会作为**依赖提供者**。任何后代的组件树，无论层级有多深，都可以**注入**由父组件提供给整条链路的依赖。

==**修改传值会导致数据源变化**==响应式数据

父组件或者数据源组件

```vue
<script setup>
import { provide } from 'vue'
let num =ref(100)
//provide(/* 注入名 */ 'message', /* 值 */ 'hello!')
    
</script>
```

接收组件：

```vue
<template>   
<input type="text" v-model="Anum" />   
C:{{ Anum }}   
<div>     
    <h1>zhuyeninai</h1>  
    </div> 
</template>  
<script setup> 
    const Anum = inject("changEm"); 
    console.log("接收到了B组件的值", Anum);
</script>
```

## Vuex

vuex是一个专为 Vue.js 应用程序开发的状态管理模式， 采用集中式存储管理应用的所有组件的状态，解决多组件数据通信。(简单来说就是管理数据的,相当于一个仓库,里面存放着各种需要共享的数据,所有组件都可以拿到里面的数据)

> 1.state 统一定义管理公共数据  
>
> 2.mutations: 使用它来修改数据  
>
> 3.getters: 类似于vue中的计算属性  
>
> 4.actions: 类似于methods,用于发起异步请求,比如axios  
>
> 5.modules: 模块拆分

![vue中使用vuex(超详细)](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/63fa8fec73104cb0ae1505b04b29412a~tplv-k3u1fbpfcp-zoom-crop-mark:1512:1512:1512:851.awebp?)

安装vuex

>  npm install vuex

使用router/index.js文件

```js
import { createStore } from 'vuex' 
export default createStore({     
state: { // 存放数据 和data类似          
    num: 10,         str: "nihaodiqiu" 
},    
mutations: { // 用来修改state和getters里面的数据 
      changeNum(state,val){             state.num = val         } 
},    
getters: { // 相当于计算属性
 number(state){             return state.num +state.sum         }
},     
actions: { // vuex中用于发起异步请求

},     
modules: {// 拆分模块        } 
})
```

```js
import store from '@/router/index' 
// 注册store 
createApp(App2).use(store).mount('#app')
```

数据：![image-20230507162054803](C:\Users\Hryi\AppData\Roaming\Typora\typora-user-images\image-20230507162054803.png)

在state下面

获取数据：

```js
let store = useStore()
store.state
store.getters.number
```

```js
const but=()=>{        
    store.commit('changeNum',1000)//提交mutations里面的方法，并且传值   
}
//dipatch来触发actions里面的方法
store.dipatch('changeName',500)
```

==Vuex持久化存储==

使用：vuex-persistedstate插件

配置index.js

```js
import persistedState fro 'vuex-persistedstate' //导入接口
import user from './modeles/user'//导入其他store模块
export default createStore({    
    plugins:[persistedState({         
        key:"xiao",//配置存储的key      
        paths:['user']//存储的路径  }   
)],
```

## Pinia

状态管理器，和vuex一样

**大致总结： **

> 1. 支持选项式api和组合式api写法 
> 2. pinia没有mutations,只有：state、getters、actions 
> 3. pinia分模块不需要modules(之前vuex分模块需要modules) 
> 4. TypeScript?支持很好 
> 5. 自动化代码拆分 
> 6. 可以直接修改==state数据==
> 7. pinia体积更小（性能更好）

**2、基本使用**

首先我们先安装

```bash
npm install pinia
```

在main.js中引入pinia并创建容器挂载到根实例上

```js
import { defineStore } from "pinia" // 定义容器 
export const useMain = defineStore('useStore', {   
    /**    * 存储全局状态    
    * 1.必须是箭头函数: 为了在服务器端渲染的时候避免交叉请求导致数据状态污染    * 和 TS 类型推导   */  
    state: () => {     
        return {      
            count: 0,       
            list: [1, 2, 3, 4 ]    
        }   },
    /**    * 用来封装计算属性 有缓存功能  类似于computed    */   
    getters: {        },   
    /**    * 编辑业务逻辑  类似于methods    */  
    actions: {    } 
})  
```

>  注意state必须是箭头函数：为了在服务端渲染的时候避免交叉请求导致数据污染，有利于TS类型推导

使用上面有介绍

```js
 state: () => {   
     return {     count: 0,     
             list: [ 1, 2, 3 ]  
            }
 } 
```

对比vuex 

```js
const state = () => ({  
    count: 0,   list: [ 1, 2, 3 ] 
})  
```



**actions:**

```js
actions: {   
    addList() {    
        this.count ++  
              }
}
```



* 对比于VueX  Action 提交的是 mutation，而不是直接变更状态。

* Action 可以包含任意异步操作。

```js
useStoreMain.$patch({   	
    count: useStoreMain.count += 1 
})   
// $patch 支持函数  
useStoreMain.$patch(state => { 	// state 就是容器 })  
// actions 更改多个数据 也建议使用$patch  
```

