<template>
  <view class="app_container">
		<view class="header">
			<image src="@/static/avatar.jpg"></image>
		</view>
		<view v-if="isLogin" class="user">
			<view class="account">
				用户名: {{ userInfo.account }}
			</view>
			<button
			 class="button"
			 @click="outlogin"
			>退出登录</button>
		</view>
		<view v-else class="login">
			<view class="login_info">
				<view class="login_text">
					账号密码登录
				</view>
				<input
				 class="uni-input" 
				 focus placeholder="请输入用户名"
				 v-model="loginInfo.account"
				/>
				<input
				 class="uni-input" 
				 password="true"
				 placeholder="请输入密码"
				 v-model="loginInfo.password"
				/>
			</view>
			<button
			 class="button"
			 @click="login"
			>登录</button>
		</view>
	</view>
</template>
<script>
import { login, getPersonUser } from '@/api/user.js'
import { findByAccount } from '@/api/resume.js'
export default {
	data(){
		return {
			isLogin: false,
			userInfo: {
				account: '机智的小恐龙'
			},
			loginInfo: {
				account: undefined,
				password: undefined
			}
		}
	},
	mounted() {
		if(uni.getStorageSync('TOKEN')) {
			this.isLogin = true
		}
	},
	methods: {
		outlogin() {
			this.isLogin = false
			uni.removeStorageSync('TOKEN')
			uni.removeStorageSync('ACCOUNT')
		},
		async login() {
			if(!this.loginInfo.account || !this.loginInfo.password) {
				uni.showToast({
					title: '请输入账号和密码',
					icon:"none"
				})
				return
			}
			const { data } = await login(this.loginInfo)
			uni.setStorageSync('TOKEN', data.token)
			const { data: userInfo } = await getPersonUser()
			this.userInfo = userInfo
			uni.setStorageSync('ACCOUNT', userInfo.account)
			const { data: resumeInfo } = await findByAccount({ account: userInfo.account })
			uni.setStorageSync('RESUMEINFO', JSON.stringify(resumeInfo[0]))
			this.isLogin = true
			uni.showToast({
				title: '登录成功',
				icon:"none"
			})
		}
	}
}
</script>
<style lang="scss" scoped>
	.app_container {
		display: flex;
		flex-direction: column;
		height: 100vh;
		.header {
			width: 100%;
			background-color: #F0F0F0;
			display: flex;
			align-items: center;
			justify-content: center;
			padding: 50rpx;
			image {
				width: 200rpx;
				height: 200rpx;
				border-radius: 50%;
			}
		}
		.user{
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			align-items: center;
			padding: 50rpx;
			flex: 1;
		}
		.login {
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			align-items: center;
			padding: 60rpx;
			flex: 1;
			.login_text {
				text-align: center;
				margin: 50rpx 0 80rpx;
				font-size: 36rpx;
			}
			.login_info {
				width: 100%;
				.uni-input {
					width: 100%;
					height: 80rpx;
					background-color: #F0F0F0;
					margin-bottom: 50rpx;
				}
			}
		}
	}
</style>