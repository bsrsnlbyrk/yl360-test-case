<script setup lang="ts">
import BookList from "@/components/list/book-list/index.vue";
import CartDropdown from "@/components/dropdown/cart-dropdown/index.vue";
import { useBookStore } from "@/store/books";

const { fetchBookList } = useBookStore();

onMounted(() => fetchBookList());
</script>

<template>
  <div class="container">
    <div class="block mx-auto mt-5">
      <CartDropdown />
      <BookList />
    </div>
  </div>
</template>
