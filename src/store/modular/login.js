import apiHttp from '@sky/rafaelDesign/axios/request2/http.js';
import lodash from 'lodash'
import finalRouter from '@/router/modules/finalRouter.js'

function recursion(arr) {
    arr = arr || []; //退出递归1. 空数组不会遍历，就不会调用自己了
    for (let i = 0; i < arr.length; i++) {
        let item = arr[i];
        item.text = item.title;
        item.key = lodash.uniqueId('menu-');
        item.icon = require('@sky/rafaelDesign/static/picture/shouyi.png');
        recursion(item.children);
    }
}

function luyou(arr) {
    arr = arr || []; //退出递归1. 空数组不会遍历，就不会调用自己了
    for (let i = 0; i < arr.length; i++) {
        let item = arr[i];
        // 有重定向，跳过一次循环
        if(item.redirect) {
            continue;
        }
        item.name = lodash.uniqueId('mark-');
        item.meta = {
            title: item.title,
            hidden: item.hidden,
            icon: item.icon,
            cache: item.cache
        }
        // item.component = resolve => require([ '@/views' + item.path + '.vue' ],resolve);
        item.component = () => import('@/views' + item.path + '.vue');
        delete item.cache;
        delete item.createTime;
        delete item.hidden;
        delete item.icon;
        delete item.id;
        delete item.menuLevel;
        delete item.menuParentId;
        delete item.routerLevel;
        delete item.routerParentId;
        delete item.sort;
        delete item.subject;
        delete item.title;
        // 推路由重定向
        if(item.children && item.children.length != 0) {
            item.children.push({
                path: '/',
                redirect: item.children[0].path
            })
        }
        // children数组进入循环
        luyou(item.children);
    }
}

const login = {
    state: {
        routerList: [],
        menuList: [],
    },
    mutations: {

    },
    getters: {
        routerList: state => state.routerList,
        menuList: state => state.menuList
    },
    actions: {
        async routerApple({state, commit, dispatch}, params) {
            await apiHttp({
                url: '/sky/menu/treeRouter',
                method: 'get',
                params: {
                    subject: 'reportForms'
                }
            }).then((res) => {
                let list = res.data;
                dispatch('dynamicRouter', list);
            }).catch((err) => {
                console.log('error',err);
            })


            await apiHttp({
                url: '/sky/menu/treeMenu',
                method: 'get',
                params: {
                    subject: 'reportForms'
                }
            }).then((res) => {
                let list = res.data;
                recursion(list);
                dispatch('dynamicMenu', list);
            }).catch((err) => {
                console.log('error',err);
            })
            // 深拷贝看不到component字段的
            console.log("--routerApple--", JSON.parse(JSON.stringify(state)));

            return state.routerList;

        },
        dynamicRouter({state, commit, dispatch}, params) {
            luyou(params);
            params = [...params, ...finalRouter];
            state.routerList = params;
        },
        dynamicMenu({state, commit, dispatch}, params) {
            state.menuList = params
        }
    }
}

export default login;
