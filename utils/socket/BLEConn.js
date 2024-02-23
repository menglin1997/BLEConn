let BLEList = []
// 蓝牙模块
// 注意: 小程序端不支持蓝牙4.0以下的版本
// 1. 初始化(搜索蓝牙列表)
function inArray(arr, key, val) {
	for (let i = 0; i < arr.length; i++) {
		if (arr[i][key] === val) {
			return i
		}
	}
	return -1
}
export function getBlooth() {
	BLEList = []
	return new Promise((resolve, reject) => {
		uni.openBluetoothAdapter({
		  success(res) {
		    searchBlooth().then(res => {
					console.log(res, 'searchBlooth')
					uni.onBluetoothDeviceFound(function (devices) {
					  console.log(devices, '搜索到蓝牙设备')
						// let result = BLEList.find(devices.devices[0])
						// console.log(result, 'res')
						console.log(devices.devices[0])
						let idx = inArray(BLEList, 'deviceId', devices.devices[0].deviceId)
						console.log(idx, 'idx')
						if (idx == '-1') {
							if (devices.devices[0].localName && (!(devices.devices[0].name) || devices.devices[0].name == '未知设备')) {
								devices.devices[0].name = devices.devices[0].localName
								BLEList.push(devices.devices[0])
							} else if (devices.devices[0].name && devices.devices[0].name != '未知设备') {
								BLEList.push(devices.devices[0])
							}
						}
						
						// BLEList.push(devices.devices[0])
						// 5秒后停止搜索
					})
					setTimeout(() => {
						DeviceFound().then(res => {
							console.log(res, 'DeviceFound')
							console.log(BLEList, 'BLEList')
							resolve(res)
						}).catch(err => {
							console.log(err, 'searchBlooth1')
							reject(err)
						})
					}, 5000)
				}).catch(err => {
					console.log(err, 'DeviceFound1')
					reject(err)
				})
		  },
			fail(err) {
				console.log(err, 'err')
				reject(err)
			}
		})
	})
}
// 2. 检查手机蓝牙开启状态
function searchBlooth() {
	return new Promise((resolve, reject) => {
		uni.startBluetoothDevicesDiscovery({
		  success(res) {
		    console.log(res, 'startBluetoothDevicesDiscovery')
				// DeviceFound()
				resolve(res)
		  },
			fail(err) {
				reject(err)
			}
		})
	})
}

// 3. 搜索蓝牙列表
export function DeviceFound() {
	
	// uni.onBluetoothDeviceFound(function (devices) {
	//   console.log(devices, '搜索到蓝牙设备')
	// 	// 5秒后停止搜索
	// })
	// setTimeout(() => {
		stopBlueth()
		
		// 搜索到的设备列表
		return new Promise((resolve, reject) => {
			uni.getBluetoothDevices({
			  success(res) {
					console.log(res, '蓝牙列表')
					console.log(BLEList, 'BLEListBLEList')
					resolve({
						devices: BLEList
					})
			  },
				fail(err) {
					console.log(err, '错误的')
					
					reject(err)
				}
			})
		})
		
	// }, 5000);
	
	
	
}
// 4.停止搜索蓝牙
function stopBlueth() {
	uni.stopBluetoothDevicesDiscovery({
	  success(res) {
	    console.log(res, '蓝牙停止')
	  }
	})
}

// 5. 断开蓝牙连接
export function closeBle() {
	let deviceId = uni.getStorageSync('BLECONNID')
	// console.log(deviceId, 'closeBle')
	if (deviceId) {
		uni.closeBLEConnection({
		  deviceId: deviceId,
		  success(res) {
		    // console.log(res)
				// 记得打开
				uni.removeStorageSync('RESCODE')
		  },
			fail: (err) => {
				// console.log(err)
			}
		})
		// 断开蓝牙模块
		uni.closeBluetoothAdapter({
		  success(res) {
		    console.log(res)
		  }
		})
	}
}
// 6.连接蓝牙(连接之前应该把之前连接的蓝牙设备断开)
/* 
 item,要连接的蓝牙
	uuid
 */
