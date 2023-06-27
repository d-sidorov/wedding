<script setup>
import { ref, reactive } from "vue";
const targetDate = new Date("2023-09-09:15:30:00");

const days = ref("");
const hours = ref("");
const minutes = ref("");
const seconds = ref("");
const dates = reactive({
  Дни: days,
  Часы: hours,
  Мин: minutes,
  Сек: seconds,
});

const calcTime = () => {
  const currentDate = new Date();
  let diff = targetDate - currentDate;

  const daysLeft = Math.floor(diff / 1000 / 60 / 60 / 24);
  const hoursLeft = Math.floor(diff / 1000 / 60 / 60) % 24;
  const minutesLeft = Math.floor(diff / 1000 / 60) % 60;
  const secondsLeft = Math.floor(diff / 1000) % 60;

  days.value = daysLeft < 10 ? `0${daysLeft}` : daysLeft;
  hours.value = hoursLeft < 10 ? `0${hoursLeft}` : hoursLeft;
  minutes.value = minutesLeft < 10 ? `0${minutesLeft}` : minutesLeft;
  seconds.value = secondsLeft < 10 ? `0${secondsLeft}` : secondsLeft;
};

setInterval(calcTime, 1000);
calcTime();
</script>

<template>
  <section class="flex justify-center px-4 relative">
    <img src="timer_background.png" class="h-60 mr-6 opacity-70" />
    <div
      class="absolute text-center flex flex-col top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full"
    >
      <p class="font-agonia text-lg mb-2">9 сентября 2023</p>
      <p class="text-xl">до свадьбы осталось</p>
      <div class="mt-3 text-2xl flex justify-center gap-x-5">
        <div
          class="flex flex-col min-w-[60px]"
          v-for="(date, key) in dates"
          :key="key"
        >
          <span class="font-agonia">{{ date }}</span>
          <span class="text-sm">{{ key }}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<style></style>
