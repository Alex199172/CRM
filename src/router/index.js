import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    title: 'Home',
    component: () => import('@/layouts/main'),
    children: [
      {
        path: '/CRM',
        name: 'CRM',
        component: () => import('@/pages/client/crm'),
      },

        {
          path: '/widget/quiz/item/:id',
          name: 'widget_item',
          component: () => import('@/pages/client/widgets/quiz/item'),
        },

        {
          path: '/widget/quiz/list',
          name: 'widget_list',
          component: () => import('@/pages/client/widgets/quiz/list'),
        },

        {
          path: '/users',
          name: 'users',
          component: () => import('@/pages/client/users/index')
        },

        {
          path: '/settings',
          name: 'settings',
          component: () => import('@/pages/client/settings/index'),
        },

        {
          path: '/media',
          name: 'media',
          component: () => import('@/pages/client/media/index'),
        },

        {
          path: '/profile',
          name: 'profile',
          component: () => import('@/pages/client/profile/index'),
          children: [

            {
              path: '',
              name: 'account',
              component: () => import('@/pages/client/profile/account')
            },

            {
              path: 'password',
              name: 'password',
              component: () => import('@/pages/client/profile/psw')
            },

            {
              path: 'person',
              name: 'person',
              component: () => import('@/pages/client/profile/person')
            },

            {
              path: 'right',
              name: 'right',
              component: () => import('@/pages/client/profile/right')
            },

            {
              path: 'settings',
              name: 'settings',
              component: () => import('@/pages/client/profile/settings')
            },

            {
              path: 'service',
              name: 'service',
              component: () => import('@/pages/client/profile/service')
            }
          ]
        }

    ]
  },

  {
    path: '/widget',
    name: 'Widget',
    title: 'Виджеты',
    component: () => import('@/layouts/Widget'),
    children: [
      {
        path: 'quiz',
        name: 'quiz',
        component: () => import('@/components/widget/quiz/index')
      },
    ]
  },

  {
    path: '/auth',
    name: 'Auth',
    title: 'Авторизация',
    component: () => import('@/layouts/auth'),
    children: [
      {
        path: '/quiz',
        name: 'auth',
        component: () => import('@/pages/auth/auth')
      },
    ]
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  let token = localStorage.getItem('auth_token')

  if (to.name === 'auth' && !token) {
    next()
  } else if (token) {
    next()
  } else {
    next({name: 'auth'})
  }

})

export default router