export function createBLE(item, uuid) {
	// 连接之前应该把之前连接的蓝牙设备断开
	// closeBle()
	return new Promise((resolve, reject) => {
		uni.createBLEConnection({
		  // 这里的 deviceId 需要已经通过 createBLEConnection 与对应设备建立链接
		  deviceId: item.deviceId,
		  success(res) {
				console.log(res)
				// 监听蓝牙连接
				watchBle(item.name).then(res => {
					console.log(res)
					getAllService(item.deviceId, uuid).then(res => {
						console.log(res)
						getCharacteristics(item.deviceId, res.uuid).then(res => {
							console.log(res)
							resolve(res)
						}).catch(err => {
							reject(err)
						})
					}).catch(err => {
						reject(err)
					})
				}).catch(err => {
					reject(err)
				})
		  },
			fail(err) {
				reject(err)
			}
		})
	})
	
}
// 7.监听蓝牙连接
function watchBle(name) {
	return new Promise((resolve, reject) => {
		uni.onBLEConnectionStateChange(res => {
			// console.log(res, '监听蓝牙连接')
		  // 该方法回调中可以用于处理连接意外断开等异常情况
		  // console.log(`device ${res.deviceId} state has changed, connected: ${res.connected}`)
			if (res.deviceId && res.connected) {
				// 连接成功将本次连接的设备deviceId和name保存本地
				uni.setStorageSync('BLECONNID', res.deviceId)
				uni.setStorageSync('deviceName', name)
				// 获取所有服务
				setTimeout(() => {
					resolve(res)
				}, 500);
			} else {
				// uni.showToast({
				// 	title: res.name + '断开',
				// 	icon: "none"
				// })
				reject(res)
			}
		})
	})
	
}
// 8.获取所有服务
function getAllService(deviceId, uuid) {
	return new Promise((resolve, reject) => {
		uni.getBLEDeviceServices({
		  // 这里的 deviceId 需要已经通过 createBLEConnection 与对应设备建立链接
		  deviceId,
		  success: (res) => {
				console.log(res, 'res')
				res.services.forEach((item,index) => {
					// console.log(item, 'deviceid')
					// 这里的uuid'0000FFE0-0000-1000-8000-00805F9B34FB'
					if (item.isPrimary && item.uuid === uuid) {
						uni.setStorageSync("deviceId", deviceId)
						uni.setStorageSync("serviceId", item.uuid)
						resolve(item)
					} else if (index == (res.services).length) {
						console.log(index, item, 'getBLEDeviceServices')
						reject(res)
					} else {
						console.log(index, item, 'getBLEDeviceServices')
						reject(res)
					}
				})
				
				// getCharacteristics(deviceId, res.services[0].uuid)
		  },
			fail: (err) => {
				// console.log(err)
				reject(err)
			}
		})
	})
	
}
// 9. 获取某个服务的特征值
function getCharacteristics(deviceId, serviceId) {
	return new Promise((resolve, reject) => {
		uni.getBLEDeviceCharacteristics({
		  // 这里的 deviceId 需要已经通过 createBLEConnection 与对应设备建立链接
		  deviceId,
		  // 这里的 serviceId 需要在 getBLEDeviceServices 接口中获取
		  serviceId,
		  success(res) {
				// console.log(res, 'getCharacteristics')
		    // console.log('device getBLEDeviceCharacteristics:', res.characteristics)
				uni.showLoading({
					title: "检测中...",
					icon: "loading",
					mask: true
				})
				res.characteristics.forEach((item, index) => {
					if (item.properties.notify) {
						// 启用 notify 功能(成功 监听 失败 进行读取操作)
						uni.setStorageSync("characteristicId", item.uuid)
						// console.log(1)
						setTimeout(function() {
							uni.hideLoading()
						}, 500);
						// console.log(deviceId, serviceId, item.uuid, 'res.deviceId, res.serviceId, item.uuid')
						notify(deviceId, serviceId, item.uuid).then(res => {
							// console.log(res, 'notify')
							resolve(res)
						})
						// watchNotify()
						
					}  else if (index == (res.characteristics).length - 1 && !item.properties.write) {
						// console.log(index, item, 'fsakdfjslfj')
						setTimeout(function() {
							uni.hideLoading()
							uni.showToast({
								title: "该设备不支持读和写",
								icon: "none"
							})
						}, 500);
						reject(res)
					}
				})
			},
			fail(err) {
				reject(err)
			}
		})
	})
	
}
// 10. 启用 notify 功能
export function notify(deviceId, serviceId, characteristicId) {
	return new Promise((resolve, reject) => {
		uni.notifyBLECharacteristicValueChange({
			state: true, // 启用 notify 功能
			// 这里的 deviceId 需要已经通过 createBLEConnection 与对应设备建立链接
			deviceId,
			// 这里的 serviceId 需要在 getBLEDeviceServices 接口中获取
			serviceId,
			// 这里的 characteristicId 需要在 getBLEDeviceCharacteristics 接口中获取
			characteristicId,
			success(res) {
				// console.log('notifyBLECharacteristicValueChange success', res.errMsg)
				resolve(res)
			},
			fail(err) {
				// console.log(err, 'notifuerr')
				// readBLE(deviceId, serviceId, characteristicId)
				reject(err)
			}
		})
	})
	
}
/**
 * 字符串转换为数组,个数为n,s为字符串
 
	*/
