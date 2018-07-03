import { expect } from 'chai'
import dirtyChai from 'dirty-chai'
import { mount, createLocalVue } from '@vue/test-utils'
import BootstrapVue from 'bootstrap-vue'
import RoleEventItem from '@/components/RoleEventItem.vue'
import { Event, EventType, Subject, SubjectType, Role, RoleType } from '@/api.js'

var chai = require('chai')
chai.use(dirtyChai)

// create an extended `Vue` constructor
const localVue = createLocalVue()

// install plugins as normal
localVue.use(BootstrapVue)

describe('RoleEventItem.vue', () => {
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
  const description = 'An event for testing'
  const eventType = new EventType({
    key: eventTypeName,
    description: description
  })

  const event = new Event({
    limsId, userIdentifier, occuredAt, eventType
  })

  const role = new Role({ roleType, subject, event })

  const wrapper = mount(RoleEventItem, {
    propsData: { role },
    localVue
  })

  it('renders roleTypeName when passed props.role', () => {
    expect(wrapper.text()).to.include(roleTypeName)
  })

  it('renders eventTypeName when passed props.role', () => {
    expect(wrapper.text()).to.include(eventTypeName)
  })

  it('renders friendly Date when passed props.role', () => {
    expect(wrapper.text()).to.include('27/06/2018, 08:25:00')
  })
})
