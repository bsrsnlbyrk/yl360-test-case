<script setup lang="ts">
import ShoppingCart from "@/assets/svg/shopping-cart.svg";
import Cart from "@/components/cart/index.vue";
import Button from "@/components/button/index.vue";
import { useCartStore } from "@/store/cart.js";

const store = useCartStore();
const { cartItems } = storeToRefs(store);

const isOpen = ref(false);

const cartTotalCost = computed(() =>
  cartItems.value.reduce(
    (prev: number, next: any) => prev + next.price * next.quantity,
    0
  )
);

const cartTotalItems = computed(() =>
  cartItems.value.reduce((prev: number, next: any) => prev + next.quantity, 0)
);
</script>

<template>
  <div class="w-full flex justify-end">
    <div class="flex relative w-10" @click="isOpen = !isOpen">
      <ShoppingCart
        width="40"
        height="40"
        class="cursor-pointer"
        fill="rgb(67 56 202)"
      />
      <div
        v-if="cartTotalItems"
        class="absolute top-0 -left-1 z-10 w-4 h-4 bg-indigo-700 rounded-full text-white flex justify-center items-center p-1 text-xs"
      >
        {{ cartTotalItems }}
      </div>
    </div>
    <div
      class="absolute top-14 flex flex-col items-end rounded shadow bg-white overflow-hidden peer-checked:flex flex-col w-[360px] p-4 mt-1 border border-gray-200"
      v-if="isOpen"
    >
      <Cart>
        <template v-slot:button>
          <NuxtLink to="/cart">
            <Button
              class="px-4 py-2 bg-indigo-700 rounded text-white"
              text="Go to cart"
            >
              Go to cart
            </Button>
          </NuxtLink>
        </template>
      </Cart>
    </div>
  </div>
</template>
