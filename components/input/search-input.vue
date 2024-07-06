<script setup lang="ts">
import Search from "@/assets/svg/search.svg";

const model = defineModel();
</script>

<template>
  <div
    class="flex items-center gap-x-2 px-3 py-1 border-[2px] border-indigo-700 rounded-full"
  >
    <Search width="20" height="20" />
    <input type="text" class="w-full outline-none" v-model="model" />
  </div>
</template>
