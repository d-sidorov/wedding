<script setup>
import MyDivider from "../UI/Divider.vue";
import IntersectionBlock from "../UI/IntersectionBlock.vue";
const props = defineProps([
  "date",
  "time",
  "location",
  "address",
  "mapId",
  "dress",
  "image",
  "dresses",
]);
</script>

<template>
  <p class="font-agonia text-xl md:text-2xl py-3 md:py-5">{{ props.date }}</p>
  <p class="font-agonia text-2xl md:text-4xl py-3 md:py-5">{{ props.time }}</p>
  <p class="mt-3 text-lg md:text-2xl">{{ props.location }}</p>
  <p class="text-lg md:text-2xl">{{ props.address }}</p>
  <div
    class="rounded-full w-52 h-52 md:w-80 md:h-80 mt-3 bordered border-my-primary-hover border-8 overflow-hidden"
  >
    <img :src="image" class="hover:scale-105 transition-all duration-500" />
  </div>
  <IntersectionBlock class="flex flex-col items-center" withTranslate>
    <MyDivider />
    <p class="font-agonia text-xl md:text-2xl py-3">Как добраться</p>
    <p class="text-center py-3 md:text-xl md:w-2/3">
      Для вашего удобства мы подготовили карту. Надеемся, что Вы легко найдете
      место проведения свадьбы и порадуете нас своим присутствием!
    </p>
    <div class="w-full py-3">
      <iframe
        :src="`https://yandex.ru/map-widget/v1/?um=constructor%${mapId}&amp;source=constructor`"
        width="100%"
        height="300"
        frameborder="0"
      ></iframe>
    </div>
  </IntersectionBlock>

  <IntersectionBlock class="flex flex-col items-center" withTranslate>
    <p class="font-agonia text-xl md:text-2xl my-12">Дресс-код</p>
    <div class="flex justify-center items-start gap-x-5 md:gap-x-14">
      <div
        class="flex flex-col gap-y-3 items-center"
        v-for="(dress, index) in dresses"
        :key="index"
      >
        <img
          :src="dress.image"
          class="h-14 w-14 md:h-[110px] md:w-[110px] rounded-full border-black border-2"
        />
        <p class="text-center leading-5 md:text-xl">{{ dress.text }}</p>
      </div>
    </div>
  </IntersectionBlock>
</template>

<style></style>
