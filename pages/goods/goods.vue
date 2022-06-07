<template>
	<view class="goods_list">
		<goods-list @itemClick="goGoodsDetail" :goods="goods"></goods-list>
		<view class="isOver" v-if="flag">
			--------我是有底线的--------
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				goods: [],
				pageIndex: 1,
				flag: false
			}
		},
		onLoad() {
			this.getGoodsList()
		},
		methods: {
			// 获取商品列表数据
			async getGoodsList(callback){
				const res = await this.$myRequest({
					url: '/api/getgoods?pageindex='+this.pageIndex,
				})
				this.goods = [...this.goods, ...res.data.message]
				callback && callback()
			},
			goGoodsDetail(id){
				uni.navigateTo({
					url:'../goods-detail/goods-detail?id=' + id
				})
			}
		},
		onReachBottom() {
			if(this.goods.length<this.pageIndex*10) return this.flag = true
			this.pageIndex++
			this.getGoodsList()
		},
		onPullDownRefresh() {
			this.pageIndex = 1
			this.goods = []
			this.flag = false
			setTimeout(()=>{
				this.getGoodsList(()=>{
					uni.stopPullDownRefresh()
				})
			}, 1000)
		}
	}
</script>

<style lang="scss">
	.goods_list{
		background: #eee;
	}
	.isOver{
		width: 100%;
		height: 50px;
		line-height: 50px;
		text-align: center;
		font-size: 28rpx;
	}
</style>
