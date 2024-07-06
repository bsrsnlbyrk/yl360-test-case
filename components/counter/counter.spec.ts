import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'

import Counter from './index.vue'

describe('BookListCard', () => {
  it('emits the decreased event', () => {
    const wrapper = mount(Counter)
    wrapper.find("#decrease").trigger("click")

    expect(wrapper.emitted('decreased')).toBeTruthy()
  })

  it('emits the increased event', () => {
    const wrapper = mount(Counter)
    
    wrapper.find("#increase").trigger("click")
    expect(wrapper.emitted('increased')).toBeTruthy()
  })
})
