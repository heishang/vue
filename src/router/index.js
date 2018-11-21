import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import FirstQuestion from '@/components/FirstQuestion'
import Secondquestions from '@/components/Secondquestions'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/FirstQuestion',
      name: 'FirstQuestion',
      component: FirstQuestion
    },
    {
      path: '/Secondquestions',
      name: 'Secondquestions',
      component: Secondquestions
    }
  ]
})
