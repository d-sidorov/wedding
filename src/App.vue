<template>
  <main
    class="min-h-screen bg-milk-white container mx-auto flex flex-col gap-y-14 pt-6 pb-6"
  >
    <TheHeader />

    <TheInvite />

    <MyHr />

    <section class="px-8 font-agonia text-center leading-8 text-lg">
      Мы с нетерпением ждем самого счастливого дня в нашей жизни!
    </section>

    <MyHr />

    <TheTimer />

    <MyHr />

    <TheWishes />

    <MyDivider class="-my-10" />

    <TheQuiz />

    <MyHr class="-my-4" />

    <TheFooter />
  </main>
</template>

<script setup>
import TheHeader from "./components/TheHeader.vue";
import TheFooter from "./components/TheFooter.vue";
import TheInvite from "./components/TheInvite.vue";
import TheTimer from "./components/TheTimer.vue";
import TheWishes from "./components/TheWishes.vue";
import TheQuiz from "./components/Quiz/Quiz.vue";
import MyHr from "./components/UI/Hr.vue";
import MyDivider from "./components/UI/Divider.vue";
</script>

<style scoped></style>
