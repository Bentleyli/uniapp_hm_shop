<template>
	<view class="contact">
		<image class="img" src="http://www.itcast.cn/2018czydz/images/gywmban.jpg" mode=""></image>
		<view class="info">
			<view class="" @click="call">联系电话: 12345678（点击拨打）</view> 
			<view>联系地址：湖南省长沙市岳麓区人民政府</view>
		</view> 
		<map class="map" :longitude="longitude" :latitude="latitude" :markers="covers" :scale="scale"></map>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				longitude: 112.9370944,
				latitude: 28.2414788,
				scale: 13,
				covers: [
					{
						id: 1,
						width: 30,
						height: 30,
						longitude: '112.9370944',
						latitude: '28.2414788',
						iconPath:'../../static/hmlogo.png'
					}
				]
			}
		},
		methods: {
			call(){
				uni.makePhoneCall({
					phoneNumber: '15674949646',
				})
			}	
		}
	}
</script>

<style lang="scss">
    .contact{
		.img{
			width: 750rpx;
			height: 320rpx;
		}
		.info{
			padding: 10rpx 20rpx;
			font-size: 30rpx;
			view{
				line-height: 80rpx;
				border-bottom: 1px solid #eee;
			}
		}
		.map{
			width: 750rpx;
			height: 750rpx;
		}
	}
</style>
