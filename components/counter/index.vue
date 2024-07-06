<script lang="ts">
import Decrease from "@/assets/svg/decrease-circle.svg";
import Increase from "@/assets/svg/increase-circle.svg";

export default {
  props: ["initialValue"],
  components: {
    Decrease,
    Increase,
  },
  setup() {},
};
</script>

<template>
  <div class="flex items-center gap-x-2">
    <button class="cursor-pointer" id="decrease" @click="$emit('decreased')">
      <Decrease width="20" height="20" fill="rgb(67 56 202)" />
    </button>
    <span>{{ initialValue }}</span>
    <button class="cursor-pointer" id="increase" @click="$emit('increased')">
      <Increase width="20" height="20" fill="rgb(67 56 202)" />
    </button>
  </div>
</template>
