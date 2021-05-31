<template>
  <view class="experience">
		<view class="header">
			"{{ userInfo.sign_two }}"
		</view>
		<view class="main">
			<view v-for="(item,index) in userInfo.experience" :key="index" class="content">
				<view class="company">
					<view class="company_text">
						{{ item.company }}
					</view>
					<view class="company_time">{{ item.time }}</view>
				</view>
				<view v-for="(ite, idx) in item.project" :key="idx" class="project">
					<view class="project_name">
						项目{{idx + 1}}:
						{{ ite.project_name }}
					</view>
					<view class="project_background">
						<view class="title">
							项目背景
						</view>
						<view class="background_content">
							{{ ite.project_background }}
						</view>
					</view>
					<view class="project_analysis">
						<view class="title">
						 需求分析
						</view>
						<view class="analysis_content">
							{{ ite.project_analysis }}
						</view>
					</view>
					<view class="project_content">
						<view class="title">
							需求实现
						</view>
						<view>
							{{ ite.project_complete }}
						</view>
					</view>
					<view class="project_summary">
						<view class="title">
						 项目总结
						</view>
						<view class="summary_content">
							{{ ite.project_summary }}
						</view>
						<view class="summary_img">
							<swiper
							 autoplay
							 indicator-dots
							 circular>
								<swiper-item
								 v-for="(itz, idz) in ite.project_img.split(',')"
								 :key="idz"
								 @click="clickImg(ite.projectImg, idz)"
								 >
									<image :src="itz"></image>
								</swiper-item>
							</swiper>
						</view>
					</view>
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
				sign_two: '我好像是一个在海边玩耍的孩子，不时为拾到比通常更光滑的石子或更美丽的贝壳而欢欣鼓舞，而展现在我面前的是完全未探明的真理之海',
				experience: [{
					company: '1',
					time: '2021-5',
					project: [{
						project_name: '1',
						project_background: '2',
						project_analysis: '3',
						project_complete: '4',
						project_summary:'5',
						project_img: '2,6'
					}]
				}]
			}
		}
	},
	mounted() {
		// this.userInfo = JSON.parse(uni.getStorageSync('RESUMEINFO'))
		// console.log(this.userInfo)
	},
	methods: {
		clickImg(urls, index) {
			console.log(urls, '图片地址')
			uni.previewImage({
					urls,
					current: index
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
		padding: 0 10rpx;
		.content {
			margin-top: 40rpx;
			.company {
				padding: 20rpx 0;
				display: flex;
				flex-direction: column;
				align-items: center;
				.company_text {
					font-size: 40rpx;
				}
				.company_time {
					padding-top: 20rpx;
					font-size: 26rpx;
				}
			}
			.project {
				margin-bottom: 50rpx;
				border: 1rpx solid #F0F0F0;
				padding: 20rpx;
				.project_name {
					margin-top: 20rpx;
					font-size: 28rpx;
				}
				.project_analysis {
					margin-top: 10rpx;
					.analysis_content {
						font-size: 24rpx;
						line-height: 40rpx;
					}
				}
				.project_summary {
					margin-top: 10rpx;
					.summary_content {
						border-radius: 20rpx;
						padding: 10rpx 20rpx;
						background-color: #F0F0F0;
						font-size: 24rpx;
						line-height: 40rpx;
					}
					.summary_img{
						padding: 20rpx 0 10rpx;
					}
				}
			}
		}
	}
	.title {
		padding: 30rpx 0;
	}
</style>