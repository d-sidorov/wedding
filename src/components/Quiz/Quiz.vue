<script setup>
import { ref, reactive, computed, watch, toRaw } from "vue";
import QuizPage from "./QuizPage.vue";
import MyButton from "../UI/Button.vue";
import questions from "./questions";
import Api from "../../api";
import useGetGuestNameFromRouter from "../../helpers/useGetGuestNameFromRouter";

const guest = useGetGuestNameFromRouter();
const guestName = guest ?? null;

// Form
const form = reactive({
  presence: null,
  event: null,
  beverages: [],
  overnight_stay: null,
  name: guestName,
});
const isFormSubmitted = ref(false);
const getAnswer = (question) => {
  const answer = form[question.value];

  if (Array.isArray(answer)) {
    return answer
      .map((item) => {
        return getAnswerTitle(question, item);
      })
      .join(", ");
  } else return getAnswerTitle(question, answer);
};
const getAnswerTitle = (question, answer) =>
  question.answers.find((variable) => variable.value === answer).title;

const hasAnswer = (question) => {
  const answer = form[question.value];
  return Array.isArray(answer) ? answer.length > 0 : answer;
};
const isLoading = ref(false);
const onSubmit = async () => {
  try {
    isLoading.value = true;
    const res = await Api.mutate(toRaw(form));
    isFormSubmitted.value = true;
  } catch (err) {
    console.error(err);
  } finally {
    isLoading.value = false;
  }
};

// Quiz
const prevPage = ref(null);
const currentPage = ref(0);
const maxPage = Object.keys(questions).length;

const changePage = (step) => {
  const questionValue = questions[currentPage.value]?.value;
  const answer = form[questionValue];
  const nextPage = currentPage.value + step;

  if (nextPage < 0 || nextPage > maxPage) return;

  if (questionValue === "presence" && answer === "no") {
    prevPage.value = currentPage.value;
    currentPage.value = maxPage;
    for (let key in form) {
      if (key === questionValue || key === "name") continue;
      if (Array.isArray(form[key])) form[key] = [];
      else form[key] = null;
    }
    return;
  }

  if (step === -1 && prevPage.value !== null) {
    currentPage.value = prevPage.value;
    prevPage.value = null;
    return;
  }

  currentPage.value = nextPage;
};
const isDisabledNextBtn = computed(() => {
  const currentQuestionValue = Object.keys(form)[currentPage.value];
  const result = form[currentQuestionValue];
  if (Array.isArray(result)) return !result.length > 0;
  return !result;
});
</script>

<template>
  <section class="px-4 flex flex-col items-center">
    <p class="text-center px-4 text-sm font-trajan md:text-xl">
      Подтвердите, пожалуйста, свое присутствие на торжестве!
    </p>
    <p class="text-center mt-3 text-lg md:text-xl">
      Будем ждать ответ <br />
      до 31.08.2023 г.
    </p>
    <div class="flex justify-center mt-3 mb-3 md:mt-6 md:mb-6">
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

    <div
      class="w-full md:w-3/4 flex flex-col gap-y-4 md:gap-y-6 p-3 justify-between bordered rounded-md border-my-primary-hover border-4 md:p-6 box-border min-h-[500px] md:min-h-[560px]"
    >
      <template v-if="!isFormSubmitted">
        <TransitionGroup name="slide">
          <template v-for="(page, index) in questions" :key="page.value">
            <QuizPage
              v-model="form"
              :page="page"
              v-if="currentPage === index"
            />
          </template>
        </TransitionGroup>

        <Transition name="slide">
          <div v-if="currentPage === maxPage" class="flex flex-col gap-y-2">
            <template v-for="question in questions" :key="question.value">
              <div v-if="hasAnswer(question)">
                <b>{{ question.title }}</b
                ><br />
                {{ getAnswer(question) }}
              </div>
            </template>
          </div>
        </Transition>

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
            <MyButton @click="onSubmit" :loading="isLoading">
              Отправить
            </MyButton>
          </div>
        </div>
      </template>

      <div
        v-else
        class="text-center flex flex-col gap-y-4 text-lg justify-center items-center h-max pt-8"
      >
        <p>Ваш ответ отправлен!</p>
        <p>
          С нетерпением ждем Вас, чтобы отметить это радостное событие в кругу
          самых близких людей.
        </p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.slide-enter-from,
.slide-leave-to {
  position: absolute;
}
</style>
