<script setup>
import MyButton from "./UI/Button.vue";
import InviteCeremony from "./Invite/InviteCeremony.vue";
import InviteParty from "./Invite/InviteParty.vue";
import { ref, computed } from "vue";

const INVITE_CEREMONY = "Ceremony";
const INVITE_PARTY = "Party";
const inviteComponents = { InviteCeremony, InviteParty };
const buttons = [
  {
    label: "09/09/23",
    invite: INVITE_CEREMONY,
  },
  {
    label: "11/09/23",
    invite: INVITE_PARTY,
  },
];
const inviteParams = {
  [INVITE_CEREMONY]: {
    date: "9 сентября 2023",
    location: "ЗАГС (янтарный зал)",
    address: "ул. Малыгина, 85",
    mapId: "3A458c79962881e561cd5ed875fc22df0af7309a62f85e06d75ea075aee2477c02",
    image: "zags.jpg",
    dresses: [
      {
        image: "man.png",
        text: "Мужчины: Классические костюмы",
      },
      {
        image: "woman.png",
        text: "Девушки: Вечерние наряды",
      },
    ],
  },
  [INVITE_PARTY]: {
    date: "11 сентября 2023",
    location: "Zima&Leto Park",
    address: "д. Падерина. ул. Хвойная, 10",
    mapId: "3A85adfee5d679e26a77587f1f93013f663c5bcbd44db5b3e852e2fcbaaeff7b79",
    image: "house.jpg",
    dresses: [
      {
        image: "free_style.png",
        text: "Свободный стиль одежды",
      },
      {
        image: "bath.png",
        text: "Банные принадлежности",
      },
    ],
  },
};

const selectedInvite = ref(INVITE_CEREMONY);
const selectedInviteParams = computed(() => inviteParams[selectedInvite.value]);
const selectedInviteComponent = computed(
  () => inviteComponents[`Invite${selectedInvite.value}`]
);
const selectInvite = (invite) => (selectedInvite.value = invite);
</script>

<template>
  <section>
    <div class="font-agonia text-center text-xl">Дорогие друзья</div>
    <div class="py-6 w-2/3 text-center mx-auto">
      Приглашаем разделить с нами радость особенного для нас события и стать
      свидетелями начала нашей семейной жизни!
    </div>
    <div class="text-center text-lg mb-2">Ждем Вас</div>

    <div
      class="mx-auto flex justify-center items-center gap-x-10 py-2 sticky bg-[#faf8f5] z-10 -top-1"
    >
      <MyButton
        v-for="(button, index) in buttons"
        :key="index"
        :class="{
          'bg-primary-hover': button.invite === selectedInvite,
          'animate-pulse': button.invite !== selectedInvite,
        }"
        class="m-0 bg-primary"
        @click="selectInvite(button.invite)"
        >{{ button.label }}</MyButton
      >
    </div>
    <div class="px-4">
      <keep-alive>
        <component
          :is="selectedInviteComponent"
          v-bind="selectedInviteParams"
        />
      </keep-alive>
    </div>
  </section>
</template>
