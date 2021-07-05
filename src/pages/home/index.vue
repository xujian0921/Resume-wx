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
					工作年限：3
				</view>
				<view class="info_item1">
					邮箱：{{ userInfo.email }}
				</view>
				<view class="info_item1">
					Github：{{ userInfo.github }}
				</view>
			</view>
		</view>
		<view class="list">
			<view class="title">
				<text class="title_name">求职技能</text>
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
				<text class="title_name">自我评价</text>
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
				github: 'https://github.com/xujian0921',
				skill_array: [
					'3年前端开发经验，深入理解Web前端开发技术；熟练掌握Vue框架，熟悉React框架；',
					'熟悉交互设计理论，能够将优秀的需求设计计划落地到项目中；',
					'熟悉项目打包部署上线，网站性能优化，了解浏览器实现原理；',
					'熟练运用vue + vuex+ vue-router+ axios + ui库开发项目；',
					'熟练运用typeScript开发项目；',
					'熟练运用 electron + vue  开发桌面端项目；',
					'熟练使用rem,flex及百分比来进行移动端页面布局；',
					'熟练的使用scss预处理器进行css样式的编写；',
					'熟悉webpack前端构建方案；',
					'熟悉使用小程序开发工具开发小程序；',
					'熟悉react 、ant design pro v4 （UmiJS + Dva + Ant ）开发react项目 ',
					'熟悉node.js ,使用koa2 + Mongodb 开发RESTful 风格 API  ',
					'能够独立完成一个复杂模块或项目的研发工作；'
				],
				summary_array: [
					'具备规范的代码编写风格，高效的工作习惯；',
					'有较强的沟通能力和团队合作精神；',
					'喜欢逛论坛和大家一起交流并了解一些前沿技术；',
					'热爱互联网开发，喜欢编程，致力于长期稳定在互联网行业发展；',
					'个人博客： https://www.yuque.com/xujian-iqkyx'
				]
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
				margin: 30rpx 0;
				line-height: 50rpx;
			}
		}
	}
</style>