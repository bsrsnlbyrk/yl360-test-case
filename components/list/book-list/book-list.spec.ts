import { vi, describe, it, expect, beforeEach } from 'vitest'
import { mount } from '@vue/test-utils'
import { setActivePinia, createPinia } from 'pinia'
import { createTestingPinia } from '@pinia/testing'
import { useBookStore } from '@/store/books'
import SearchInput from '@/components/input/search-input/index.vue'
import BookList from './index.vue'

describe('BookList', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it('call searchedBooks method by input type', async () => {
    const wrapper = mount(BookList, {
      global: {
        components: {
          SearchInput,
        },
      }})
    const searchedBooksSpy = vi.spyOn(wrapper.vm, 'searchedBooks');
    const store = useBookStore()

    const searchInputWrapper = await wrapper.findComponent(SearchInput)
    await searchInputWrapper.find('input').setValue('George Orwell')
    await searchInputWrapper.find('input').trigger('input')

    expect(searchedBooksSpy).toHaveBeenCalled()
  })
})
