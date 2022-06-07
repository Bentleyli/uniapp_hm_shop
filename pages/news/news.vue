<template>
	<view class="news">
		<news-item @itemClick="goDetail()" :list="newsList"></news-item>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				newsList: []
			}
		},
		onLoad() {
			this.getNews()
		},
		methods: {
			async getNews(){
				const res = await this.$myRequest({
					url: '/api/getnewslist'
				});
				this.newsList = res.data.message
				console.log(res);
			},
			goDetail(id){
				uni.navigateTo({
					url:'/pages/news-detail/news-detail?id=' + id
				})
			}
		}
	}
</script>

<style lang="scss">
	.news{
		.news_item{
			display: flex;
			padding: 10rpx 20rpx;
			border-bottom: 1px solid $shop-color ;
			image{
				min-width: 200rpx;
				max-width: 200rpx;
				height: 150rpx;
			}
			.right{
				margin-left: 15rpx;
				display: flex;
				flex-direction: column;
				justify-content: space-between;
				.title{
					font-size: 30rpx;
				}
				.info{
					font-size: 24rpx;
					text:nth-child(2){
						margin-left: 30rpx;
					}
				}
			}
			
		}
	}
</style>
