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
    type="text"
    class="rounded-full h-8 text-md shadow-sm border-border focus:border-border-focus"
    v-model="value"
    :placeholder="placeholder"
  />
</template>

<style scoped>
input[type="text"] {
  box-shadow: none !important;
}
input[type="text"]:focus {
  border-color: #94825b;
}
</style>