function strToArr(s, g) {
  // var s = "051102003"
  var re = new RegExp(".{" + g +"}","g")
  var a = []
	var n
  while ((n=re.exec(s)) != null){
      a[a.length] = n[0]
  }
  return a
}

// 11 监听notify功能
var packData = '' // 分包操作
var first = '' // 开始部分
var center = '' // 中间拼接部分
var last = '' // 结尾部分
var len = 0 // 包的长度
// var flag = true // flag判断是否进行了分包操作 如果分包需要清空开始部分 中间部分 结尾部分
export function	watchNotify() {
	// ArrayBuffer转16进度字符串示例
	function ab2hex(buffer) {
		const hexArr = Array.prototype.map.call(
			new Uint8Array(buffer),
			function (bit) {
				return ('00' + bit.toString(16)).slice(-2)
			}
		)
		return hexArr.join('')
	}
	
	return new Promise((resolve, reject) => { 
		uni.onBLECharacteristicValueChange(function (res) {
			console.log(res)
			// 监听帧头帧尾
			var resCode1 = ab2hex(res.value)
			var resCode = resCode1.toUpperCase() // 收到蓝牙返回的命令（16进制）
			console.log(resCode, '收到的')
			/**
			 * 
			 * 以下是我项目中的分包接收操作（可注释）
			 * 
			 */
		
			// 1. 如果开头结尾和帧头帧尾一致并且长度一致就保留(说明长度完整)
			if (resCode.substring(resCode.length - 2, resCode.length) == 'FE' && resCode.substring(0, 2) == '05') {
				let lenTo10 = parseInt(resCode.substring(2,resCode.length - 2).length)/2
				// 1.1找出内容16进制
				let lengthTo16 = lenTo10.toString(16) + ''
				// 2.1 对16进制进行大小写转换并且补零操作
				lengthTo16 = lengthTo16.length == 1 ? '0' +  lengthTo16.toUpperCase() : lengthTo16.toUpperCase()
				let length1 = resCode.substring(2,4)
				console.log(lengthTo16, length1)
				if (lengthTo16 == length1) {
					 if (resCode.substring(8,12) == 'F020') {
					 	uni.setStorageSync('RESCODE', resCode)
					 	console.log(resCode, 'F020')
					 } else {
					 	uni.setStorageSync('RESPARAMS', resCode)
					 }
				}
				
			} else if (resCode.substring(resCode.length - 2, resCode.length) != 'FE' && resCode.substring(0, 2) == '05') { 
				// 2. 如果帧头对 帧尾不对 则为前边部分
				first = resCode
				
				console.log(first, '这个是开头部分first')
			} else if (resCode.substring(resCode.length - 2, resCode.length) != 'FE' && resCode.substring(0, 2) != '05') { 
				// 3. 如果帧头不对 帧尾不对 则为中间部分
				center = center + resCode
				console.log(center, '中间部分center')
			} else if (resCode.substring(resCode.length - 2, resCode.length) == 'FE' && resCode.substring(0, 2) != '05') {
				// 4. 如果帧头不对 帧尾对 则为最后一部分
				last = resCode
				console.log(last, '最后一部分last')
				
				// 得到实际内容
				
				var content = first + center + last
				console.log(content, '实际的内容')
				// 4.1找出内容16进制
				var resLen = (content.length - 4) / 2 // 减去4是剪掉帧头和帧尾,除以2是为了得到字节
				console.log(resLen, '实际的长度10进制')
				var lenTo16 = resLen.toString(16) + ''
				// 4.2 对16进制进行大小写转换并且补零操作
				lenTo16 = lenTo16.length == 1 ? '0' +  lenTo16.toUpperCase() : lenTo16.toUpperCase()
				console.log(lenTo16, 'lenTo16')
				// 得到包的长度
				len = content.substring(2,4)
				console.log(len, 'len')
				// 判断是否得到长度和实际长度相等
				if (lenTo16 == len) {
					if (content.substring(8,12) == 'F020') {
						uni.setStorageSync('RESCODE', content)
						console.log(content, 'F020')
					} else {
						uni.setStorageSync('RESPARAMS', content)
						console.log(content, '!F020')
					}
				} else {
					// 如果不相等, 找一下字符串中间有没有FE  然后再进行长度 帧头帧尾判断
				
					// 1.截取帧尾的FE 求出帧尾之前是否有FE
					let substrFE = content.substring(0, content.length - 2)
					console.log(substrFE, 'substrFE')
					// 2.判断是否还有FE
					// 2.1 转换为两个字符一起的数组
					let hasFEArr = strToArr(substrFE, 2)
					 // 2.2 找出是否有FE 并确定位置
					let hasFE = hasFEArr.indexOf('FE')

					console.log(hasFEArr, 'hasFEArr')
					console.log(hasFE, 'hasFE')
					// 如果有FE,截取到FE之处 判断帧头帧尾长度
					if (hasFE != -1) {
						// 将最后的数据保存到这个数组里面
						let lastConArr = []
						// 得到05-FE的内容
						hasFEArr.forEach((item, index) => {
							if (index <= hasFE) {
								lastConArr.push(item)
							}
						})
						console.log(lastConArr, 'lastConArr')
						// 判断是否是05开头FE结尾
						console.log(lastConArr[lastConArr.length - 1], 'lastConArr[lastConArr.length - 1]')
						console.log(lastConArr[0], 'lastConArr[0]')
						if (lastConArr[0] == '05' && lastConArr[lastConArr.length - 1] == 'FE') {
							// 判断得到的长度与实际长度
							let getLen = lastConArr[1]
							console.log(getLen, 'getLen')
							// 实际长度 并且转换为十六进制字符串
							let resLen = (lastConArr.length - 2).toString(16) + ''
							console.log(resLen, 'resLen1')
							// 实际长度补零操作
							resLen = resLen.length == 1 ? '0' + resLen : resLen,
							console.log(resLen, 'resLen2')
							// 判断得到的长度与实际长度相等之后才是实际的结果
							if (getLen == resLen.toUpperCase()) {
								// 数组转换为字符串
								let lastStr = lastConArr.join('')
								console.log(lastStr, 'lastStr')
								if (lastStr.substring(8,12) == 'F020') {
									uni.setStorageSync('RESCODE', lastStr)
									console.log(lastStr, 'F020')
								} else {
									uni.setStorageSync('RESPARAMS', lastStr)
									console.log('!f')
								}
							}
						}
					}
				}
				// 清空内容和收到的数据
				first = '' // 开始部分
				center = '' // 中间拼接部分
				last = '' // 结尾部分
				len = 0 // 包的长度
				
			}
		})
	})
	
}

