import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home'
import FirstRoute from '@/components/FirstRoute'
import FirstRouteChild from '@/components/FirstRouteChild'
import AnimationShowcase from '@/components/AnimationShowcase'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/firstroute/:name',
      name: 'FirstRoute',
      component: FirstRoute,
      children: [
        {
          path: 'child',
          component: FirstRouteChild
        }
      ]
    },
    {
      path: '/animationshowcase/',
      name: 'AnimationShowcase',
      component: AnimationShowcase
    }
  ]
})
