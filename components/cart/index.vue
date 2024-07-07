<script setup lang="ts">
import { useCartStore } from "@/store/cart.js";
import Close from "@/assets/svg/close-sm.svg";

const store = useCartStore();
const { addCart, decreaseCartItem, getCartItemQuantity, removeCartItem } =
  store;
const { cartItems } = storeToRefs(store);

const cartTotalCost = computed(() =>
  cartItems.value.reduce(
    (prev: number, next: any) => prev + next.price * next.quantity,
    0
  )
);
</script>

<template>
  <div class="w-full flex flex-col gap-y-4">
    <ul v-if="cartItems.length" class="flex flex-col gap-y-2">
      <li
        v-for="item in cartItems"
        :key="item.id"
        class="flex items-center justify-between gap-x-4 w-full"
      >
        <!-- Used object element because of the broken img links, so that we can show a fallback image -->
        <object
          :data="item.imagePath"
          type="image/jpg"
          width="40"
          height="60"
          class="max-w-10 flex basis-0 grow items-center rounded"
        >
          <img
            src="/photo-camera-off.svg"
            alt="Fallback image"
            width="40"
            height="60"
            class="object-cover"
          />
        </object>
        <span class="basis-0 grow text-ellipsis line-clamp-1">{{
          item.name
        }}</span>
        <span>{{ item.price }}₺</span>
        <Counter
          class="basis-0 grow"
          :initialValue="getCartItemQuantity(item)"
          @decreased="decreaseCartItem(item)"
          @increased="addCart(item)"
        />
        <div
          class="basis-0 grow cursor-pointer text-indigo-700"
          @click="removeCartItem(item)"
        >
          <Close width="24" height="24" />
        </div>
      </li>
    </ul>
    <div v-else class="whitespace-nowrap">Your cart is empty!</div>
    <div class="flex justify-between items-end">
      <div v-if="cartTotalCost" class="mt-4 font-semibold text-indigo-700">
        Total: {{ cartTotalCost }}₺
      </div>
      <div v-if="cartTotalCost" class="w-[72px] md:w-[120px]">
        <slot name="button"></slot>
      </div>
    </div>
  </div>
</template>
