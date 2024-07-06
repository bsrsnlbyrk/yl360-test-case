<script lang="ts">
export default {
  props: ["text"],
  setup() {},
};
</script>

<template>
  <button
    class="px-4 py-2 bg-indigo-700 rounded text-white"
    @click="$emit('click')"
  >
    <span v-if="text">{{ text }}</span>
    <slot v-else></slot>
  </button>
</template>
