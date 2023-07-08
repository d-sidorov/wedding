<script setup>
import MyHr from "./UI/Hr.vue";
</script>

<template>
  <section class="flex-col items-center">
    <div class="flex justify-center text-4xl py-3 md:text-5xl">09/09/2023</div>
    <div class="flex justify-center">
      <img src="/images/hands.png" class="h-80" alt="" />
      <div
        class="text-[50px] font-playfair md:text-6xl h-[200px] w-[200px] md:h-[260px] md:w-[260px] flex justify-center items-center relative bg-border-image bg-cover bg-no-repeat bg-center"
      >
        Д | К
      </div>
    </div>
    <div class="text-center text-2xl md:text-5xl font-pl font-trajan pt-3">
      Дмитрий и Ксения
    </div>
    <div class="text-center font-agonia py-3 px-1 md:text-xl">
      приглашают на свадьбу
    </div>
    <div class="flex justify-center mt-4">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        class="w-8 h-8 md:w-10 md:h-10 animate-pulse"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M19.5 5.25l-7.5 7.5-7.5-7.5m15 6l-7.5 7.5-7.5-7.5"
        />
      </svg>
    </div>
  </section>
</template>

<style scoped lang="sass"></style>
