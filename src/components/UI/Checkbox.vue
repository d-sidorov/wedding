<script setup>
import { computed } from "vue";

const props = defineProps(["modelValue"]);
const emit = defineEmits(["update:modelValue"]);

const value = computed({
  get() {
    return props.modelValue;
  },
  set(value) {
    emit("update:modelValue", value);
  },
});
</script>

<template>
  <input
    type="checkbox"
    class="rounded text-primary-hover bg-gray-200 border-border outline-none outline-offset-8 shadow-none"
    v-model="value"
  />
</template>

<style scoped>
input[type="checkbox"] {
  box-shadow: none !important;
}
</style>
