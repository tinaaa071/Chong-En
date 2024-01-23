<template>
    <TransitionRoot appear :show="modelValue" as="template">
      <Dialog as="div" @close="closeModal" class="relative z-10">
        <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0" enter-to="opacity-100" leave="ease-in duration-200" leave-from="opacity-100" leave-to="opacity-0">
        <div class="fixed inset-0 transition-opacity bg-gray-500 bg-opacity-75" />
      </TransitionChild>

      <div class="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div class="flex items-end justify-center min-h-full p-4 text-center sm:items-center sm:p-0">
          <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95" enter-to="opacity-100 translate-y-0 sm:scale-100" leave="ease-in duration-200" leave-from="opacity-100 translate-y-0 sm:scale-100" leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95">
            <DialogPanel class="relative overflow-hidden text-left transition-all transform bg-white shadow-xl rounded-3xl sm:my-8 sm:w-full sm:max-w-lg">
              <!-- 表頭 -->
              <div class="text-white bg-emerald-500">
                <div class="flex justify-between px-6 py-4">
                  <p>
                    {{ title }}
                  </p>
                <button type="button" class=" hover:text-gray-500" @click="closeModal">
                  <span class="sr-only">Close</span>
                  <fa6-solid-xmark />
                </button>
                </div>
              </div>
              <!-- 內容 -->
              <div class="p-6">
                <slot name="content"></slot>
              </div>
              
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
      </Dialog>
    </TransitionRoot>
</template>
  
<script>
// 載入 VueUse
import { useVModel } from "@vueuse/core";

export default {
    // 送出
    emits: ['update:model-value'],
    // 傳入
    props: {
        // 設定開關
        modelValue: Boolean,
        title: String
    },
    setup(props) {
    const isOpen = useVModel(props)
    
    const openModal = () => {
        isOpen.value = true
    }

    const closeModal = () => {
        isOpen.value = false
    }
    
    return { isOpen, openModal, closeModal }
  }
}
</script>