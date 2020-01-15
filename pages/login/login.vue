
<template>
	<view class="page-content" >
		
		
		<button class="login-but am-clear-native-style" @tap="getList" hover-class="btn_hover">
			{{ other.BLEList }}
		</button>
		
		<!-- 弹框 -->
		<uni-popup ref="popup" type="bottom" style="touch-action: none">
			<view style="text-align: center;border-bottom: 2rpx solid #ccc;">
				<view style="margin: 20upx 0;">{{ other.BLEConn }}</view>
			</view>
			<view class="pop" v-if="list.length != 0">
				<view class="type1" :class="{'add':index==num}" v-for="(item,index) in list" @tap="conn(item)" :key="index" hover-class="btn_hover"> {{item.name}}</view>
			</view>
			<view v-else class="popNone" style="text-align: center;">
				{{ other.BLENone }}
			</view>
		</uni-popup>
		
	</view>
</template>

<script>
	var connBLESuc = 0
	var times = 0
	import uniPopup from "@/components/uni-popup/uni-popup.vue"
	import { getBlooth, createBLE, DeviceFound } from '@/utils/socket/BLEConn.js';
export default {
	data() {
		return {
			list:[], // 蓝牙列表
			scanBLE: false,
		};
	},
	components: {uniPopup},
	computed: {  
		i18n () {  
			return this.$t('login')
		},
		title() {
			return this.$t('title')
		},
		other() {
			return this.$t('other')
		},
		toast() {
			return this.$t('Toast')
		}
	},
	methods: {
		// 搜索蓝牙列表
		async	getList() {
			uni.showLoading({
				title: '搜索中...',
				icon: 'none'
			})
			var flag = false // 标记是否进入了getBLooth
			await	getBlooth().then(res => {
				console.log(res)
				flag = true
				console.log('第' + times + '次')
				if (res.devices.length == 0 && times <= 3) {
					times++
					this.getList()
				} else {
					this.list = res.devices
					console.log(this.list)
					uni.hideLoading()
					times = 1
					// 打开弹框
					this.$refs.popup.open()
					this.scanBLE = true
				}
			}).catch(err => {
				flag = true
				times = 1
			})
			console.log(flag)
			if (!flag) {
				uni.hideLoading()
				uni.showToast({
					title: '没有进入',
					icon: 'none',
					mask: true
				})
				console.log('没有进入getBlooth')
			}
		},

		// 2. 选中蓝牙并连接
		async conn(item) {
			console.log(item)
			uni.showLoading({
				title: this.other.checking,
				// title: "检测中...",
				icon: "loading",
				mask: true
			})
			connBLESuc++
			let create = true // 判断有没有进入createBLE
			
			await	createBLE(item, '0000FFE0-0000-1000-8000-00805F9B34FB').then(res => {
				console.log(res)
				create = false
				connBLESuc = 0
				
				uni.showLoading({
					title: this.other.sucWait,
					// title: "连接成功,请稍等",
					icon: "loading",
					mask: true
				})
				uni.hideLoading()
				setTimeout(() => {
					uni.showToast({
						title: '连接成功'
					})
				}, 500)
			}).catch(err => {
				create = false
				console.log('失败', connBLESuc)
				if (connBLESuc <= 3) {
					this.conn(item)
					uni.showLoading({
						title: this.other.reconnection,
						// title: "重连中...",
						icon: "loading",
						mask: true
					})
				} else {
					uni.hideLoading()
					connBLESuc = 0
					setTimeout(() => {
						uni.showToast({
							title: this.other.fail,
							// title: "连接失败",
							icon:"none"
						})
					},500)
				}
			})
			setTimeout(() => {
				if (create) {
					console.log('没有进入回调')
					uni.hideLoading()
					setTimeout(() => {
						uni.showToast({
							title: this.other.fail,
							// title: "连接失败",
							icon:"none"
						})
					},500)
				}
				
			}, 3000)
		}
	}
}
</script>

<style lang="scss">
@import '@/common/login.scss';
.pop {
	max-height: 800rpx;
	min-height: 800rpx;
	.type1 {
		width: 100%;
		line-height: 90rpx;
		height: 90rpx;
		padding-left: 20rpx;
		border-bottom: 1rpx solid #eee;
	}
}
.popNone {
	min-height: 300rpx;
	line-height: 300rpx;
}
.btn_hover {
	background: rgba($color: #999, $alpha: .5);
}
</style>