// 12.读取功能
export function readBLE(deviceId, serviceId, characteristicId) {
	uni.readBLECharacteristicValue({
		// 这里的 deviceId 需要已经通过 createBLEConnection 与对应设备建立链接
		deviceId,
		// 这里的 serviceId 需要在 getBLEDeviceServices 接口中获取
		serviceId,
		// 这里的 characteristicId 需要在 getBLEDeviceCharacteristics 接口中获取
		characteristicId,
		success(res) {
			// console.log('readBLECharacteristicValue:', res.errCode)
		},
		fail(err) {
			// console.log('readBLEerr:', err)
		}
	})
}

/**
 * s为要转换的字符串
 * n为转换为几个一起的数
 *'0102031A1B'类型转换为['0x11','0x02']   (n传2)
 */
function strToArr1(s, n) {
	    // var s = "051102003"
	    // console.log(s)
	    var re = new RegExp(".{" + n + "}", "g")
	    var a = []
	    var n
	    while ((n = re.exec(s)) != null) {
	        a[a.length] = '0x' + n[0]
	    }
	    return a
	}
	
// 14.写入功能.
/**
 * 
 * @param {*} e 
 * 需要发送给蓝牙的数据格式：['0x11','0x02']
 * 
 * strToArr1函数可将十六进制转换为数组'0102031A1B'类型转换为['0x11','0x02']
 * 
 */
