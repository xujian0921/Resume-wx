<template>
  <view>
		<view class="header">
			<view class="avatar">
				<image src="@/static/avatar.jpg"></image>
			</view>
			<view class="slogan">
				"<text>{{ userInfo.sign_one }} </text>"
			</view>
		</view>
		<view class="job">
			求职意向:{{ userInfo.job_intention }}
		</view>
		<view class="info">
			<view class="title">
				<text class="title_name">基本资料</text>
				<text class="title_line"></text>
			</view>
			<view class="info_content">
				<view class="info_item">
					姓名：{{ userInfo.name }}
				</view>
				<view class="info_item">
					出生年月：{{ userInfo.born }}
				</view>
				<view class="info_item">
					性别：{{ userInfo.gender | gender_filters }}
				</view>
				<view class="info_item">
					籍贯：{{ userInfo.native_place }}
				</view>
				<view class="info_item">
					学历：{{ userInfo.education | education_filters}}
				</view>
				<view class="info_item">
					专业：{{ userInfo.major }}
				</view>
				<view class="info_item">
					tel：{{ userInfo.phone }}
				</view>
				<view class="info_item">
					工作年限：5
				</view>
				<view class="info_item1">
					邮箱：{{ userInfo.email }}
				</view>
			</view>
		</view>
		<view class="list">
			<view class="title">
				<text class="title_name">skill</text>
				<text class="title_line"></text>
			</view>
			<view class="list_content">
				<view v-for="(item,index) in userInfo.skill_array" :key="index" class="list_item">
					- {{ item }}
				</view>
			</view>
		</view>
		<view class="list">
			<view class="title">
				<text class="title_name">summary</text>
				<text class="title_line"></text>
			</view>
			<view class="list_content">
				<view v-for="(ite,idx) in userInfo.summary_array" :key="idx" class="list_item">
					- {{ ite }}
				</view>
			</view>
		</view>
	</view>
</template>
<script>
export default {
	data() {
		return {
			userInfo: {
				sign_one: '没有自律和自觉，就没有真正的自由和自在。 ',
				job_intention: 'web工程师',
				name: '许健',
				born: '1996-9',
				gender: 1,
				native_place: '安徽',
				education: 2,
				major: '计算机科学与技术',
				phone: '188****1546',
				email: 'xujian0921@qq.com',
				skill_array: ['vue','javascript'],
				summary_array: ['basketball', 'football']
			}
		}
	},
	mounted() {
		// this.userInfo = JSON.parse(uni.getStorageSync('RESUMEINFO'))
		// console.log(this.userInfo,'this.userInfo ')
		// let skill_array = this.userInfo.skill.split('-')
		// skill_array.shift()
		// this.userInfo.skill_array = skill_array
		// let summary_array = this.userInfo.summary.split('-')
		// summary_array.shift()
		// this.userInfo.summary_array = summary_array
	}
}
</script>


<style lang="scss" scoped>
	.header {
		width: 100%;
		height: 280rpx;
		background-color: #F0F0F0;
		display: flex;
		align-items: center;
		.avatar{
			padding: 0 30rpx;
			width: 260rpx;
			image {
				width: 200rpx;
				height: 200rpx;
				border-radius: 50%;
			}
		}
		.slogan {
			padding: 0 40rpx 0 20rpx;
			text-indent: 2em;
		}
	}
	.job {
		width: 100%;
		height: 100rpx;
		padding: 20rpx 10rpx;
		line-height: 100rpx;
		text-align: center;
		font-size: 30rpx;
	}
	.title {
		display: flex;
		align-items: center;
		.title_name {
			padding: 10rpx 30rpx;
			background-color: #F0F0F0;
		}
		.title_line {
			padding: 0 20rpx;
			flex: 1;
			height: 1rpx;
			border: 1rpx solid #F0F0F0;
		}
	}
	.info {
		width: 100%;
		padding: 20rpx 20rpx 10rpx;
		margin-top: 10rpx;
		.info_content {
			width: 100%;
			padding: 15rpx 10rpx;
			display: flex;
			flex-direction: row;
			flex-wrap: wrap;
			.info_item {
				width: 50%;
				padding: 10rpx 0;
			}
			.info_item1 {
				width: 100%;
				padding: 10rpx 0;
			}
		}
	}
	.list {
		padding: 20rpx 20rpx 10rpx;
		.list_content{
			margin: 20rpx;
			.list_item {
				margin: 15rpx 0;
			}
		}
	}
</style>