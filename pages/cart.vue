<script setup lang="ts">
import Cart from "@/components/cart/index.vue";
import Button from "@/components/button/index.vue";
</script>

<template>
  <div class="container flex items-end mt-20 ml-20">
    <Cart>
      <template v-slot:button>
        <Button text="Checkout"></Button>
      </template>
    </Cart>
  </div>
</template>
