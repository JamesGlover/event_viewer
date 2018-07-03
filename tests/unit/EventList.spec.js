import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import EventList from '@/components/EventList.vue'

describe('EventList.vue', () => {
  const events = [ {id: '2'}, {id: '3'}, {id: '4'} ]

  it('renders props.events when passed', () => {
    const wrapper = shallowMount(EventList, { propsData: { events } })
    expect(wrapper.findAll('.EventCard')).to.have.lengthOf(3)
  })

  it('emits the id of clicked events', () => {
    const wrapper = shallowMount(EventList, { propsData: { events } })
    wrapper.find('.EventCard').trigger('click')
    expect(wrapper.findAll('.EventCard')).to.have.lengthOf(3)
    expect(wrapper.emitted().change[0][0]).to.eq('2')
  })

  it('allows an active event to be set', () => {
    const wrapper = shallowMount(EventList, { propsData: { events, activeEventId: '4' } })
    expect(wrapper.vm.activeEvent).to.eq('4')
  })
})
