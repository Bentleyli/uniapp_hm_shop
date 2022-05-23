<template>
	<view class="home">
		<swiper :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000">
			<swiper-item v-for="item in swipers">
				<image :src="item.img" mode=""></image>
			</swiper-item>
		</swiper>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				swipers: []
			}
		},
		onLoad() {
			this.getSwipers()
		},
		methods: {
			// 获取轮播图数据
			async getSwipers(){
				// uni.request({
				// 	url: 'http://localhost:8082/api/getlunbo',
				// 	success:res => {
				// 		console.log(res);
				// 		if(res.data.status !== 0){
				// 			uni.showToast({
				// 				title: '获取数据失败'
				// 			})
				// 			return
				// 		}
				// 		this.swipers = res.data.message
				// 	}
				// })
				
				const res = await this.$myRequest({
					url: '/api/getlunbo',					
				})
				console.log(res);
				this.swipers = res.data.message
			}
		}
	}
</script>

<style lang="scss">
	.home{
		swiper{
			width: 750rpx;
			height: 380rpx;
			image{
				height: 100%;
				width: 100%;
			}
		}
	}
</style>
