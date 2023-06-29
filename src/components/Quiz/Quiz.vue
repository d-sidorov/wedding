<script setup>
import { ref, reactive, computed, toRaw } from "vue";
import QuizPage from "./QuizPage.vue";
import MyButton from "../UI/Button.vue";
import MyModal from "../UI/Modal.vue";
import quizConfigs from "./configs";
import Api from "../../api";

// Form
const form = reactive({
  presence: null,
  event: null,
  beverages: [],
  overnight_stay: null,
  name: "test",
});
const getAnswer = (question) => {
  const answer = form[question.value];
  return Array.isArray(answer) ? answer.join(", ") : answer;
};
const onSubmit = async () => {
  try {
    const res = await Api.mutate(toRaw(form));
    console.log(res);
  } catch (err) {}
};

// Quiz
const currentPage = ref(0);
const maxPage = Object.keys(quizConfigs).length;

const changePage = (step) => {
  const nextPage = currentPage.value + step;
  if (nextPage < 0 || nextPage > maxPage) return;
  currentPage.value = nextPage;
};
const isDisabledNextBtn = computed(() => {
  const currentQuestionValue = Object.keys(form)[currentPage.value];
  const result = form[currentQuestionValue];
  if (Array.isArray(result)) return !result.length > 0;
  return !result;
});

// Modal
const isOpenModal = ref(false);
</script>

<template>
  <section class="px-4 flex flex-col items-center">
    <p class="text-center px-4 text-sm font-trajan">
      Подтвердите, пожалуйста, свое присутствие на торжестве!
    </p>
    <p class="text-center mt-3 text-lg">
      Будем ждать ответ <br />
      до 31.08.2023 г.
    </p>
    <div class="flex justify-center mt-3">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        class="w-6 h-6"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M19.5 5.25l-7.5 7.5-7.5-7.5m15 6l-7.5 7.5-7.5-7.5"
        />
      </svg>
    </div>

    <div
      class="w-full md:w-3/4 flex flex-col gap-y-4 p-3 justify-between"
      style="min-height: 500px"
    >
      <template v-for="(page, index) in quizConfigs" :key="page.value">
        <QuizPage v-model="form" :page="page" v-if="currentPage === index" />
      </template>

      <div v-if="currentPage === maxPage" class="flex flex-col gap-y-2">
        <div v-for="question in quizConfigs" :key="question.value">
          <b>{{ question.title }}</b
          ><br />
          {{ getAnswer(question) }}
        </div>
      </div>

      <div class="grid grid-cols-2 w-full self-start">
        <div class="justify-self-start">
          <MyButton v-if="currentPage > 0" @click="changePage(-1)">
            Назад
          </MyButton>
        </div>
        <div class="justify-self-end" v-if="currentPage !== maxPage">
          <MyButton @click="changePage(1)" :disabled="isDisabledNextBtn">
            Далее
          </MyButton>
        </div>
        <div class="justify-self-end" v-else>
          <MyButton @click="onSubmit"> Отправить </MyButton>
        </div>
      </div>
    </div>
  </section>

  <MyButton @click="isOpenModal = true"> Открыть</MyButton>
  <MyModal v-model="isOpenModal" />
</template>

<style scoped></style>
