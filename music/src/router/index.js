import Vue from 'vue'
import Router from 'vue-router'
import index from '@/pages/index'
import home from "../pages/home";
import artists from "../pages/artists";
import search from "../pages/search";
import ucenter from "../pages/ucenter";
import listcate from "../pages/listcate";
import new_list from "../pages/musiclist/new_list";
import hot_list from "../pages/musiclist/hot_list";
import king_list from "../pages/musiclist/king_list";
import morelist from "../pages/morelist";
import musicplay from "../pages/musicplay";
import artistsDetails from "../pages/artistsDetails/artistsDetails";
import listcateDetails from "../pages/listcateDetails/listcateDetails";

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/musicplay',
      name:'musicplay',
      component:musicplay
    },
    {
      path: '/',
      name: 'index',
      redirect:"/home",
      component: index,
      children:[
        {
          path:'home',
          component:home,
          redirect:"/home/hot",
          children:[
            {
              path:"hot",
              name:'hot',
              component:hot_list
            },
            {
              path:"king",
              name:'king',
              component:king_list
            },
            {
              path:"news",
              name:'news',
              component:new_list
            }
          ]
        },
        {
          path:'artists',
          component:artists
        },
        {
          path:'artistsDetails',
          name:"artistsDetails",
          component:artistsDetails
        },
        {
          path:'search',
          component:search
        },
        {
          path:'ucenter',
          component:ucenter
        },
        {
          path:'listcate',
          component:listcate
        },
        {
          path:'listcateDetails',
          name:"listcateDetails",
          component:listcateDetails
        },
        {
          path:'more',
          name:'morelist',
          component:morelist
        }
      ]
    }
  ]
})
