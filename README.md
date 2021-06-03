#  `Resume-wx`

>  `Resume-wx`是一款优秀的基于`uniapp`的微信小程序
>
> 主要是为了帮助广大开发者快速搭建一个属于自己的微信个人简历小程序



# 项目安装/启动

##### 1.下载源码

```js
https://github.com/xujian0921/Resume-wx.git
```

##### 2.安装依赖

```js
npm install    //安装失败的话可以切换到淘宝源  cnpm install 或者 yarn
```

##### 3.启动准备

- 小程序账号

- 微信开发者工具： [https://mp.weixin.qq.com](https://mp.weixin.qq.com/)

- 编辑器：[HBuilderX](https://www.dcloud.io/hbuilderx.html)（建议）

##### 4. 启动项目

-  打开`HBuilderX`导入项目
-  `ctrl +R`或者点击左上方运行图标启动微信开发者工具启动项目



# 项目说明

**Resume-wx**分为**正式版**（master）和**简易版**(dev)

##### 正式版

有条件的可以使用正式版，正式版需要一台服务器和一个https域名。配合开源项目`Resume-api`和`Resume-react`一起使用。

`Resume-api`是基于koa2实现的RESTful风格的API，MongoDB实现数据读写，为小程序提供了增删改查接口

`Resume-react`是基于ant-design-pro v4 以react hooks 风格实现的小程序后台管理系统，为小程序提供了用户注册，简历信息提交更新，图片上传等功能。

大家可以基于此版本继续进行二次创作，实现一个属于自己的高逼格简历小程序

##### 简易版

由于条件有限，有些小伙伴们时间有限，服务器到期或者域名没有备案之类的原因导致小程序无法调用接口，那怎么办呢？？？

应大家的需求推出了简易版本，简易版本数据都是写死的，大家可以申请小程序后直接上传代码，即可打造出一个属于自己的个人简历小程序啦。

##### 正式版和简易版的区别在哪呢？

正式版用户可以登录自己的账号查看自己的简历信息，也可以搜索他人的用户名以查看简历信息，并且正式版可以去管理端修改自己的简历信息，及时更新内容。

简易版数据都写在程序内，修改的话需要重新发版。

# 功能展示

### 登录

![H5](https://opensource-photo.oss-cn-shanghai.aliyuncs.com/Resume/resume-wx-login.png )

### 搜索

![H5](https://opensource-photo.oss-cn-shanghai.aliyuncs.com/Resume/resume-wx-search.png )



# Resume

Resume系列是一个完整的简历项目，包含了**小程序端**、**后端**、**管理端**，涉及到的知识点也非常多，包括了**uniapp**、**koa2**、**mongodb**、**vue**、**react**、**niginx配置**、**域名**、 **小程序**等一系列知识点，从开发到上线部署，到投入正式使用，非常全面。欢迎大家一起学习交流。

小程序端： [Resume-wx](https://github.com/xujian0921/Resume-wx/issues)

node后端:  [Resume-api](https://github.com/xujian0921/Resume-api)

react管理端: [Resume-admin-react](https://github.com/xujian0921/Resume-admin-react)



## ★Star

如果你有好的意见或建议，欢迎给我们提 [issue](https://github.com/xujian0921/Resume-wx/issues) 

如果你觉得此项目对你有帮助的话，请点亮最上方的star,谢谢啦。-.-

 ##### 路漫漫其修远兮，吾将上下而求索 