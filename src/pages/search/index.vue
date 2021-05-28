<template>
  <view>
		<view class="header">
			"{{ headerTip }}"
		</view>
		<view class="main">
			<view class="title">
				简历搜索
			</view>
			<view class="search">
				<input class="uni-input" focus placeholder="search" v-model="searchData" />
				<button
				 class="search_button"
				 @click="search"
				>search</button>
			</view>
		</view>
		<view class="footer" @click="goBack">
			返回我的简历
		</view>
	</view>
</template>
<script>
import { findByAccount } from '@/api/resume.js'
export default {
	data() {
		return {
			headerTip: '我好像是一个在海边玩耍的孩子，不时为拾到比通常更光滑的石子或更美丽的贝壳而欢欣鼓舞，而展现在我面前的是完全未探明的真理之海',
			searchData: undefined,
			searchLoading: false,
			loginLoadig: false
		}
	},
	mounted() {
		const userInfo = JSON.parse(uni.getStorageSync('RESUMEINFO'))
		this.headerTip = userInfo.sign_three
	},
	methods: {
		async search() {
			if(!this.searchData) {
				uni.showToast({
					title: '请输入用户名',
					icon:"none"
				})
				return
			}
			const { data: resumeInfo } = await findByAccount({ account: this.searchData })
			uni.setStorageSync('RESUMEINFO', JSON.stringify(resumeInfo[0]))
			console.log(resumeInfo)
			uni.switchTab({
			  url: '/pages/home/index'
			})
		},
		async goBack() {
			const account = uni.getStorageSync('ACCOUNT')
			if(!account) {
				uni.showToast({
					title: '请先登录账号',
					icon:"none"
				})
				return
			}
			const { data: resumeInfo } = await findByAccount({ account })
			uni.setStorageSync('RESUMEINFO', JSON.stringify(resumeInfo[0]))
			console.log(resumeInfo)
			uni.switchTab({
			  url: '/pages/home/index'
			})
		}
	}
}
</script>
<style lang="scss" scoped>
	.header {
		width: 100%;
		background-color: #F0F0F0;
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 50rpx;
		text-indent: 2em;
		line-height: 50rpx;
	}
	.main {
		padding: 100rpx 30rpx;
		.title {
			padding: 10rpx 0 50rpx;
			text-align: center;
			font-size: 36rpx;
		}
		.search {
			.uni-input {
				width: 100%;
				height: 80rpx;
				background-color: #F0F0F0;
			}
			.search_button{
				width: 260rpx;
				margin: 60rpx auto;
			}
		}
	}
	.footer {
		margin-top: 150rpx;
		text-align: center;
		color: #909399;
		text-decoration:underline
	}
</style>