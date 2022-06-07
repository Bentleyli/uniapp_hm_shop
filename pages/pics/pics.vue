<template>
	<view class="pics">
		<scroll-view class="left" scroll-y="true">
			<view :class="active===index?'active':''" v-for="(item, index) in cates" :key="item.id" @click="getCateData(index, item.id)">
				{{item.title}}
			</view>
		</scroll-view>
		<scroll-view class="right" scroll-y="true">
			<view class="item" v-for="item in rightData" :key="item.id">
				<image :src="item.img_url" mode="" @click="previewImg(item.img_url)"></image>
				<text>{{item.title}}</text>
			</view>
			<text v-if="rightData.length === 0">暂无数据</text>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				cates: [],
				active: 0,
				rightData:[]
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
			
				this.cates = res.data.message;
				this.getCateData(0, this.cates[0].id)
			},
			async getCateData(index, id){
				this.active = index;
				//  获取右侧数据
				const res = await this.$myRequest({
					url: '/api/getimages/' + id
				})
				this.rightData = res.data.message
			},
			previewImg(current){
				const urls = this.rightData.map(item =>{
					// return 'https://img2.baidu.com/it/u=4241786291,3797593398&fm=253&fmt=auto&app=138&f=JPEG?w=850&h=500'
					return item.img_url
				})
				uni.previewImage({
					current,
					urls
				})
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
		display: flex;
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
		.right{
			height: 100%;
			width: 520rpx;
			margin: 10rpx auto;
			.item{
				image{
					width: 520rpx;
					height: 520rpx;
					border-radius: 5px;
				}
				text{
					font-size: 30rpx;
					line-height: 60rpx;
				}
			}
		}
	}
</style>
