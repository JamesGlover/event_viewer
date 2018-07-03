import { expect } from 'chai'
import { mount, createLocalVue } from '@vue/test-utils'
import BootstrapVue from 'bootstrap-vue'
import SubjectTypeCard from '@/components/SubjectTypeCard.vue'

import { SubjectType as SubjectTypeApi } from '@/api.js'

// create an extended `Vue` constructor
const localVue = createLocalVue()

// install plugins as normal
localVue.use(BootstrapVue)

const name = 'subject_type'
const description = 'An subject for testing'
const subjectType = new SubjectTypeApi({
  key: name,
  description: description
})

describe('SubjectTypeCard.vue', () => {
  it('renders name when passed props.subjectType', () => {
    const wrapper = mount(SubjectTypeCard, {
      propsData: { subjectType },
      localVue
    })
    expect(wrapper.text()).to.include(name)
  })

  it('renders description when passed props.subjectType', () => {
    const wrapper = mount(SubjectTypeCard, {
      propsData: { subjectType },
      localVue
    })
    expect(wrapper.text()).to.include(description)
  })
})
