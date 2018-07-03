import Vue from 'vue'
import Router from 'vue-router'
import Explore from './views/Explore.vue'
import Events from './views/Events.vue'
import EventTypes from './views/EventTypes.vue'
import Subjects from './views/Subjects.vue'
import SubjectTypes from './views/SubjectTypes.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'explore',
      component: Explore
    },
    {
      path: '/events',
      name: 'events',
      component: Events
    },
    {
      path: '/events/:active_event_id',
      name: 'event',
      component: Events,
      props: true
    },
    {
      path: '/event-types',
      name: 'event-types',
      component: EventTypes
    },
    {
      path: '/subjects',
      name: 'subjects',
      component: Subjects
    },
    {
      path: '/subject-types',
      name: 'subject-types',
      component: SubjectTypes
    }
  ]
})
