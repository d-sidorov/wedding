<script setup>
import { ref } from "vue";
import {
  Dialog,
  DialogPanel,
  DialogTitle,
  TransitionChild,
  TransitionRoot,
} from "@headlessui/vue";
import { ExclamationTriangleIcon } from "@heroicons/vue/24/outline";
import MyButton from "../UI/Button.vue";

defineProps(["modelValue"]);
const emit = defineEmits(["update:modelValue"]);

const switchModal = (flag) => emit("update:modelValue", flag);
</script>

<template>
  <Teleport to="body">
    <TransitionRoot as="template" :show="modelValue">
      <Dialog as="div" class="relative z-100" @close="switchModal(false)">
        <TransitionChild
          as="template"
          enter="ease-out duration-300"
          enter-from="opacity-0"
          enter-to="opacity-100"
          leave="ease-in duration-200"
          leave-from="opacity-100"
          leave-to="opacity-0"
        >
          <div
            class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
          />
        </TransitionChild>

        <div class="fixed inset-0 z-10 overflow-y-auto">
          <div
            class="flex min-h-full items-center justify-center text-center p-0"
          >
            <TransitionChild
              as="template"
              enter="ease-out duration-300"
              enter-from="opacity-0 sm:scale-95"
              enter-to="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leave-from="opacity-100 translate-y-0 sm:scale-100"
              leave-to="opacity-0 sm:scale-95"
            >
              <DialogPanel
                class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all w-full sm:w-auto mx-4"
              >
                <div class="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                  <div class="flex flex-col items-center justify-center">
                    <div
                      class="mx-auto flex h-12 w-12 flex-shrink-0 flex-col items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10"
                    >
                      <ExclamationTriangleIcon
                        class="h-6 w-6 text-red-600"
                        aria-hidden="true"
                      />
                    </div>
                    <div class="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                      <DialogTitle
                        as="h3"
                        class="text-base font-semibold leading-6 text-gray-900"
                      >
                        Ваша заявка отправлена
                      </DialogTitle>
                    </div>
                  </div>
                </div>
                <div
                  class="px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6 flex items-center justify-center"
                >
                  <MyButton @click="switchModal(false)"> Закрыть </MyButton>
                </div>
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </TransitionRoot>
  </Teleport>
</template>
