<template>
	<view class="pics">
		<scroll-view class="left" scroll-y="true">
			<view :class="active===index?'active':''" v-for="(item, index) in cates" :key="item.id" @click="getCateData(index)">
				{{item.title}}
			</view>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				cates: [],
				active: 0
			}
		},
		onLoad() {
			this.getPicsCate()
		},
		methods: {
			async getPicsCate(){
				const res = await this.$myRequest({
					url: '/api/getimgcategory'
				});
				console.log(res);
				this.cates = res.data.message;
			},
			getCateData(index){
				this.active = index;
			}
		}
	}
</script>

<style lang="scss">
	page{
		height: 100%;
	}
	.pics{
		height: 100%;
		.left{
			width: 200rpx;
			height: 100%;
			border-right: 1px solid #eee;
			view{
				height: 60px;
				width: 200rpx;
				line-height: 60px;
				color: #333;
				text-align: center;
				font-size: 30rpx;
				border-top: 1px solid #eee;
			}
			.active{
				background: $shop-color;
				color: #fff;
			}
		}
	}
</style>
