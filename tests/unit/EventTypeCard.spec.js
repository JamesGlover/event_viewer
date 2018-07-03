import { expect } from 'chai'
import { mount, createLocalVue } from '@vue/test-utils'
import BootstrapVue from 'bootstrap-vue'
import EventTypeCard from '@/components/EventTypeCard.vue'

import { EventType as EventTypeApi } from '@/api.js'

// create an extended `Vue` constructor
const localVue = createLocalVue()

// install plugins as normal
localVue.use(BootstrapVue)

describe('EventTypeCard.vue', () => {
  const name = 'event_type'
  const description = 'An event for testing'
  const eventType = new EventTypeApi({
    key: name,
    description: description
  })
  const wrapper = mount(EventTypeCard, {
    propsData: { eventType },
    localVue
  })

  it('renders name when passed props.eventType', () => {
    expect(wrapper.text()).to.include(name)
  })

  it('renders description when passed props.eventType', () => {
    expect(wrapper.text()).to.include(description)
  })
})
