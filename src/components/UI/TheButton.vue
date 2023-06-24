<script setup>
import { defineEmits } from "vue";

const emits = defineEmits(["click"]);
</script>

<template>
  <button
    type="button"
    class="text-black bg-primary hover:bg-primary-hover focus:outline-none font-medium rounded-full text-sm px-5 py-1.5 text-center mr-2 mb-2"
    @click="$emit('click')"
  >
    <slot></slot>
  </button>
</template>
