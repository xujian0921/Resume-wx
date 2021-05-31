<template>
  <view class="app_container">
		<view class="header">
			<image src="@/static/avatar.jpg"></image>
		</view>
		<view class="user">
			<view class="account">
				用户名: {{ userInfo.account }}
			</view>
			<view class="wechat">
				<image class="wechat_img" src="@/static/wechat.jpg"></image>
				<view>扫一扫上面的二维码图案，加我微信</view>
			</view>
		</view>
	</view>
</template>
<script>
export default {
	data(){
		return {
			userInfo: {
				account: '机智的小恐龙'
			}
		}
	},
	mounted() {
	},
	methods: {
	
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
			// justify-content: space-between;
			align-items: center;
			padding: 50rpx;
			flex: 1;
			.wechat {
				width: 100%;
				display: flex;
				flex-direction: column;
				align-items: center;
				.wechat_img {
					width: 535rpx;
					height: 570rpx;
				}
			}
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