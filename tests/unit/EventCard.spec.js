import { expect } from 'chai'
import dirtyChai from 'dirty-chai'
import { mount, createLocalVue } from '@vue/test-utils'
import BootstrapVue from 'bootstrap-vue'
import EventCard from '@/components/EventCard.vue'
import { Event, EventType, Subject, SubjectType, Role, RoleType } from '@/api.js'

var chai = require('chai')
chai.use(dirtyChai)

// create an extended `Vue` constructor
const localVue = createLocalVue()

// install plugins as normal
localVue.use(BootstrapVue)

describe('EventCard.vue', () => {
  const limsId = 'SQSCP'
  const userIdentifier = 'AB123'
  const occuredAt = '2018-06-27T07:25:00.000Z'

  const eventTypeName = 'event_type'
  const roleTypeName = 'role_type'
  const subjectTypeName = 'subject_type'
  const friendlyName = 'My Subject'

  const subjectType = new SubjectType({ key: subjectTypeName })
  const subject = new Subject({ subjectType, friendlyName })
  const roleType = new RoleType({ key: roleTypeName })
  const role = new Role({ roleType, subject })

  const description = 'An event for testing'
  const eventType = new EventType({
    key: eventTypeName,
    description: description
  })
  const event = new Event({
    limsId, userIdentifier, occuredAt, eventType, roles: [ role ]
  })
  const wrapper = mount(EventCard, {
    propsData: { event },
    localVue
  })

  it('renders limsId when passed props.event', () => {
    expect(wrapper.text()).to.include(limsId)
  })

  it('renders userIdentifier when passed props.event', () => {
    expect(wrapper.text()).to.include(userIdentifier)
  })

  it('renders a user friendly date when passed props.event', () => {
    expect(wrapper.text()).to.include('27/06/2018, 08:25:00')
  })

  it('renders a list of subjects', () => {
    expect(wrapper.text()).to.include(roleTypeName)
    expect(wrapper.text()).to.include(subjectTypeName)
    expect(wrapper.text()).to.include(friendlyName)
  })

  it('renders event_type when passed props.event', () => {
    expect(wrapper.text()).to.include(eventTypeName)
  })

  it('renders active events in green', () => {
    expect(wrapper.contains('.bg-success')).to.be.false()
    expect(wrapper.contains('.text-white')).to.be.false()
    wrapper.setData({active: true})
    expect(wrapper.contains('.bg-success')).to.be.true()
    expect(wrapper.contains('.text-white')).to.be.true()
  })
})
