import { mount } from '@vue/test-utils'
import { describe, it, expect, vi } from 'vitest'
import { createTestingPinia } from '@pinia/testing'

import BookListCard from '@/components/card/book-list-card/index.vue'
import { useCartStore } from '@/store/cart'

describe('BookListCard', () => {
  const book = {
    id: 1,
    title: 'Test Book',
    author: 'Test Author',
    coverImageUrl: '/test-cover.jpg',
    price: 10,
  }

  it('calls addCart when Add to Cart button is clicked', async () => {
    const pinia = createTestingPinia({
      createSpy: vi.fn,
      stubActions: false
    })

    const wrapper = mount(BookListCard, {
      props: { book },
      global: {
        plugins: [pinia]
      }
    })

    const store = useCartStore()

    await wrapper.find('#addToCart').trigger('click')
    expect(store.addCart).toHaveBeenCalledWith({
      id: book.id,
      name: book.title,
      imagePath: book.coverImageUrl,
      price: book.price,
    })
  })

  it('renders Counter component when item is in cart', () => {
    const pinia = createTestingPinia({
      createSpy: vi.fn,
      stubActions: false
    })
    const store = useCartStore()
    store.getCartItemQuantity = vi.fn(() => 1)

    const wrapper = mount(BookListCard, {
      props: { book },
      global: {
        plugins: [pinia]
      }
    })

    expect(wrapper.findComponent({ name: 'Counter' }).exists()).toBe(true)
  })

  it('calls decreaseCartItem when Counter decreased', async () => {
    const pinia = createTestingPinia({
      createSpy: vi.fn,
      stubActions: false
    })
    const store = useCartStore()
    store.getCartItemQuantity = vi.fn(() => 1)

    const wrapper = mount(BookListCard, {
      props: { book },
      global: {
        plugins: [pinia]
      }
    })

    await wrapper.findComponent({ name: 'Counter' }).vm.$emit('decreased')
    expect(store.decreaseCartItem).toHaveBeenCalledWith({
      id: book.id,
      name: book.title,
      imagePath: book.coverImageUrl,
      price: book.price,
    })
  })

  it('calls addCart when Counter increased', async () => {
    const pinia = createTestingPinia({
      createSpy: vi.fn,
      stubActions: false
    })
    const store = useCartStore()
    store.getCartItemQuantity = vi.fn(() => 1)

    const wrapper = mount(BookListCard, {
      props: { book },
      global: {
        plugins: [pinia]
      }
    })

    await wrapper.findComponent({ name: 'Counter' }).vm.$emit('increased')
    expect(store.addCart).toHaveBeenCalledWith({
      id: book.id,
      name: book.title,
      imagePath: book.coverImageUrl,
      price: book.price,
    })
  })
})
