<script setup>
defineProps(["disabled"]);
const emits = defineEmits(["click"]);
</script>

<template>
  <button
    type="button"
    class="text-black bg-primary hover:bg-primary-hover focus:outline-none font-medium rounded-full text-sm px-5 py-1.5 text-center disabled:bg-primary-disabled hover:scale-110 md:hover:scale-0 duration-500 transition-all"
    @click="$emit('click')"
    :disabled="disabled"
  >
    <slot></slot>
  </button>
</template>
