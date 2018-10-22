### 一个完成的react项目
[github地址](https://github.com/ToNiQian/react-redux-router)
[demo地址](http://toniqian.com)(请调成手机模式观看)
***
#### 技术栈: webpack + react + react-router + redux + sass  + es6

### 1.下载

```
git clone git@github.com:toniqian/react-redux-router.git
cd react-redux-router
npm install (安装依赖模块)
npm install webpack -g (没有安装webpack的需要安装)
```

***
### 2.运行
##### 开发环境
```
npm run vendor (提取公共js)
npm run start(启动服务)
```
##### 生产环境
```
npm run prod
```
***
### 3.文件目录

![](http://upload-images.jianshu.io/upload_images/2701853-81e7d6ad06283a85.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

> - dist文件是打包的生产代码
> - node_modules 是开发需要的插件
> - src是开发目录
> - package.json 插件配置,运行命令的配置
> - server.js 开发环境的服务配置
> - webpack.config.js 开发环境的配置
> - webpack.dll.config.js 提取开发环境的公共js
> - webpack.prod.config.js 生产环境的配置
> - webpack.prod.dll.config.js 提取生产环境的公共js

****
### 4.项目目录
![](http://upload-images.jianshu.io/upload_images/2701853-fba3b490f24c6caa.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

> - action 组件改变状态的行为 
> - components 公共组件库
> - containers 首页
> - image 图片库
> - lib 公共js库
> - reducers reducer库
> - router 路由的汇总
> - routers 每个单独的页面,包含页面的路由配置
> - scss 样式库
> - index.html 开发环境页面模板
> - index.js 应用入口文件

***
### 5.命名规范
##### 整个项目以模块为单位

比如建立一个帮助中心模块,取名为help

**(1)image存在help模块,公共icon放入icon目录**

![](http://upload-images.jianshu.io/upload_images/2701853-d417e5b7d999e81a.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

***

**(2)reducers 存在help模块,reducer里面写help模块下的页面reducer,**
**index.js把help模块下reducer统一汇总**
![](http://upload-images.jianshu.io/upload_images/2701853-3c69a26c833d732b.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

***

**(3)routers 存在help模块,demo1,demo2为help模块下面的页面,**
**index.js把help模块下面的路由统一汇总**
![](http://upload-images.jianshu.io/upload_images/2701853-b6beb7014477c278.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

***

**(4)scss下面index.scss汇总项目的scss**

**animate为动画样式,common为公共样式,**

**component为组件样式**

**icon为图标样式,page为每个页面的样式汇总,**

**reset为重置样式,**

**variable为项目变量**

![](http://upload-images.jianshu.io/upload_images/2701853-aea763ed1ae1f180.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

***

### 6.项目功能

**项目是一个spa应用,包括首页,还有2个案例页,一个是表单验证页,**

**一个图片懒加载页,利用路由进行页面跳转,通过webpack做了按需加载,**

**每个页面只会请求当前页面的js,提高了页面的打开性能**

***

**项目状态树图**

> ![状态树图](http://upload-images.jianshu.io/upload_images/2701853-0d09647292676618.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

***

**首页是banner组件,还有btn组件组成**

> ![首页](http://upload-images.jianshu.io/upload_images/2701853-cdac84e8ab073b19.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

***

**表单验证页,是input组件,还有btn组件组成,加上逻辑组件getInput组件**

> ![表单验证页](http://upload-images.jianshu.io/upload_images/2701853-28947b8c26e78a2c.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

***

**图片懒加载,是image组件,建议所有的图片采用image组件**

> ![图片懒加载](http://upload-images.jianshu.io/upload_images/2701853-421a0a0141b0b7f0.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
***

### 7.代码分析

> 我把页面分为4种情况,分别编写了4个逻辑组件

> 1.页面无数据,静态页面 使用GetPage组件

> 2.页面有数据,需要渲染页面的, 使用GetData组件

> 3.页面是表单页面,使用GetInput组件

> 4.页面为需要翻页的列表页,使用GetNextPage组件

**注:逻辑组件内部会与redux关联,然后会把一些公共组件,**
**比如一些头部组件,底部组件之类的放在逻辑组件内部,**
**进行统一化管理,所以所有页面尽量采用这4种逻辑组件**
**作为统一外部组件,实现统一管理**

![](http://upload-images.jianshu.io/upload_images/2701853-97c4980846b5fd92.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

### 8.总结

> 1.开发spa应用,利用webpack进行了按需加载,大大提高了页面的性能

> 2.使用逻辑组件,页面根据对应的需求采用对应的逻辑组件,
> 大大提高了页面的开发效率,方便进行统一管理

> 3.采用redux进行页面的状态管理,把每个页面具备的公共状态抽离出来,
> 如alert组件,loading组件的状态,在逻辑组件统一管理

> 4.每个页面都有对应的reducer唯一标识,用来记录每个页面的独立状态,
> 在reducers目录进行配置

> 5.每个页面都会获取自己页面的状态,通过在reducer配置的唯一标识来区分

> 6.页面需要改变状态,需要发送action行为,统一定义为setState,用来改变状态

> 7.为了页面还原到离开之前的状态,在离开页面的时候
> 会把当前的离开位置,记录在当前页面的状态中,回来的时候还回到离开的位置

> 8.离开页面会把当前页面的数据存储在状态中,重新回到页面,
> 会首先加载状态中的数据,后面再通过数据请求,
> 比较新旧数据的区别进行替换,大大加快了页面的2次打开速度

> 9.借助webpack可以编译sass,px转rem,es6编译成es5,模块化开发,代码压缩混淆,图片压缩......

> 10.项目以模块化为基准,每个目录下面都会对应模块的分类,
请注意模块的分类，相同子模块放到一个父模块里面。
图片名称,文件夹名称,文件名称,样式名称,统一采用-命名
如: about-us 采用中划线的命名方式