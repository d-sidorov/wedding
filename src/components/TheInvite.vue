<script setup>
import TheButton from "./UI/TheButton.vue";
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

const selectedInvite = ref(INVITE_CEREMONY);
const selectedInviteComponent = computed(
  () => inviteComponents[`Invite${selectedInvite.value}`]
);
const selectInvite = (invite) => (selectedInvite.value = invite);
</script>

<template>
  <section>
    <div class="font-agonia text-center text-xl">Дорогие друзья</div>
    <div class="py-6 w-2/3 text-center mx-auto text-lg">
      Приглашаем разделить с нами радость особенного для нас события и стать
      свидетелями начала нашей семейной жизни!
    </div>
    <div class="text-center text-lg">Ждем Вас</div>

    <div class="mx-auto flex justify-center gap-x-10 py-3">
      <TheButton
        v-for="(button, index) in buttons"
        :key="index"
        @click="selectInvite(button.invite)"
        :class="{ 'bg-primary-hover': button.invite === selectedInvite }"
        >{{ button.label }}</TheButton
      >
    </div>
    <div class="px-4">
      <component :is="selectedInviteComponent"> </component>
    </div>
  </section>
</template>
