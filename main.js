import App from './App'
import {
	myRequest
} from './util/api.js'

// #ifndef VUE3
import Vue from 'vue'

Vue.config.productionTip = false
App.mpType = 'app'
const app = new Vue({
	...App
})
app.$mount()
// #endif

Vue.prototype.$myRequest = myRequest
Vue.filter('formatDate', (date) => {
	const nDate = new Date(date)
	const year = nDate.getFullYear()
	const month = (nDate.getMonth() + 1).toString().padStart(2, 0)
	const day = nDate.getDate().toString().padStart(2, 0)
	return year + '-' + month + '-' + day
})

// #ifdef VUE3
import {
	createSSRApp
} from 'vue'
export function createApp() {
	const app = createSSRApp(App)
	return {
		app
	}
}
// #endif
