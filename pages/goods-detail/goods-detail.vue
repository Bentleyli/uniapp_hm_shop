<template>
	<view class="goods_detail">
		<swiper :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000">
			<swiper-item v-for="(item, index) in bannerImages" :key="index">
				<image :src="imgUrl" mode=""></image>
			</swiper-item>
		</swiper>
		<view class="box1">
			<view class="price">
				<text>￥{{goodsInfo.sell_price}}</text>
				<text>￥{{goodsInfo.market_price}}</text>
			</view>
			<view class="goods_name">
				{{goodsInfo.title}}
			</view>
		</view>
		 <!-- content区域 -->
		<view class="content">
			<rich-text :nodes="goodsDesc.content"></rich-text>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				bannerImages: [],
				id: 0,
				imgUrl: "https://t7.baidu.com/it/u=4272803060,4157549139&fm=193&f=GIF",
				goodsInfo: {},
				goodsDesc: {}
			}
		},
		methods: {
			async getGoodsBannerImages() {
				const res = await this.$myRequest({
					url: '/api/getthumimages/' + this.id
				})
				this.bannerImages = res.data.message
			},
			async getGoodsInfo() {
				const res = await this.$myRequest({
					url: '/api/goods/getinfo/' + this.id
				})
				this.goodsInfo = res.data.message[0]
			},
			async getGoodsDesc() {
				const res = await this.$myRequest({
					url: '/api/goods/getdesc/' + this.id
				})
				this.goodsDesc = res.data.message[0]
			}
		},
		onLoad(options) {
			this.id = options.id
			this.getGoodsBannerImages()
			this.getGoodsInfo()
			this.getGoodsDesc()
		}
	}
</script>

<style lang="scss">
	.goods_detail {
		swiper {
			height: 700rpx;

			image {
				width: 100%;
				height: 100%;
			}
		}

		.box1 {
			padding: 10px;

			.price {
				font-size: 35rpx;
				color: $shop-color;

				text:nth-child(2) {
					color: #ccc;
					font-size: 28rpx;
				}
			}

			.goods_name {
				font-size: 35rpx;
			}
		}
		.content{
			margin: 10rpx 10rpx;
		}
	}
</style>