export function writeBLE(e) {
	var deviceId = uni.getStorageSync("deviceId")
	var serviceId = uni.getStorageSync("serviceId")
	var characteristicId = uni.getStorageSync("characteristicId")
	console.log(deviceId,serviceId, characteristicId)
	// 向蓝牙设备发送一个0x00的16进制数据
	return new Promise((resolve, reject) => {
		// 分包发送
		for (var i = 0;i < e.length; i += 20) {
			var endLength = 0
			if (i + 20 < e.length) {
				var senddata = e
				let buffer = new ArrayBuffer(20)
				let dataView = new DataView(buffer)
				for (var j = i; j < i + 20; j++) { 
					dataView.setUint8(j - i, senddata[j])
				}
				uni.writeBLECharacteristicValue({
					// 这里的 deviceId 需要在 getBluetoothDevices 或 onBluetoothDeviceFound 接口中获取
					deviceId: deviceId,
					// 这里的 serviceId 需要在 getBLEDeviceServices 接口中获取
					serviceId: serviceId,
					// 这里的 characteristicId 需要在 getBLEDeviceCharacteristics 接口中获取
					characteristicId: characteristicId,
					// 这里的value是ArrayBuffer类型
					value: dataView.buffer,
					success(res) {
						resolve(res)
					},
					fail(err) {
						reject(err)
					}
				})
				// 等待
				sleep(0.02)
			} else {
				var senddata = e
				if (20 < e.length) {
					endLength = senddata.length - i
				} else{
					endLength = senddata.length
				}
				
				let buffer = new ArrayBuffer(endLength)
				let dataViewLast = new DataView(buffer)
				for (var k = i; k < senddata.length; k++) {
					dataViewLast.setUint8(k-i, senddata[k])
				}
				console.log('最后一包或第一数据:' + dataViewLast.buffer)
				uni.writeBLECharacteristicValue({
					// 这里的 deviceId 需要在 getBluetoothDevices 或 onBluetoothDeviceFound 接口中获取
					deviceId: deviceId,
					// 这里的 serviceId 需要在 getBLEDeviceServices 接口中获取
					serviceId: serviceId,
					// 这里的 characteristicId 需要在 getBLEDeviceCharacteristics 接口中获取
					characteristicId: characteristicId,
					// 这里的value是ArrayBuffer类型
					value: dataViewLast.buffer,
					success(res) {
						resolve(res)
					},
					fail(err) {
						reject(err)
					}
				})
				sleep(0.02)
			}
		}
	})
}
function sleep(delay) {
	var start = (new Date()).getTime();
	while ((new Date()).getTime() - start < delay) {
		continue;
	}
}

// 其他转换方法
//16进制字符串转 ArrayBuffer
const hexToArrayBuffer = (hex) => {
return new Uint8Array(
	hex.match(/[\da-f]{2}/gi).map((byte) => {
	return parseInt(byte, 16)
	})
).buffer
}
  
//ArrayBuffer类型数据转为16进制字符串
const bufToHex = (buffer) => {
return Array.prototype.map.call(new Uint8Array(buffer), (x) => ('00' + x.toString(16)).slice(-2)).join('')
}



