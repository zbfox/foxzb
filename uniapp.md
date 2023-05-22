# uni-app

官网：https://uniapp.dcloud.net.cn/

`uni-app` 是一个使用 [Vue.js](https://vuejs.org/) 开发所有前端应用的框架，开发者编写一套代码，可发布到iOS、Android、Web（响应式）、以及各种小程序（微信/支付宝/百度/头条/飞书/QQ/快手/钉钉/淘宝）、快应用等多个平台

```js
┌─cloudfunctions        云函数目录（阿里云为aliyun，腾讯云为tcb，详见uniCloud）
│─components            符合vue组件规范的uni-app组件目录
│  └─comp-a.vue         可复用的a组件
├─hybrid                存放本地网页的目录，详见
├─platforms             存放各平台专用页面的目录，详见
├─pages                 业务页面文件存放的目录
│  ├─index
│  │  └─index.vue       index页面
│  └─list
│     └─list.vue        list页面
├─static                存放应用引用静态资源（如图片、视频等）的目录，注意：静态资源只能存放于此
├─wxcomponents          存放小程序组件的目录，详见
├─main.js               Vue初始化入口文件
├─App.vue               应用配置，用来配置App全局样式以及监听 应用生命周期
├─manifest.json         配置应用名称、appid、logo、版本等打包信息，详见
└─pages.json            配置页面路由、导航条、选项卡等页面类信息，详见

```

重点是pages、static、main.js、App.vue、manifest.json、pages.json这几个目录或者文件。

* uni-app代码编写，基本语言包括js、vue、css。以及ts、scss等css预编译器。

scss强化版的css

* SCSS 是 Sass 3 引入新的语法，其语法完全兼容 CSS3，并且继承了 Sass 的强大功能。也就是说，任何标准的 CSS3 样式表都是具有相同语义的有效的 SCSS 文件，官方解释。

```css
$border-color:#aaa; //声明变量
.container {
$border-width:1px;
    border:$border-width solid $border-color; //使用变量
}

//编译后：
.container {     border:1px solid #aaa; //使用变量 }
```



* 嵌套选择器

  ```css
  /*scss*/
  .container ul {
      border:1px solid #aaa;
      list-style:none;
      
      li {
          float:left;
      }
      
      li>a {
          display:inline-block;
          padding:6px 12px;
      }
  }
  
  .container ul:after {
      display:block;
      content:"";
      clear:both;
  }
  
  ```

  * #### 嵌套中的父级选择器

    SCSS提供了一个选择器可以选中当前元素的父元素，使用&表示，下面用父级选择器继续简化代码。

    ```css
    /*scss*/
    .container ul {
        border:1px solid #aaa;
        list-style:none;
        
        li {
            float:left;
        }
        
        li>a {
            display:inline-block;
            padding:6px 12px;
        }
        
        &:after {
            display:block;
            content:"";
            clear:both;
        }
    }
    
    ```

scss快速入门：[https://juejin.cn/post/6844903859010158600#heading-22]

```js
console.log("这段代码只有在App平台才会被编译进去。非App平台编译后没有这段代码")
```

## pages.json 页面路由

页面路由文档：[https://uniapp.dcloud.net.cn/collocation/pages.html]

`pages.json` 文件用来对 uni-app 进行全局配置，决定页面文件的路径、窗口样式、原生的导航栏、底部的原生tabbar 等。

它类似微信小程序中`app.json`的页面管理部分。注意定位权限申请等原属于`app.json`的内容，在uni-app中是在manifest中配置。

* **globalStyle **用于设置应用的状态栏、导航条、标题、窗口背景色等。

  

* **pages**

  * `uni-app` 通过 pages 节点配置应用由哪些页面组成，pages 节点接收一个数组，数组每个项都是一个对象，其属性值如下：

    | 属性  | 类型   | 默认值 | 描述                                                         |
    | :---- | :----- | :----- | :----------------------------------------------------------- |
    | path  | String |        | 配置页面路径                                                 |
    | style | Object |        | 配置页面窗口表现，配置项参考下方 [pageStyle](https://uniapp.dcloud.net.cn/collocation/pages#style) |

* ####  **style**

  用于设置每个页面的状态栏、导航条、标题、窗口背景色等。

  页面中配置项会覆盖 [globalStyle](https://uniapp.dcloud.net.cn/collocation/pages#globalstyle) 中相同的配置项

* ####  自定义导航栏使用注意

  当navigationStyle设为custom或titleNView设为false时，原生导航栏不显示，此时要注意几个问题：

  - 非H5端，手机顶部状态栏区域会被页面内容覆盖。这是因为窗体是沉浸式的原因，即全屏可写内容。uni-app提供了状态栏高度的css变量[--status-bar-height](https://uniapp.dcloud.net.cn/tutorial/syntax-css.html#css-变量)，如果需要把状态栏的位置从前景部分让出来，可写一个占位div，高度设为css变量。

* #### 下拉刷新

  * ```json
    {
        "pages": [
            {
                "path": "pages/index/index", //首页
                "style": {
                    "app-plus": {
                        "pullToRefresh": {
                            "support": true,
                            "color": "#ff3333",
                            "style": "default",
                            "contentdown": {
                                "caption": "下拉可刷新自定义文本"
                            },
                            "contentover": {
                                "caption": "释放可刷新自定义文本"
                            },
                            "contentrefresh": {
                                "caption": "正在刷新自定义文本"
                            }
                        }
                    }
                }
            }
        ]
    }
    
    
    ```

## uni.scss全局样式设定

设定：

```scss
/*字体大小*/
.font-30 {
	font-size: 30upx !important;
}
.font-16 {
	font-size: 16upx !important;
}

.font-17 {
	font-size: 17upx !important;
}

//颜色设定
.color-d8 {
	color: #d83cff;
}

.color-ff {
	color: #ff313e;
}
```

使用：

```vue
<template>
	<view class="font-16 color-d8">
		class
		<view class="title">123456</view>//必须设定一个页面样式，否则编译不到自定义全局样式
	</view>
</template>
```

* 图标注册使用

iconfont图标库，阿里巴巴矢量图标库：【https://www.iconfont.cn/】

uni.scss导入

```css
// 导入图标
@import '/font/iconfont.css';
```

使用图标：

* 通过class类名使用

```vue
<view class="iconfont icon-vip-fill"></view>
```

* 也可以通过class类名对图标的样式进行操作

## mvvm模式

```vue
<template>
	<view class="font-10 color-d8">
		class
		<view class="title">123456</view>
		<view class="iconfont icon-vip-fill"></view>
		<button @click="chageClick">按钮</button>
		<text class="font-30">{{ id }}</text>
		<text>{{ msg }}</text>
	</view>
</template>

<script>
export default {
	data() {
		return {
			msg: '我是被隐藏的样式',
			id: 1
		};
	},
	methods: {
		chageClick() {
			this.id++;
		}
	}
};
</script>
```

### v-bin

使用和vue一样

```vue
<template>
	<view>
		{{ name }}
		<text class="box" :class="isStyle ? 'active' : ''">{{ name }}</text>
		<button @click="change">按钮</button>
	</view>
</template>

<script>
export default {
	data() {
		return {
			name: '你好',
			isStyle: false
		};
	},
	methods: {
		change() {
			this.isStyle = true;
		}
	}
};
</script>

<style lang="scss">
.box {
	background-color: rebeccapurple;
}
.active {
	width: 100px;
	height: 100upx;
	background-color: yellow;
}
</style>
```

### v-ontap

uniapp提供手机端触摸事件

```vue
<template>
	<view>
		<view>
			<text v-bind:class="['text1', 'texte2', { text3: isData }]">显示</text>
		</view>
        //手机端触摸事件
		<button type="primary" class="btn1" v-on:tap="chageClass">tap按钮事件</button>
		{{ isData }}
		<button type="primary" class="btn1" v-on:click="chageClass">click按钮事件</button>
	</view>
</template>

<script>
export default {
	data() {
		return {
			isData: 1
		};
	},
	methods: {
		chageClass() {
			this.isData = !this.isData;
		}
	}
};
</script>

<style lang="scss">
.text1 {
	font-size: 60upx;
}
.texte2 {
	background-color: red;
}
.text3 {
	color: yellow;
}
.btn1 {
	width: 90px;
	height: 25px;
	line-height: 25px;
	font-size: 18upx;
	background-color: orangered;
}
</style>
```

### v-for

通过v-for循环打印数据

在此过程中`:key`的存在解决了dom树中的复用问题，不使用key会导致，索引失效，出现bug

**在dom更新的过程中使用了==Diff算法==**

* Diff算法保证了发现识别DOM树的变化
* 对于新旧DOM的变化做出识别，并且替换
* 对于没有key的节点就会发生DOM的复用，不去改变节点

![image-20230518155728510](C:\Users\Hryi\AppData\Roaming\Typora\typora-user-images\image-20230518155728510.png)

## watch监听

当你有一些数据需要随着其它数据变动而变动时，你很容易滥用 `watch` 。然而，通常更好的做法是使用计算属性而不是命令式的 `watch` 回调。

```js
export default {
	data() {
		return {
			firstName: 'Foo',
			lastName: 'Bar',
			fullName: 'Foo Bar'
		}
	},
	watch: {
		firstName: function(val) {
			this.fullName = val + ' ' + this.lastName
		},
		lastName: function(val) {
			this.fullName = this.firstName + ' ' + val
		}
	}
}
```

上面代码是命令式且重复的。将它与计算属性的版本进行比较：

```js
export default {
	data() {
		return {
			firstName: 'Foo',
			lastName: 'Bar'
		}
	},
	computed: {
	    fullName(){
			return this.firstName + ' ' + this.lastName
	    }
	}
}
```

## 修饰符

修饰符 (modifier) 是以半角句号 . 指明的特殊后缀，用于指出一个指令应该以特殊方式绑定。例如，`.prevent` 修饰符告诉 @事件对于触发的事件调用 `event.preventDefault()`：

@事件（v-on）提供了事件修饰符:

- `.stop`: 各平台均支持， 使用时会阻止事件冒泡，在非 H5 端同时也会阻止事件的默认行为
- `.native`: 监听原生事件，各平台均支持
- `.prevent`: 仅在 H5 平台支持
- `.capture`: 仅在 H5 平台支持
- `.self`: 仅在 H5 平台支持
- `.once`: 仅在 H5 平台支持
- `.passive`: 仅在 H5 平台支持



```vue
<!-- 阻止单击事件继续传播 --> 	<view @click.stop="doThis"></view>
```

> 使用修饰符时，顺序很重要；相应的代码会以同样的顺序产生。因此，用 `@click.prevent.self` 会阻止所有的点击，而 `@click.self.prevent` 只会阻止对元素自身的点击。

## colorUI样式库

插件下载

导入css样式

uni.scss

```js
@import '/colorui/main.css'; 
@import '/colorui/icon.css';
```

* 复制color样式库到项目中

* 使用

  ```vue
  <view class="text-center text-xxl bg-brown">
  				布局
  				<text class="text-price"></text>
  			</view>
  			<view class="grid text-center">
  				<view class="bg-blue padding-xl margin" v-for="(item, index) in 8" :key="item.id">{{ item }}</view>
  			</view>
  ```

  * 直接导入样式的class名称

## 配置uView组件库

官网：https://www.uviewui.com/

导入npm或者插件导入

* 1. 引入uView主JS库

在项目根目录中的`main.js`中，引入并使用uView的JS库，注意这两行要放在`import Vue`之后。

```js
// main.js
import uView from '@/uni_modules/uview-ui'
Vue.use(uView)
```

* 2. 在引入uView的全局SCSS主题文件

在项目根目录的`uni.scss`中引入此文件。

```css
/* uni.scss */
@import '@/uni_modules/uview-ui/theme.scss';
```

* 3. 引入uView基础样式

注意！

在`App.vue`中**首行**的位置引入，注意给style标签加入lang="scss"属性

```css
<style lang="scss">
	/* 注意要写在第一行，同时给style标签加入lang="scss"属性 */
	@import "@/uni_modules/uview-ui/index.scss";
</style>
```

* 4在page.json中导入，相当于批量导入

  ```json
  // 如果您是通过uni_modules形式引入uView，可以忽略此配置
  	"easycom": {
  		"^u-(.*)": "@/uni_modules/uview-ui/components/u-$1/u-$1.vue"
  	},
  ```

**使用**：

* 导入直接使用

  ```vue
  <u-tag text="标签" size="mini" type="warning"></u-tag>
  ```

## uniapp路由配置

* **路由**

`uni-app`页面路由为框架统一管理，开发者需要在[pages.json](https://uniapp.dcloud.net.cn/collocation/pages#pages)里配置每个路由页面的路径及页面样式。类似小程序在 app.json 中配置页面路由一样。所以 `uni-app` 的路由用法与 `Vue Router` 不同，如仍希望采用 `Vue Router` 方式管理路由，可在插件市场搜索 [Vue-Router](https://ext.dcloud.net.cn/search?q=vue-router)。

* **路由跳转**

`uni-app` 有两种页面路由跳转方式：使用[navigator](https://uniapp.dcloud.net.cn/component/navigator)组件跳转、调用[API](https://uniapp.dcloud.net.cn/api/router)跳转。

* **页面栈**
  * 用来缓存用户访问之后的页面提高加载效率，提高性能

框架以栈的形式管理当前所有页面， 当发生路由切换的时候，页面栈的表现如下：

| 路由方式   | 页面栈表现                        | 触发时机                                                     |
| ---------- | --------------------------------- | ------------------------------------------------------------ |
| 初始化     | 新页面入栈                        | uni-app 打开的第一个页面                                     |
| 打开新页面 | 新页面入栈                        | 调用 API  [uni.navigateTo](https://uniapp.dcloud.net.cn/api/router#navigateto) 、使用组件  <navigator open-type="navigate"/> |
| 页面重定向 | 当前页面出栈，新页面入栈          | 调用 API  [uni.redirectTo](https://uniapp.dcloud.net.cn/api/router#redirectto) 、使用组件<navigator open-type="redirectTo"/> |
| 页面返回   | 页面不断出栈，直到目标返回页      | 调用 API  [uni.navigateBack](https://uniapp.dcloud.net.cn/api/router#navigateback)  、使用组件<navigator open-type="navigateBack"/> 用户按左上角返回按钮、安卓用户点击物理back按键 |
| Tab 切换   | 页面全部出栈，只留下新的 Tab 页面 | 调用 API  [uni.switchTab](https://uniapp.dcloud.net.cn/api/router#switchtab) 、使用组件<navigator open-type="switchTab"/> 、用户切换 Tab |
| 重加载     | 页面全部出栈，只留下新的页面      | 调用 API  [uni.reLaunch](https://uniapp.dcloud.net.cn/api/router#relaunch) 、使用组件  <navigator open-type="reLaunch"/> |

页面通讯 ：【https://uniapp.dcloud.net.cn/tutorial/page.html】

路由使用组件：https://uniapp.dcloud.net.cn/component/navigator.html

### navigator

```vue
<navigator url="navigate/navigate?title=navigate" hover-class="navigator-hover"> 					<button type="default">跳转到新页面</button> 				
</navigator>
```

使用api：

```vue
//在起始页面跳转到test.vue页面并传递参数 
handerU: function (id) {
			uni.navigateTo({
				url: '../test-computed/test-computed?id=' + encodeURIComponent(JSON.stringify(id))
			});
		}
```

url有长度限制，太长的字符串会传递失败，可使用[窗体通信](https://uniapp.dcloud.io/tutorial/page.html#emit)、[全局变量](https://ask.dcloud.net.cn/article/35021)，或`encodeURIComponent`等多种方式解决，如下为`encodeURIComponent`示例。

```html
<navigator :url="'/pages/navigate/navigate?item='+ encodeURIComponent(JSON.stringify(item))" >
</navigator>
```

```javascript
// navigate.vue页面接受参数
onLoad: function (option) {
	const item = JSON.parse(decodeURIComponent(option.item));
}
```

### uni.navigateBack(OBJECT)

关闭当前页面，返回上一页面或多级页面。可通过 `getCurrentPages()` 获取当前的页面栈，决定需要返回几层。

delta：返回的页面数，如果 delta 大于现有页面数，则返回到首页。

```javascript
A ， B ， C
// 在C页面内 navigateBack，将返回A页面
uni.navigateBack({
	delta: 2
});
```

### uni.switchTab(OBJECT)

跳转到 tabBar 页面，并关闭其他所有非 tabBar 页面，到底部菜单页面

pages.json

```javascript
{
  "tabBar": {
    "list": [{
      "pagePath": "pages/index/index",
      "text": "首页"
    },{
      "pagePath": "pages/other/other",
      "text": "其他"
    }]
  }
}
```

other.vue

```javascript
uni.switchTab({
	url: '/pages/index/index'
});
```

## uniapp的页面生命周期

`uni-app` 页面除支持 Vue 组件生命周期外还支持下方页面生命周期函数，当以组合式 API 使用时，在 Vue2 和 Vue3 中存在一定区别，请分别参考：[Vue2 组合式 API 使用文档](https://uniapp.dcloud.net.cn/tutorial/vue-composition-api.html) 和 [Vue3 组合式 API 使用文档](https://uniapp.dcloud.net.cn/tutorial/vue3-composition-api.html)。

| 函数名            | 说明                                                         | 平台差异说明 | 最低版本 |
| :---------------- | :----------------------------------------------------------- | :----------- | :------- |
| onInit            | 监听页面初始化，其参数同 onLoad 参数，为上个页面传递的数据，参数类型为 Object（用于页面传参），触发时机早于 onLoad | 百度小程序   | 3.1.0+   |
| onLoad            | 初始化页面，监听页面加载，其参数为上个页面传递的数据，参数类型为 Object（用于页面传参），参考[示例](https://uniapp.dcloud.net.cn/api/router#navigateto) |              |          |
| onPullDownRefresh | 监听用户下拉动作，一般用于下拉刷新，参考示例                 |              |          |
| onTabItemTap      | 点击 tab 时触发，参数为Object，具体见下方注意事项            |              |          |
| onShow            | 监听页面实时更新，监听页面显示。页面每次出现在屏幕上都触发，包括从下级页面点返回露出当前页面 |              |          |

## uniapp组件生命周期

同vue的生命周期一样

* **全局挂载组件：**

```vue
main.js

//全局注册组件
import One from 'componets/one/one';
Vue.component('one', One)


使用：
//页面或者组件中使用
<one> </one>
```

## LeanCloud

数据存储管理平台LeanCloud

LeanCloud（原 AVOS Cloud） 是针对移动应用的一站式云端服务，专注于为应用开发者提供工具和平台。提供包括**LeanStorage 数据存储、LeanMessage 通信服务、LeanAnalytics 统计分析、LeanModules 拓展模块**等四大类型的后端云服务，加速应用开发。

* 创建应用

* 阅读教程

* 使用

  ```js
  onLoad() {
  		uni.request({
              //请求地址
  			url: 'https://j5vb7d3h.lc-cn-e1-shared.com/1.1/classes/classfiy',
  			method: 'GET',
              /**请求头**/
  			header: {
  				'X-LC-Id': 'j5vb7D3HOH9QpokUjKzznBf6-9Nh9j0Va',
  				'X-LC-Key': 'FMyDux6QfcHIpM3GPXcwCuRr'
  			},
  			success(res) {
  				console.log(res);
  			}
  		});
  ```

封装：

utils

* request.js

```js
let baseUrl = "https://j5vb7d3h.lc-cn-e1-shared.com"
// 自定义加个$以免冲突
export const $http = function(url, method = "GET", data = {}) {
	return new Promise((resolve, reject) => {
		uni.request({
			url: baseUrl + url,
			method,
			header: {
				'X-LC-Id': 'j5vb7D3HOH9QpokUjKzznBf6-9Nh9j0Va',
				'X-LC-Key': 'FMyDux6QfcHIpM3GPXcwCuRr',
				'Content-Type': 'application/json'
			},
			data,
			success(res) {
				resolve(res.data)
			},
			fail(err) {
				reject(err)
			}
		})
	})
}
```

使用：

import导入：

* ```js
  import { $http } from '../../utils/request.js';
  
  onLoad() {
  		$http('/1.1/classes/classfiy').then((res) => {
  			console.log(res);
  		});
  }
  ```

  * 全局注册

    ```js
    //全局封装的注册请求
    import * as request from "./utils/request.js"
    
    //Vue.prototype.$http = reuqset.$http
    for (let key in request) {
    	Vue.prototype[key] = request[key]
    }
    使用：
    this.$get(url).then((res)=>{
        console.log(res)
    })
    ```

web-View链接：

* 新建页面

  ```js
  <view class="" @tap="linkTo(result[0].link)">
  			<image :src="result[0].image"></image>
  		</view>
  		
  		linkTo(link) {
  			console.log(link);
  			uni.navigateTo({
  				url: './banner/banner?link=' + link
  			});
  		}
  ```

  

* 接收数据

  ```vue
  <template>
  	<view>
  		<text>新网页</text>
          承载网页的容器
  		<web-view :src="webSrc"></web-view>
  	</view>
  </template>
  
  <script>
  export default {
  	data() {
  		return {
  			webSrc: ''
  		};
  	},
  	methods: {},
  	onLoad(option) {
  		this.webSrc = option.link;
  		console.log(option );
  	}
  };
  </script>
  ```


## Vuex

集中式存储管理工具

> 1.state 统一定义管理公共数据  
>
> 2.mutations: 使用它来修改数据  
>
> 3.getters: 类似于vue中的计算属性  
>
> 4.actions: 类似于methods,用于发起异步请求,比如axios  
>
> 5.modules: 模块拆分

uniapp不需要导入Vuex，官方内置

使用：

* 新建文件`store/index.js`

  ```js
  import Vue from "vue"
  import Vuex from 'vuex'
  //拆分模块方便后续处理更多数据
  import count from './count.js'//导入被拆分的模块
  import condition from './condition.js'
  Vue.use(Vuex)//注册vuex
  const store = new Vuex.Store({
  	modules:{
  		count,
  		condition
  	}
  })
  export default store
  ```
  
  main.js中注册
  
  > // 注入vuex
  >
  >  import store from '@/store/index.js'
  
  > const app = new Vue({
  > 	...App,
  > 	store //注入状态机
  > })

在必须在computed方法中使用

* ```js
  num(){
      return this.$store.state.num
  }
  ```

  
