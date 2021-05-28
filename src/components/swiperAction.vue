<template>
	<view 
		@touchstart="handleTouchstart"
		@touchend="handleTouchend"
	>
		<slot></slot>
	</view>
</template>

<script>
		export default {
			data() {
				return {
					startTime: 0,
					startX: 0,
					startY: 0
				}
			},
			methods:{
				handleTouchstart(event) {
					// console.log("按下", event.changedTouches[0].clientX)
					// console.log("按下", event.changedTouches[0].clientY)
					this.startTime = Date.now();
					this.startX = event.changedTouches[0].clientX
					this.startY = event.changedTouches[0].clientY
				},
				handleTouchend(event) {
					const endTime = Date.now();
					const endX = event.changedTouches[0].clientX
					const endY = event.changedTouches[0].clientY
					
					// 判断按下的时长
					if(endTime - this.startTime > 2000){
						return
					}
					
					// 先判断用户滑动的距离  是否合法 合法判断滑动的方向
					let direction = ''
					if(Math.abs(endX - this.startX) > 10) {
						direction = endX - this.startX>0? "right":"left"
					} else {
						return
					}
					
					this.$emit("swiperAction", { direction })
					
				}
			}
		}
</script>

<style>
</style>
