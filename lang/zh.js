export default {
		lang: 'zh',
		loading: '加载中...',
		title: '广告机',
		login: {
			button: '扫码录入',
			more: '更多'
			
		},
		password: {
			placeholder: '请输入设备密码',
			change: '修改密码',
			oldPswd: '请输入旧密码',
			newPswd: '请输入新密码',
			submit: '提交',
			confirm: '确定',
			cancel: '取消'
		},
		turnPage: {
			title: '翻页模式',
			last: '最后一副',
			first: '第一幅画',
			down: '下翻键向下翻页',
			// down: '下翻键向下翻页',
			up: '上翻键向上翻页'
			// up: '上翻键向上翻页'
		},
		calibration: {
			title: '画面校正',
			click: '短按',
			Inching: '点动运行',
			pres: '长按',
			moving: '低速运行',
			
		},
		other: {
			closing: '关闭中...',
			sureConnBLE: '请确保连接了蓝牙',
			corretTime: '是否自动校时?',
			y: '是',
			n: '否',
			login: '登录中',
			AutoCan: '自动模式可以进入',
			settingFail: '设置失败',
			offlineOrOther: '设备离线或异常',
			outLine: '设备不在线',
			setting1: '设置中',
			BLEList: '查询蓝牙列表',
			BLEConn: '蓝牙列表(点击连接设备)',
			BLENone: '暂无蓝牙设备',
			search: '搜索中',
			reconnection: '重连中',
			fail: '连接失败',
			checking: '检测中',
			corrected: '您当前连接的是此设备',
			conning: '连接中,请稍等',
			
			notStorage: '设备未入库',
			sucWait: '连接成功,请稍等',
			searchNone: '未搜索到设备/正在使用中',
			searchFail: '查询失败,请确保蓝牙可用/定位开启',
			stopMode: '急停模式',
			back: '手动自动键退出',
			save: '确认保存',
			toMenu: '返回退出',
			move: '键点击运行',
			enter: '按',
			setItems: '按确认键设置参数',
			sysTitle: '系统日期时间设置',
			modeTitle: '运行模式设置',
			host: '主机',
			single: '独立',
			test: '自检',
			client: '从机',
			delayTitle: '同步延时设置',
			copyTitle: '参数复制',
			copy: '复制中...',
			setIdTitle: '主板ID号设置'
		},
		Manu: {
			title: '手动运行模式',
			title2: '自动运行模式'
		},
		pageNum: {
			title: '画面幅数设置',
			set: '画面总数:',
			change: '键改变幅数'
		},
		showTime: {
			all: '全部展示时间设置',
			single: '单幅展示时间设置',
			No: '第',
			set: '幅展示时间:'
		},
		speedSet: {
			title: '运行速度设置',
			set: '运行速度为:',
			change: '键改变速度'
		},
		timer: {
			title1: '开机定时A设置',
			title2: '开机定时B设置',
			title3: '关机定时A设置',
			title4: '关机定时B设置',
			title5: '开灯定时设置',
			title6: '关灯定时设置'
			
		},
		stopPic: {
			title: '停机画面设置'
		},
		parameters: {
			OV: '过压保护',
			OC: '过流保护',
			OT: '过温保护',
			UV: '欠压保护',
			UVT: '欠压保护时间'
		},
		index: {
			auto: '自动',
			GPRS: '有线',
			BLE: '蓝牙',
			Speed: '速度',
			modelContent: '您确定要返回扫码页面吗？',
			manu: '手动',
			client: '从机',
			ok: '系统正常',
			OV: '过压保护',
			OC: '过流保护',
			OT: '过温保护 ',
			UV: '欠压保护',
			F: '连接失败',
			host: '主机',
			single: '独立',
			test: '自检',
			setBLEData: [
				{ id: 1, value: '搜索蓝牙设备' },
				{ id: 2, value: '断开连接' }
			],
			homeData: {
				d_l: 0,
				d_r: 0,
				f_l: 0,
				f_r: 0,
				h_l: 0,
				h_r: 0,
				m_l: 0,
				m_r: 0,
				s_l: 0,
				s_r: 0,
				y_l: 0,
				y_r: 0,
				// // 年月日
				// year_l: 0,
				// year_r: 0,
				// month_l: 0,
				// month_r: 0,
				// day_l: 0,
				// day_r: 0,
				// // 时分秒
				// hour_l: 0,
				// hour_r: 0,
				// minute_l: 0,
				// minute_r: 0,
				// second_l: 0,
				// second_r: 0,
				// 第四行
				runStatus: 0, // 运行状态 0自动 7自检 3急停 4或1手动 2 或6 微调  8暂时未用到
				// 主从机模式
				model: 0, //  0-独立 1-主机，2-从机
				// 速度和类型
				speed: 0, // 速度为0-9
				/* 主板工作状态
				0--系统正常  2--过温保护  3--过流保护  4--过压保护  5--欠压保护）   其它：连接失败 */
				workStatus: 6,
				type: 1, // 1GPRS 2BLE
				// 当前画面
				nowPic: 1
				
			},
			// 设置项数据
			setItemData: [
				{ id: 1, value: '画面副数' },
				{ id: 2, value: '展示时间' },
				{ id: 3, value: '定时时间' },
				{ id: 4, value: '运行速度' }
			],
			setItemsData1: [
				{ id: 1, value: '画面副数' },
				{ id: 2, value: '展示时间' },
				{ id: 3, value: '定时时间' },
				{ id: 4, value: '运行速度' }
			],
			setItemsData2: [
				{ id: 5, value: '停机画面' },
				{ id: 6, value: '系统时间' },
				{ id: 7, value: '运行模式' },
				{ id: 8, value: '同步延时' }
			],
			setItemsData3: [
				{ id: 9, value: '参数复制' },
				{ id: 10, value: '主板ID号' },
				{ id: 11, value: '其他参数' },
				{ id: 12, value: '蓝牙设置' }
			],
			// 展示时间数据
			showTimeData: [
				{ id: 1, value: '全部展示时间' },
				{ id: 2, value: '单幅展示时间' }
			],
			// 定时设置
			timerData: [
				{ id: 1, value: '开机定时A' },
				{ id: 2, value: '关机定时A' },
				{ id: 3, value: '开机定时B' },
				{ id: 4, value: '关机定时B' },
			],
			timerData1: [
				{ id: 1, value: '开机定时A' },
				{ id: 2, value: '关机定时A' },
				{ id: 3, value: '开机定时B' },
				{ id: 4, value: '关机定时B' },
			],
			timerData2: [
				{ id: 5, value: '开灯定时' },
				{ id: 6, value: '关灯定时' },
			],
			// 其他参数设置数据
			otherParametersData: [
				{id: 1, value: '过压保护'},
				{id: 2, value: '过流保护'},
				{id: 3, value: '过温保护'},
				{id: 4, value: '欠压保护'}
			],
			otherParametersData1: [
				{id: 1, value: '过压保护'},
				{id: 2, value: '过流保护'},
				{id: 3, value: '过温保护'},
				{id: 4, value: '欠压保护'}
			],
			otherParametersData2: [
				{id: 5, value: '欠压保护时间'}
			],
		},
		toast: '您取消了授权,登录失败',
		Toast: {
			complete: '请将信息填写完整',
			pswdSuc: '密码修改成功',
			fillPswd: '请填写密码',
			unKnown: '未知错误，请联系管理员',
			scanFalse: '扫码失败',
			scanFailed: '请确保设备码正确后重新扫码',
			systemErr: '系统异常',
			NotOpen: '暂未开通',
			modifie:'修改失败'
		}
	}