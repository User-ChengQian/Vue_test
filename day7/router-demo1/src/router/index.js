import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import home from '@/components/Home.vue'
import movie from '@/components/Movie.vue'
import about from '@/components/About.vue'
import Tab1 from '@/components/tabs/Tab1.vue'
import Tab2 from '@/components/tabs/Tab2.vue'
import login from '@/components/login.vue'
import main from '@/components/main.vue'
const router = new VueRouter({
        routes: [
            { path: '/', redirect: '/home' },
            { path: '/home', component: home },
            { path: '/login', component: login },
            { path: '/main', component: main },
            { path: '/movie/:id', component: movie, props: true },
            {
                path: '/about',
                component: about,
                // redirect: 'about/tab1',
                children: [
                    // { path: 'tab1', component: Tab1 },
                    { path: '', component: Tab1 },
                    { path: 'tab2', component: Tab2 },

                ]
            }
        ]
    })
    //定义全局前置守卫
router.beforeEach((to, from, next) => {
    //如果等于有权限的main主页则判断是否已登录
    if (to.path === '/main') {
        const token = localStorage.getItem('token')
        if (token) {
            next()
        } else {
            next('/login')
            console.log("请登录后再进入main主页");
        }


    } else {
        //如果不是main则直接放行
        next()
    }
})
export default router