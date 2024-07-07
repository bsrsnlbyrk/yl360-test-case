import { defineStore } from 'pinia'
import { fetchBooks } from '@/service/books-service';
import type { Book } from "@/types/app.type";

export const useBookStore = defineStore('books',  () => {
    const bookList: Ref<Book[]> = ref([]);

    const getBookList = computed(() => bookList.value);
    
    async function fetchBookList () {
        try {
            const bookData = await fetchBooks();
    
            if(bookData) {
                bookList.value = bookData;
            }
        } catch (error: any) {
            console.error("Failed to fetch books:", error.message);
            alert("Failed to fetch books")
        }
    }
    
    function setBookList (data: Book[]) {
        bookList.value = data;
    }

    return {
        bookList: getBookList,
        fetchBookList,
        setBookList,
    }
})
