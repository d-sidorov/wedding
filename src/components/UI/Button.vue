<script setup>
import Loader from "./loader.vue";

defineProps(["disabled", "loading"]);
const emits = defineEmits(["click"]);
</script>

<template>
  <button
    type="button"
    class="text-black bg-my-primary hover:bg-my-primary-hover focus:outline-none font-normal rounded-full text-sm px-5 py-1.5 text-center justify-center disabled:bg-my-primary-disabled hover:scale-110 duration-500 transition-all cursor-pointer"
    @click="$emit('click')"
    :disabled="disabled"
  >
    <Loader v-if="loading" />
    <slot v-else></slot>
  </button>
</template>
