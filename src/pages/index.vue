<template>
  <router-view></router-view>
  <main
    class="min-h-screen bg-milk-white container mx-auto flex flex-col gap-y-14 md:gap-y-10 pt-6 pb-6 items-center"
  >
    <IntersectionBlock>
      <TheHeader />
    </IntersectionBlock>

    <IntersectionBlock class="md:mt-10">
      <MyHr />
    </IntersectionBlock>

    <IntersectionBlock withTranslate>
      <TheInvite />
    </IntersectionBlock>

    <IntersectionBlock withTranslate class="md:my-10">
      <MyHr />
    </IntersectionBlock>

    <IntersectionBlock withTranslate>
      <section
        class="px-4 font-agonia text-center text-lg md:text-2xl mb-1 md:w-3/4 leading-10"
      >
        Мы с нетерпением ждем самого счастливого дня в нашей жизни!
      </section>
    </IntersectionBlock>

    <IntersectionBlock withTranslate class="md:my-10">
      <MyHr />
    </IntersectionBlock>

    <IntersectionBlock withTranslate>
      <TheTimer />
    </IntersectionBlock>

    <IntersectionBlock withTranslate>
      <MyHr class="md:my-10" />
    </IntersectionBlock>

    <IntersectionBlock withTranslate>
      <TheWishes />
    </IntersectionBlock>

    <IntersectionBlock withTranslate>
      <MyDivider class="-my-10" />
    </IntersectionBlock>

    <IntersectionBlock withTranslate>
      <TheQuiz />
    </IntersectionBlock>

    <IntersectionBlock withTranslate>
      <MyDivider class="-my-10" />
    </IntersectionBlock>

    <IntersectionBlock withTranslate>
      <TheFooter />
    </IntersectionBlock>
  </main>
</template>

<script setup>
import TheHeader from "../components/TheHeader.vue";
import TheFooter from "../components/TheFooter.vue";
import TheInvite from "../components/TheInvite.vue";
import TheTimer from "../components/TheTimer.vue";
import TheWishes from "../components/TheWishes.vue";
import TheQuiz from "../components/Quiz/Quiz.vue";
import MyHr from "../components/UI/Hr.vue";
import MyDivider from "../components/UI/Divider.vue";
import IntersectionBlock from "../components/UI/IntersectionBlock.vue";
</script>

<style scoped></style>
