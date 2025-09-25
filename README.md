<!--
 * @Descripttion: 
 * @version: 
 * @Author: zml
 * @Date: 2020-11-19 10:52:43
 * @LastEditors: zml
 * @LastEditTime: 2020-11-19 11:18:18
-->
# 启动

把项目下载后放到Hbuilder中 用微信小程序预览即可打开

# 预览


![image](./xcx.jpg)


# 项目介绍

> 本项目是由uniapp开发的微信小程序连接低功耗蓝牙
>
> 主要功能有搜索低功耗蓝牙，连接低功耗蓝牙，给蓝牙发送命令，接收蓝牙回复的命令

# 功能介绍以及使用说明

> 用到的文件有`pages/login/login`, `utils/socket/BLEConn.js`两个文件
>
> `utils/socket/BLEConn.js`对蓝牙操作的封装（包含蓝牙列表搜索，蓝牙连接，蓝牙断开，蓝牙分包发送命令，蓝牙分包接收命令）
>
> `pages/login/login`对蓝牙的连接操作

## BLEConn.js方法说明
> getBlooth 搜索蓝牙列表
> createBLE 连接蓝牙
> getCharacteristics 获取某个服务的特征值这里做了判断 有notify功能才会返回正确 可根据项目需要修改返回状态
> writeBLE 写入命令-即给蓝牙发送命令（项目中是分包操作），如果不需要分包可参考hexToArrayBuffer方法转换命令
> watchNotify 如果你项目里面有notify功能  这里会主动收到消息 

## `pages/login/login`业务逻辑

1. 点击按钮调用BLEConn封装的方法进行搜索蓝牙
2. 搜索到蓝牙之后点击需要连接的蓝牙进行连接
3. 连接时调用createBLE方法 ，该方法会传入两个参数，一个是需要连接的蓝牙对象，另一个是发送命令时候的服务的uuid（此uuid可以问给蓝牙协议的人）
4. 连接不上会进行三次重连操作 ，三次都没有连接上提示连接失败

# `utils/socket/BLEConn.js`业务逻辑

1. 初始化蓝牙
2. 搜索蓝牙列表，将搜索出的name值为空或者’未知设备‘并且包含有localName的蓝牙设备的name重新命名为localName的值，将搜索出来的deviceId重复的只保存一个

# 分包接收访问下边的链接

https://juejin.im/post/5e1b0bf25188252c4f2ba2bd

# 分包发送访问下边的链接

https://juejin.im/post/5e1b0c85e51d45588849581f
