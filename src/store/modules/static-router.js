import { asyncRouterMap, constantRouterMap } from '@/config/router.config'
import cloneDeep from 'lodash.clonedeep'
const routerdata = [
  {
    path: '/',
    name: 'index',
    component: {
      name: 'BasicLayout',
      components: {
        SettingDrawer: {
          name: 'SettingDrawer',
          props: { getContainer: {}, settings: {}, i18nRender: { type: [null, null], default: false } },
          inject: ['locale'],
          methods: {},
        },
        RightContent: {
          name: 'RightContent',
          components: {
            AvatarDropdown: {
              name: 'AvatarDropdown',
              props: { currentUser: {}, menu: { default: true } },
              methods: {},
              staticRenderFns: [],
              _compiled: true,
              _scopeId: 'data-v-4c936209',
              beforeCreate: [null],
              beforeDestroy: [null],
              __file: 'src/components/GlobalHeader/AvatarDropdown.vue',
            },
            SelectLang: {
              props: { prefixCls: { default: 'ant-pro-drop-down' } },
              name: 'SelectLang',
              mixins: [{ computed: {}, methods: {} }],
            },
          },
          props: {
            prefixCls: { default: 'ant-pro-global-header-index-action' },
            isMobile: {},
            topMenu: { required: true },
            theme: { required: true },
          },
          computed: {},
          methods: {},
          staticRenderFns: [],
          _compiled: true,
          beforeCreate: [null],
          beforeDestroy: [null],
          __file: 'src/components/GlobalHeader/RightContent.vue',
        },
        GlobalFooter: {
          name: 'ProGlobalFooter',
          components: { GlobalFooter: { name: 'GlobalFooter', props: { links: {}, copyright: { type: null } } } },
          staticRenderFns: [],
          _compiled: true,
          _scopeId: 'data-v-0ef88851',
          beforeCreate: [null],
          beforeDestroy: [null],
          __file: 'src/components/GlobalFooter/index.vue',
        },
        Ads: {
          props: {},
          methods: {},
          _scopeId: 'data-v-ad75d0b8',
          beforeCreate: [null],
          beforeDestroy: [null],
          __file: 'src/components/Other/CarbonAds.vue',
        },
      },
      computed: {},
      methods: {},
      staticRenderFns: [],
      _compiled: true,
      beforeCreate: [null],
      beforeDestroy: [null],
      __file: 'src/layouts/BasicLayout.vue',
    },
    meta: { title: 'menu.home' },
    redirect: '/dashboard/workplace',
    children: [
      {
        path: '/dashboard/workplace',
        name: 'Workplace',
        meta: { title: 'menu.dashboard', keepAlive: false, permission: ['dashboard'] },
      },
      { path: '/intro', name: 'intro', meta: { title: 'menu.intro', keepAlive: false, permission: ['form'] } },
      { path: '/course', name: 'course', meta: { title: 'menu.course', keepAlive: false, permission: ['form'] } },
      { path: '/training', name: 'training', meta: { title: 'menu.training', keepAlive: false, permission: ['form'] } },
      { path: '/showwork', name: 'showwork', meta: { title: 'menu.showwork', keepAlive: false, permission: ['table'] } },
      { path: '/zzrz', name: 'zzrz', meta: { title: 'menu.zzrz', keepAlive: false, permission: ['table'] } },

      { path: '/mytraining', name: 'mytraining', meta: { title: 'menu.mytraining', keepAlive: false, permission: ['table'] } },



      {
        path: '/recommendedTextbook',
        name: 'recommendedTextbook',
        hidden: true,
        meta: { title: 'menu.recommendedTextbook', keepAlive: false, permission: ['table'] },
      },
      {
        path: '/expertTeam',
        name: 'expertTeam',
        hidden: true,
        hideChildrenInMenu: true,
        meta: { title: 'menu.expertTeam', keepAlive: false, permission: ['table'] },
      },
      {
        path: '/trainingDetail/:id',
        name: 'trainingDetail',
        hidden: true,
        meta: { title: 'menu.trainingDetail', keepAlive: false, permission: ['form'] },
      },

      // {
      //       path: '/list/search',
      //       name: 'SearchList',
      //       // component: () => import('@/views/list/search/SearchLayout'),
      //       // redirect: '/list/search/article',
      //       meta: { title: 'menu.list.search-list', keepAlive: false, permission: ['table'] },
      //       children: [
      //         {
      //           path: '/list/search/article',
      //           name: 'SearchArticles',
      //           // component: () => import('../views/list/search/Article'),
      //           meta: { title: 'menu.list.search-list.articles', permission: ['table'] }
      //         },
      //         {
      //           path: '/list/search/project',
      //           name: 'SearchProjects',
      //           // component: () => import('../views/list/search/Projects'),
      //           meta: { title: 'menu.list.search-list.projects', permission: ['table'] }
      //         },
      //         {
      //           path: '/list/search/application',
      //           name: 'SearchApplications',
      //           // component: () => import('../views/list/search/Applications'),
      //           meta: { title: 'menu.list.search-list.applications', permission: ['table'] }
      //         }
      //       ]
      // },

      {
        path: '/stylecenter',
        name: 'stylecenter',
        hidden: true,
        meta: { title: 'menu.stylecenter', keepAlive: false, permission: ['table'] },
      },
      {
        path: '/account',
        component: { name: 'RouteView' },
        redirect: '/account/center',
        name: 'account',
        hidden: true,
        meta: { title: 'menu.account', icon: 'user', keepAlive: false, permission: ['user'] },
        children: [
          {
            path: '/account/center',
            name: 'center',
            meta: { title: 'menu.account.center', keepAlive: false, permission: ['user'] },
          },
          {
            path: '/account/settings',
            name: 'settings',
            meta: { title: 'menu.account.settings', hideHeader: true, permission: ['user'] },
            redirect: '/account/settings/basic',
            hideChildrenInMenu: true,
            children: [
              {
                path: '/account/settings/basic',
                name: 'BasicSettings',
                meta: { title: 'account.settings.menuMap.basic', hidden: true, permission: ['user'] },
              },
              {
                path: '/account/settings/security',
                name: 'SecuritySettings',
                meta: {
                  title: 'account.settings.menuMap.security',
                  hidden: true,
                  keepAlive: false,
                  permission: ['user'],
                },
              },
              {
                path: '/account/settings/custom',
                name: 'CustomSettings',
                meta: { title: 'account.settings.menuMap.custom', hidden: true, keepAlive: false, permission: ['user'] },
              },
              {
                path: '/account/settings/binding',
                name: 'BindingSettings',
                meta: {
                  title: 'account.settings.menuMap.binding',
                  hidden: true,
                  keepAlive: false,
                  permission: ['user'],
                },
              },
              {
                path: '/account/settings/notification',
                name: 'NotificationSettings',
                meta: {
                  title: 'account.settings.menuMap.notification',
                  hidden: true,
                  keepAlive: false,
                  permission: ['user'],
                },
              },
            ],
          },
        ],
      },
    ],
  },
  { path: '*', redirect: '/404', hidden: true },
]
/**
 * 过滤账户是否拥有某一个权限，并将菜单从加载列表移除
 *
 * @param permission
 * @param route
 * @returns {boolean}
 */
