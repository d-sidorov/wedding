<script setup>
import MyCheckbox from "../UI/Checkbox.vue";
import MyRadio from "../UI/Radio.vue";
import MyInput from "../UI/Input.vue";

const props = defineProps(["modelValue", "page"]);
const emit = defineEmits(["input"]);

const components = {
  checkbox: MyCheckbox,
  radio: MyRadio,
  input: MyInput,
};
</script>

<template>
  <div class="flex flex-col items-start gap-y-2">
    {{ page.title }}
    <div v-for="answer in page.answers" :key="answer.value">
      <label class="flex items-center gap-x-2">
        <component
          :is="components[page.type]"
          :value="answer.title"
          v-model="modelValue[page.value]"
        />
        {{ answer.title }}
      </label>
    </div>
  </div>
</template>

<style></style>
