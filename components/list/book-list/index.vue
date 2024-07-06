<script setup lang="ts">
type Book = {
  id: number;
  title: string;
  author: string;
  price: number;
  coverImageUrl: string;
};

import SearchInput from "@/components/input/search-input.vue";
import BookListCard from "@/components/card/book-list-card/index.vue";
import { useBookStore } from "@/store/books";

const store = useBookStore();
const { bookList } = storeToRefs(store);

const searchInput = ref("");

function searchedBooks() {
  return toRaw(bookList.value).filter(
    (book: Book) =>
      book.title.toLowerCase().includes(searchInput.value.toLowerCase()) ||
      book.author.toLowerCase().includes(searchInput.value.toLowerCase())
  );
}
</script>

<template>
  <div class="flex flex-col gap-y-6">
    <div class="w-full max-w-[320px] mx-auto py-4 md:mx-0">
      <SearchInput v-model="searchInput" />
    </div>
    <div class="grid grid-cols-2 gap-x-4 gap-y-4 md:grid-cols-3 md:gap-y-14">
      <BookListCard
        v-for="book in searchedBooks()"
        :key="book.id"
        :book="book"
      />
    </div>
  </div>
</template>
