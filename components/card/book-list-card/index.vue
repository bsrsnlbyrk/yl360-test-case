<script lang="ts">
import { useCartStore } from "@/store/cart.js";
import Counter from "@/components/counter/index.vue";
import Button from "@/components/button/index.vue";
import Decrease from "@/assets/svg/decrease-circle.svg";
import Increase from "@/assets/svg/increase-circle.svg";

type Book = {
  id: number;
  title: string;
  author: string;
  price: number;
  coverImageUrl: string;
};

export default defineComponent({
  props: { book: { type: Object, required: true } },
  components: {
    Decrease,
    Increase,
    Counter,
    Button,
  },
  setup() {
    const store = useCartStore();
    const { addCart, decreaseCartItem, getCartItemQuantity } = store;

    function handleButtonClick(book: any) {
      addCart({
        id: book.id,
        name: book.title,
        imagePath: book.coverImageUrl,
        price: book.price,
      });
    }

    return {
      addCart,
      decreaseCartItem,
      getCartItemQuantity,
      handleButtonClick,
    };
  },
});
</script>

<template>
  <div
    class="flex flex-col items-center max-w-[320px] py-4 px-2 md:px-8 md:py-4 border-[2px] border-indigo-700 rounded md:rounded-lg hover:shadow"
  >
    <object
      :data="book.coverImageUrl"
      type="image/jpg"
      width="120"
      height="160"
    >
      <img
        src="/photo-camera-off.svg"
        alt="Fallback image"
        width="120"
        height="160"
      />
    </object>
    <div class="mt-5 text-center">
      <p class="font-bold">{{ book.title }}</p>
      <p>{{ book.author }}</p>
      <p>{{ book.price }}₺</p>
    </div>
    <Button
      text="Add to Cart"
      id="addToCart"
      class="w-full mt-4 hover:bg-indigo-500"
      v-if="!getCartItemQuantity(book)"
      @click="handleButtonClick(book)"
    >
    </Button>
    <div v-else class="flex items-center gap-x-2 mt-4">
      <Counter
        class="h-10"
        :initialValue="getCartItemQuantity(book)"
        @decreased="
          decreaseCartItem({
            id: book.id,
            name: book.title,
            imagePath: book.coverImageUrl,
            price: book.price,
          })
        "
        @increased="
          addCart({
            id: book.id,
            name: book.title,
            imagePath: book.coverImageUrl,
            price: book.price,
          })
        "
      />
    </div>
  </div>
</template>
