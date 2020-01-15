export default {
	lang: 'en',
	loading: 'loading...',
	title: 'AdverPlayer',
	login: {
		button: 'Scan the code',
		more: 'more'
		
	},
	password: {
		placeholder: 'Enter device password',
		change: 'Change password',
		oldPswd: 'Enter old password',
		newPswd: 'Enter new password',
		submit: 'Submit',
		confirm: 'Confirm',
		cancel: 'Cancel'
	},
	turnPage: {
			
		title: 'Turn Page',
		first: 'Last Page',
		last: 'First Page',
		down: 'Down One',
		up: 'Up One',
		// down: 'Down One',
		// up: 'Up One'
	},
	calibration: {
		title: 'Calibration',
		click: 'Click',
		Inching: 'Inching',
		pres: 'Pres',
		moving: 'Moving'
	},
	other: {
		closing: 'closing',
		sureConnBLE: "Make sure you're connected to bluetooth",
		corretTime: 'Automatic time correction?',
		y: 'Yes',
		n: 'Not',
		login: 'logining',
		AutoCan: 'Auto mode can be entered',
		offlineOrOther: 'Offline Or Other',
		settingFail: 'Fail',
		BLEList: 'Query bluetooth list',
		BLEConn: 'list (tap connect)',
		BLENone: 'None',
		corrected: 'Is connected',
		outLine: 'Out Line',
		setting1: 'setting',
		search: 'In the search',
		checking: 'checking',
		reconnection: 'reconnection',
		fail: 'fail',
		notStorage: 'Not in storage',
		conning: 'wait a moment',
		sucWait: 'Sucess waitting',
		searchNone: 'No device found/in use',
		searchFail: 'Query failed.Make sure bluetooth is enabled/located',
		stopMode: 'Stop Mode',
		back: 'Manu/Auto To ESC',
		save: 'ENTER To Save',
		toMenu: 'Esc To Back',
		move: 'To Move',
		enter: 'ENTER To Save',
		setItems: 'ENTER To Menu',
		sysTitle: 'System Time',
		modeTitle: 'Run Mode',
		host: 'Host',
		single: 'Single',
		test: 'Test',
		client: 'Client',
		delayTitle: 'Sync. Time',
		copyTitle: 'Data Copy',
		copy: 'Copying...',
		setIdTitle: 'Board ID'
	},
	Manu: {
		title: 'Manu Mode',
		title2: 'Auto Mode'
	},
	pageNum: {
		title: 'Page Number',
		set: 'Set  To:',
		change: 'To Change'
	},

	showTime: {
		all: 'All Show Time',
		single: 'One Show Time',
		No: 'NO.',
		set: 'Set To:'
	},
	timer: {
		title1: 'ON Time A',
		title2: 'ON Time B',
		title3: 'OFF Time A',
		title4: 'OFF Time B',
		title5: 'ON Light Time',
		title6: 'OFF Light Time'
		
	},
	speedSet: {
		title: 'Speed',
		set: 'Set To:',
		change: 'To Change'
	},
	stopPic: {
		title: 'Stay Picture'
	},
	parameters: {
		OV: 'OV Parameters',
		OC: 'OC Parameters',
		OT: 'OT Parameters',
		UV: 'UV Parameters',
		UVT: 'UVT Parameters'
	},
	index: {
		GPRS: 'GPRS',
		BLE: 'BLE',
		Speed: 'Speed',
		modelContent: 'Sure back to the scan page?',
		manu: 'Manu',
		client: 'Client',
		ok: 'OK',
		OV: 'OV',
		OC: 'OC',
		OT: 'OT',
		UV: 'UV',
		F: 'FALSE',
		host: 'Host',
		single: 'Single',
		test: 'Test',
		auto: 'Auto',
		homeData: {
			// 当前画面
			nowPic: 1,
			auto: 'Auto',
			// 速度和类型
			speed: 0, // 速度为0-9
			type: 1, // 1GPRS 2BLE
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
			// 第四行
			runStatus: 0, // 运行状态 0自动 7自检 3急停 4或1手动 2 或6 微调  8暂时未用到
			// 主从机模式
			model: 0, //  0-独立 1-主机，2-从机
			/* 主板工作状态 
			0--系统正常  2--过温保护  3--过流保护  4--过压保护  5--欠压保护）   其它：连接失败 */
			workStatus: 0
		},
		// 设置项数据
		setItemData: [
			{ id: 1, value: 'Page Number' },
			{ id: 2, value: 'Show Time' },
			{ id: 3, value: 'Timer' },
			{ id: 4, value: 'Speed' }
		],
		setItemsData1: [
			{ id: 1, value: 'Page Number' },
			{ id: 2, value: 'Show Time' },
			{ id: 3, value: 'Timer' },
			{ id: 4, value: 'Speed' }
		],
		setItemsData2: [
			{ id: 5, value: 'Stop Page' },
			{ id: 6, value: 'System Time' },
			{ id: 7, value: 'Run Mode' },
			{ id: 8, value: 'Sync. Time' }
		],
		setItemsData3: [
			{ id: 9, value: 'Data Copy' },
			{ id: 10, value: 'Board ID' },
			{ id: 11, value: 'Parameter Set' },
			{ id: 12, value: 'BPP Set' }
		],
		showTimeData: [
			{ id: 1, value: 'All Show Time' },
			{ id: 2, value: 'One Show Time' }
		],
		// 定时设置
		timerData: [
			{ id: 1, value: 'ON Time A' },
			{ id: 2, value: 'OFF Time A' },
			{ id: 3, value: 'ON Time B' },
			{ id: 4, value: 'OFF Time B' },
		],
		timerData1: [
			{ id: 1, value: 'ON Time A' },
			{ id: 2, value: 'OFF Time A' },
			{ id: 3, value: 'ON Time B' },
			{ id: 4, value: 'OFF Time B' },
		],
		timerData2: [
			{ id: 5, value: 'ON Light Time' },
			{ id: 6, value: 'OFF Light Time' },
		],
		// 其他参数设置数据
		otherParametersData: [
			{id: 1, value: 'OV Parameter'},
			{id: 2, value: 'OC Parameter'},
			{id: 3, value: 'OT Parameter'},
			{id: 4, value: 'UV Parameter'}
		],
		otherParametersData1: [
			{id: 1, value: 'OV Parameter'},
			{id: 2, value: 'OC Parameter'},
			{id: 3, value: 'OT Parameter'},
			{id: 4, value: 'UV Parameter'}
		],
		otherParametersData2: [
			{id: 5, value: 'UVT Parameter'}
		],
		setBLEData: [
			{ id: 1, value: 'Search BLE list' },
			{ id: 2, value: 'Close the BLE' }
		],
	},
	toast: 'You have cancelled authorization. Login failed',
	Toast: {
		complete: 'Please complete the information',
		pswdSuc: 'Password changed successfully',
		fillPswd: 'Please fill in the password',
		unKnown: 'Unknown error, please contact administrator',
		scanFalse: 'Sweep code failure',
		scanFailed: 'Please make sure the device code is correct and scan the code again',
		systemErr: 'System exceptions.',
		NotOpen: 'Temporary not open',
		modifie:'Modifie fail' 
	}
	
}