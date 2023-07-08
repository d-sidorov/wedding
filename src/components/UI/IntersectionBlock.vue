<script setup>
import { ref } from "vue";
import { useIntersectionObserver } from "@vueuse/core";

const props = defineProps({
  withTranslate: {
    type: Boolean,
  },
});

const target = ref(null);
const isVisible = ref(false);

const { stop } = useIntersectionObserver(
  target,
  ([{ isIntersecting }]) => {
    isVisible.value = isIntersecting;
    if (isIntersecting) stop();
  },
  { immediate: true }
);
</script>

<template>
  <div
    ref="target"
    class="IntersectionBlock flex justify-center items-center z-10"
    :class="{ isVisible, withTranslate }"
  >
    <slot />
  </div>
</template>

<style scoped>
.IntersectionBlock {
  opacity: 0;
  transition: all 1.2s ease-in;
  position: relative;
}

.IntersectionBlock.isVisible {
  opacity: 1;
}

.IntersectionBlock.withTranslate {
  transform: translateY(50px);
}
.IntersectionBlock.withTranslate.isVisible {
  transform: translateY(0);
}
</style>
