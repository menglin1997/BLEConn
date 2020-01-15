import Request from './request'
import {
	apiBaseUrl
} from '@/utils/service.js'

const http = new Request()

http.setConfig((config) => {
	config.baseUrl = apiBaseUrl
	config.header = {
		...config.header
	}
	return config
})


http.interceptor.request((config, cancel) => { /* 请求之前拦截器 */
	config.header = {
		...config.header,
		b: 1
	}

	return config
})

http.interceptor.response((response) => { /* 请求之后拦截器 */
	return response
}, (response) => { // 请求错误做点什么
	return response
})

export {
	http
}
