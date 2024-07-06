import { vi, describe, it, expect, beforeEach } from 'vitest'
import { mount } from '@vue/test-utils'
import { setActivePinia, createPinia } from 'pinia'
import { createTestingPinia } from '@pinia/testing'

const mockBooks = [{"id":1,"title":"To Kill a Mockingbird","author":"Harper Lee","coverImageUrl":"https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/To_Kill_a_Mockingbird_%28first_edition_cover%29.jpg/440px-To_Kill_a_Mockingbird_%28first_edition_cover%29.jpg","price":12.99},{"id":2,"title":"1984","author":"George Orwell","coverImageUrl":"https://upload.wikimedia.org/wikipedia/en/c/c3/1984first.jpg","price":10.99},{"id":3,"title":"Pride and Prejudice","author":"Jane Austen","coverImageUrl":"https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/PrideAndPrejudiceTitlePage.jpg/440px-PrideAndPrejudiceTitlePage.jpg","price":9.99},{"id":4,"title":"The Great Gatsby","author":"F. Scott Fitzgerald","coverImageUrl":"https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/The_Great_Gatsby_%281923_jacket%29.png/440px-The_Great_Gatsby_%281923_jacket%29.png","price":14.99},{"id":5,"title":"Moby Dick","author":"Herman Melville","coverImageUrl":"https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Moby-Dick_FE_title_page.jpg/440px-Moby-Dick_FE_title_page.jpg","price":11.99},{"id":6,"title":"Crime and Punishment","author":"Fyodor Dostoevsky","coverImageUrl":"https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Crime_and_Punishment_cover_1866.jpg/440px-Crime_and_Punishment_cover_1866.jpg","price":13.99},{"id":7,"title":"Brave New World","author":"Aldous Huxley","coverImageUrl":"https://upload.wikimedia.org/wikipedia/en/thumb/6/62/BraveNewWorld_FirstEdition.jpg/440px-BraveNewWorld_FirstEdition.jpg","price":12.49},{"id":8,"title":"The Catcher in the Rye","author":"J.D. Salinger","coverImageUrl":"https://upload.wikimedia.org/wikipedia/en/3/32/Rye_catcher.jpg","price":10.49},{"id":9,"title":"Animal Farm","author":"George Orwell","coverImageUrl":"https://upload.wikimedia.org/wikipedia/en/thumb/e/e9/Animal_Farm_cover.jpg/440px-Animal_Farm_cover.jpg","price":9.49},{"id":10,"title":"The Hobbit","author":"J.R.R. Tolkien","coverImageUrl":"https://upload.wikimedia.org/wikipedia/en/thumb/4/4a/TheHobbit_FirstEdition.jpg/440px-TheHobbit_FirstEdition.jpg","price":15.99}]

import BookList from '@/components/list/book-list/index.vue'
import { useBookStore } from '@/store/books'

describe('BookList', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it('change searchInput value by input type', async () => {
    const wrapper = mount(BookList, {
      global: {
        plugins: [createTestingPinia({ createSpy: vi.fn, stubActions: false, initialState: {
          bookList: mockBooks
        } })],
      }})
    const book = useBookStore()
    
    await wrapper.find('input').setValue('George Orwell')

    expect(book.bookList.length).toBe(2)
  })
})
