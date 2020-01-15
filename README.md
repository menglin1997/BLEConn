1. 页面命名小驼峰
2. request 请求使用全局 ` this.$http `
3. 本地储存storage key 必须在‘/utils/storageTypes.js’ 里定义常量，使用时也必须引入常量
4. 微信小程序现无法做到*强制登录*，在明确需要token的页面必须使用‘utils/user’ 里 ` checkLogin `，判断是否登录。如必须登录，弹框询问用户是否去登陆，如用户点击确定，则调用‘utils/myUtils.js’ 里 ` redirectLogin ` 函数
5. 全局css命名空间` am `