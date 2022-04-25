import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/components/MyLogin.vue'
import myhome from '@/components/MyHome.vue'
import Users from '@/components/menus/MyUsers.vue'
import Rights from '@/components/menus/MyRights.vue'
import Goods from '@/components/menus/MyGoods.vue'
import Orders from '@/components/menus/MyOrders.vue'
import Settings from '@/components/menus/MySettings.vue'
import UserDetail from '@/components/user/MyUserDetail.vue'
import routerPath from '@/router/routerpath.js'
Vue.use(VueRouter)
const router=new VueRouter({
  routes:[
    {path:'/',component:Login},
    {path:'/login',component:Login},
    {path:'/home',component:myhome,children:[
      {path:'users',component:Users},
      {path:'rights',component:Rights},
      {path:'goods',component:Goods},
      {path:'orders',component:Orders},
      {path:'settings',component:Settings},
      {path:'userinfo/:id',component:UserDetail,props:true}
    ],redirect:'/home/users'},
  ]
})
router.beforeEach(function(to,from,next){
  // const arr=['/home','/home/users','/home/rights']
  //等于-1说明未找到,不等于0说明to.path属于权限网页,需要进行权限验证
  //外联文件导入法
  if(routerPath.indexOf(to.path)!==-1){
    const token=localStorage.getItem('token')
    if(token){
      next()
    }else{
      next('/login')
    }
  }else{
    next()
  }
})
export default router