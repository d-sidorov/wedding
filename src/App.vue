<template>
  <main
    class="min-h-screen bg-milk-white container mx-auto flex flex-col gap-y-14 pt-6 pb-6"
  >
    <TheHeader />

    <TheInvite />

    <MyHr />

    <p class="px-8 font-agonia text-center leading-8 text-lg">
      Мы с нетерпение ждем самого счастливого дня в нашей жизни
    </p>

    <MyHr />

    <TheTimer />

    <MyHr />

    <TheWishes />
  </main>
</template>

<script setup>
import TheHeader from "./components/TheHeader.vue";
import TheInvite from "./components/TheInvite.vue";
import TheTimer from "./components/TheTimer.vue";
import TheWishes from "./components/TheWishes.vue";
import MyHr from "./components/UI/Hr.vue";
</script>

<style scoped></style>
