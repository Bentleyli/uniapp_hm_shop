<template>
	<view class="goods_detail">
		<swiper :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000">
			<swiper-item v-for="(item, index) in bannerImages" :key="index">
				<image :src="imgUrl" mode=""></image>
			</swiper-item>
		</swiper>
		<view class="box1">
			<view class="price">
				<text>￥6888</text>
				<text>￥8888</text>
			</view>
			<view class="goods_name">
				iphone 13
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				bannerImages: [],
				id: 0,
				imgUrl: "https://t7.baidu.com/it/u=4272803060,4157549139&fm=193&f=GIF"
			}
		},
		methods: {
			async getGoodsBannerImages() {
				const res = await this.$myRequest({
					url: '/api/getthumimages/' + this.id
				})
				this.bannerImages = res.data.message
			}
		},
		onLoad(options) {
			this.id = options.id
			this.getGoodsBannerImages()
		}
	}
</script>

<style lang="scss">
	.goods_detail{
		swiper{
			height: 700rpx;
			image{
				width: 100%;
				height: 100%;
			}
		}
		.box1{
			padding: 10px;
			.price{
				font-size: 35rpx;
				color: $shop-color;
				text:nth-child(2){
					color: #ccc;
					font-size: 28rpx;
				}
			}
			.goods_name{
				font-size: 35rpx;
			}
		}
	}
</style>
