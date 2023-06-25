<script setup>
const emits = defineEmits(["click"]);
</script>

<template>
  <button
    type="button"
    class="text-black bg-primary hover:bg-primary-hover focus:outline-none font-medium rounded-full text-sm px-5 py-1.5 text-center"
    @click="$emit('click')"
  >
    <slot></slot>
  </button>
</template>
