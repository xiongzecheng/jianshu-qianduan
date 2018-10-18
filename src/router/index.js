import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      //首页组件
      path: '/',
      redirect: '/index',
      component: resolve => require(['../components/common/Home.vue'], resolve),
      meta: {title: '首页'},
      children: [
        {
          path: '/index',
          component: resolve => require(['../components/page/Index.vue'], resolve),
          meta: {title: '关注'}
        },
        {
          //关注组件
          path: '/subscriptions',
          component: resolve => require(['../components/page/Subscriptions.vue'], resolve),
          meta: {title: '关注'},
          // children:[
          //   {
          //     path:'/all',
          //     component:resolve=>require(['../components/follow/all.vue'],resolve),
          //     meta:{title:'全部推荐'}
          //   },
          //   {
          //     path:'/writer',
          //     component:resolve=>require(['../components/follow/writer.vue'],resolve),
          //     meta:{title:'推荐作者'}
          //   },
          //   {
          //     path:'/topic',
          //     component:resolve=>require(['../components/follow/topic.vue'],resolve),
          //     meta:{title:'推荐专题'}
          //   },
          // ]
        },
        {
          //消息组件
          path: '/notifications',
          component: resolve => require(['../components/page/Notifications.vue'], resolve),
          meta: {title: '消息'},
          // children:[
          //   {
          //     path:'/comments',
          //     component:resolve=>require(['../components/message/comments.vue'],resolve),
          //     meta:{title:'评论'}
          //   },
          //   {
          //     path:'/chats',
          //     component:resolve=>require(['../components/message/chats.vue'],resolve),
          //     meta:{title:'简信'}
          //   },
          //   {
          //     path:'/requests',
          //     component:resolve=>require(['../components/message/requests.vue'],resolve),
          //     meta:{title:'投稿请求'}
          //   },
          //   {
          //     path:'/likes',
          //     component:resolve=>require(['../components/message/likes.vue'],resolve),
          //     meta:{title:'喜欢和赞'}
          //   },{
          //     path:'/follows',
          //     component:resolve=>require(['../components/message/follows.vue'],resolve),
          //     meta:{title:'关注'}
          //   },
          //   {
          //     path:'/money',
          //     component:resolve=>require(['../components/message/money.vue'],resolve),
          //     meta:{title:'赞赏和付费'}
          //   },
          //   {
          //     path:'/others',
          //     component:resolve=>require(['../components/message/others.vue'],resolve),
          //     meta:{title:'其他提醒'}
          //   },
          //
          // ]
        },
        {
          //所有用户组件
          path: '/users',
          component: resolve => require(['../components/page/Users.vue'], resolve),
          meta: {title: '所有用户'}
        },
        {
          //所有专题组件
          path: '/collections',
          component: resolve => require(['../components/page/Collections.vue'], resolve),
          meta: {title: '所有专题'},
          children:[
            {
              path: '/tuijian',
              component: resolve => require(['../components/common/Collection.vue'], resolve),
              meta: {title: '推荐'}
            },

            {
              path: '/remen',
              component: resolve => require(['../components/common/HotCollections.vue'], resolve),
              meta: {title: '热门'}
            }
          ]
        },
        {
          path: '/c/:id',
          component: resolve => require(['../components/page/Collection.vue'], resolve),
          meta: {title: '专题详情'}
        },
        {
          // 个人中心组件
          path: '/u',
          component: resolve => require(['../components/page/User.vue'], resolve),
          meta: {title: '个人中心'}
        },
        // {
        //   // 个人中心组件
        //   path: '/s',
        //   component: resolve => require(['../components/page/Set.vue'], resolve),
        //   meta: {title: '设置'},
        //   children:[
        //     {
        //       path: '/basic',
        //       component: resolve => require(['../components/common/SheZhi.vue'], resolve),
        //       meta: {title: '设置'}
        //     },
        //     {
        //       path: '/profile',
        //       component: resolve => require(['../components/common/GeRen.vue'], resolve),
        //       meta: {title: '个人'}
        //     }
        //   ]
        // }
      ]
    },

    {
      // 写文章
      path: '/write',
      component: resolve => require(['../components/page/Write.vue'], resolve),
      meta: {title: '写文章'}
    },
    {
      // 登录
      path: '/sign_in',
      component: resolve => require(['../components/page/Login.vue'], resolve),
      meta: {title: '登录'}
    },
    {
      // 注册
      path: '/sign_up',
      component: resolve => require(['../components/page/Register.vue'], resolve),
      meta: {title: '注册'}
    }
  ]
})
