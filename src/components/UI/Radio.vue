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
    type="radio"
    class="rounded-full text-my-primary-hover border-border outline-none outline-offset-8 shadow-none"
    v-model="value"
  />
</template>

<style scoped>
input[type="radio"] {
  box-shadow: none !important;
}
</style>
