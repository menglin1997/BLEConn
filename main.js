import Vue from 'vue'
import App from './App'

import { http } from '@/utils/request/index.js'
Vue.config.productionTip = false
Vue.prototype.$http = http

App.mpType = 'app'

import i18n from './lang/index' 
Vue.prototype._i18n = i18n
// import { conn } from './utils/socket/send.js'
// conn()

const app = new Vue({
		i18n,
    ...App,
		
})
app.$mount()
