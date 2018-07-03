import { expect } from 'chai'
import dirtyChai from 'dirty-chai'
import { mount, createLocalVue } from '@vue/test-utils'
import BootstrapVue from 'bootstrap-vue'
import SubjectCard from '@/components/SubjectCard.vue'
import { Event, EventType, Subject, SubjectType, Role, RoleType } from '@/api.js'

var chai = require('chai')
chai.use(dirtyChai)

// create an extended `Vue` constructor
const localVue = createLocalVue()

// install plugins as normal
localVue.use(BootstrapVue)

describe('SubjectCard.vue', () => {
  const limsId = 'SQSCP'
  const userIdentifier = 'AB123'
  const occuredAt = '2018-06-27T07:25:00.000Z'

  const eventTypeName = 'event_type'
  const roleTypeName = 'role_type'
  const subjectTypeName = 'subject_type'
  const friendlyName = 'My Subject'

  const subjectType = new SubjectType({ key: subjectTypeName })
  const roleType = new RoleType({ key: roleTypeName })

  const description = 'An event for testing'
  const eventType = new EventType({
    key: eventTypeName,
    description: description
  })
  const event = new Event({ limsId, userIdentifier, occuredAt, eventType })
  const role = new Role({ roleType, event })

  const subject = new Subject({ subjectType, friendlyName, roles: [ role ] })

  const wrapper = mount(SubjectCard, {
    propsData: { subject },
    localVue
  })

  it('renders userIdentifier when passed props.subject', () => {
    expect(wrapper.text()).to.include(friendlyName)
  })

  it('renders subject_type when passed props.subject', () => {
    expect(wrapper.text()).to.include(subjectTypeName)
  })

  it('renders a list of events', () => {
    expect(wrapper.text()).to.include(roleTypeName)
    expect(wrapper.text()).to.include(eventTypeName)
    expect(wrapper.text()).to.include('27/06/2018, 08:25:00')
  })

  it('renders active events in green', () => {
    expect(wrapper.contains('.bg-success')).to.be.false()
    expect(wrapper.contains('.text-white')).to.be.false()
    wrapper.setData({active: true})
    expect(wrapper.contains('.bg-success')).to.be.true()
    expect(wrapper.contains('.text-white')).to.be.true()
  })
})
