<script setup>
import MyDivider from "../UI/Divider.vue";
const props = defineProps([
  "date",
  "location",
  "address",
  "mapId",
  "dress",
  "image",
  "dresses",
]);
</script>

<template>
  <p class="font-agonia text-xl py-3">{{ props.date }}</p>
  <p class="mt-3 text-lg">{{ props.location }}</p>
  <p class="text-lg">{{ props.address }}</p>
  <img
    :src="image"
    class="rounded-full w-52 h-52 md:w-80 md:h-80 mt-3 bordered border-primary-hover border-8"
  />
  <MyDivider />
  <p class="font-agonia text-xl py-3">Как добраться</p>
  <p class="text-center py-3">
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
  <MyDivider class="my-2" />
  <p class="font-agonia text-xl mb-12">Дресс-код</p>
  <div class="flex items-center justify-center gap-x-5">
    <div
      class="flex flex-col gap-y-3 items-center"
      v-for="(dress, index) in dresses"
      :key="index"
    >
      <img
        :src="dress.image"
        class="h-14 w-14 rounded-full border-black border-2"
      />
      <p class="text-center leading-5">{{ dress.text }}</p>
    </div>
  </div>
</template>

<style></style>
