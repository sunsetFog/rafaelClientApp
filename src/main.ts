import { createApp } from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';

// 加载全局样式
import '@root/global.css';
import '@root/global.less';
import '@root/global.scss';

// rem
import '@sky/utils/rem.js';

// vant样式
import 'vant/lib/index.css';

// font-awesome图标
import 'font-awesome/css/font-awesome.min.css';

// mock
import '@/database/index';

const rainbow = createApp(App);

// 全局注册组件
import HeadDesign from '@/components/headDesign.vue';
rainbow.component('HeadDesign', HeadDesign);

import means from '@/public/index.js';
rainbow.config.globalProperties.$means = means;

// axios
import apiHttp from '@sky/rafaelDesign/axios/request2/http.js';
rainbow.config.globalProperties.$apihttp = apiHttp;

import VueCookies from 'vue-cookies';

// vue3改版：@vuemap/vue-amap是vue2插件，不支持vue3
import VueAMap, { initAMapApiLoader } from '@vuemap/vue-amap';
// import VueAMap, { initAMapApiLoader } from 'vue-amap';
import '@vuemap/vue-amap/dist/style.css';
initAMapApiLoader({
    key: '5c23d261c12ba0bf782654990677d83b',
    // plugin: ['AMap.Autocomplete', 'AMap.PlaceSearch', 'AMap.Scale', 'AMap.OverView', 'AMap.ToolBar', 'AMap.MapType', 'AMap.PolyEditor', 'AMap.CircleEditor', 'AMap.Geolocation'],
    // // 默认高德 sdk 版本为 1.4.4
    // v: '1.4.4'
});

rainbow.use(VueCookies).use(VueAMap).use(store).use(router).mount('#app');
