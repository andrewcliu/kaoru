import Vue from 'vue/dist/vue.esm';
import Router from 'vue-router';
import Home from './views/Home.vue';
Vue.use(Router);


const router = new Router({
	mode:'history',
	routes:[
		{
			path:'/',
			component:Home
		}
	]
})

export default router;