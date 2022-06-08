<template>
	<view class="home">
		<swiper :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000">
			<swiper-item v-for="item in bannerImages">
				<image :src="imgUrl" mode=""></image>
			</swiper-item>
		</swiper>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				bannerImages: [],
				imgUrl: "https://t7.baidu.com/it/u=4272803060,4157549139&fm=193&f=GIF"
			}
		},
		methods: {
			async getGoodsBannerImages(id) {
				const res = await this.$myRequest({
					url: '/api/getthumimages/' + id
				})
				this.bannerImages = res.data.message
			}
		},
		onLoad(options) {
			this.getGoodsBannerImages(options.id)
		}
	}
</script>

<style>

</style>