// function hasPermission (permission, route) {
//   if (route.meta && route.meta.permission) {
//     console.log('hasPermission', permission)
//     if (permission === undefined) {
//       return false
//     }
//     let flag = false
//     for (let i = 0, len = permission.length; i < len; i++) {
//       flag = route.meta.permission.includes(permission[i])
//       if (flag) {
//         return true
//       }
//     }
//     return false
//   }
//   return true
// }

/**
 * 单账户多角色时，使用该方法可过滤角色不存在的菜单
 *
 * @param roles
 * @param route
 * @returns {*}
 */
// eslint-disable-next-line
function hasRole(roles, route) {
  if (route.meta && route.meta.roles) {
    return route.meta.roles.includes(roles.id)
  } else {
    return true
  }
}

function filterAsyncRouter(routerMap, role) {
  // const accessedRouters = routerMap.filter(route => {
  //   if (hasPermission(role.permissionList, route)) {
  //     if (route.children && route.children.length) {
  //       route.children = filterAsyncRouter(route.children, role)
  //     }
  //     return true
  //   }
  //   return false
  // })
  const accessedRouters = routerMap
  return accessedRouters
}
// routerdata
const permission = {
  state: {
    routers: constantRouterMap,
    addRouters: routerdata,
  },
  mutations: {
    SET_ROUTERS: (state, routers) => {
      state.addRouters = routers
      console.log(JSON.stringify(routers))
      state.routers = constantRouterMap.concat(routers)
    },
  },
  actions: {
    GenerateRoutes({ commit }, data) {
      return new Promise((resolve) => {
        const { role } = data
        const routerMap = cloneDeep(asyncRouterMap)
        const accessedRouters = filterAsyncRouter(routerMap, role)
        commit('SET_ROUTERS', accessedRouters)
        resolve()
      })
    },
  },
}

export default permission
