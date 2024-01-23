<template>
  <TransitionRoot as="template" :show="modelValue">
    <Dialog as="div" class="relative z-10" @click="closeModal">
      <TransitionChild as="template" enter="ease-in-out duration-500" enter-from="opacity-0" enter-to="opacity-100" leave="ease-in-out duration-500" leave-from="opacity-100" leave-to="opacity-0">
        <div class="fixed inset-0 transition-opacity bg-gray-500 bg-opacity-75" />
      </TransitionChild>

      <div class="fixed inset-0 overflow-hidden">
        <div class="absolute inset-0 overflow-hidden">
          <div class="fixed inset-y-0 right-0 flex max-w-full pointer-events-none md:pl-10">
            <TransitionChild as="template" enter="transform transition ease-in-out duration-500 " enter-from="translate-x-full" enter-to="translate-x-0" leave="transform transition ease-in-out duration-500 " leave-from="translate-x-0" leave-to="translate-x-full">
              <DialogPanel 
              class="flex flex-col w-screen pointer-events-auto md:grid md:max-w-5xl md:grid-cols-9"
              >
                <!-- 左 -->
                <div class="order-2 h-full px-10 py-6 text-white md:order-1 md:col-span-6 bg-emerald-500">
                  <!-- 標題 -->
                  <div class="flex items-center">
                    <fa-dot-circle-o class="mr-3" />
                    <p>清日</p>
                  </div>

                  <!-- 圓餅圖 -->
                  <div>
                    <canvas ref="pieChartEl"></canvas>
                  </div>
                </div>
                <!-- 右 -->
                <div class="flex flex-col order-1 p-6 space-y-6 bg-white shadow-xl md:overflow-y-scroll md:h-full md:col-span-3 md:order-2 h-fit">
                  <div class="">
                    <div class="flex items-start justify-between">
                      <DialogTitle 
                        class="text-xl font-semibold leading-6 text-gray-900">
                          <slot name="title"></slot>
                        </DialogTitle>
                      <div class="flex items-center ml-3 h-7">
                        <button type="button" class="relative text-gray-400 bg-white rounded-md hover:text-gray-500 " @click="closeModal">
                          <span class="absolute -inset-2.5" />
                          <span class="sr-only">Close panel</span>
                          <fa6-solid-xmark />
                        </button>
                      </div>
                    </div>
                  </div>
                  
                  <!-- 下拉 -->
                  <Select :options="selectOptions" class="md:hidden" />
                  <!-- 按鈕 -->
                  <div class="relative flex-1 hidden space-y-3 md:block ">
                    <button 
                    v-for="item in company" :key="item.id"
                    type="button" class="flex items-center justify-between w-full px-6 py-4 transition-colors duration-300 rounded-2xl bg-emerald-50 hover:bg-emerald-500 focus:bg-emerald-500 focus:text-white hover:text-white group" 
                    >
                      <div class="flex items-center">
                        <fa-dot-circle-o class="mr-3" />
                        <p>{{ item.title }}</p>
                      </div>
                      <div>
                        <p class="text-3xl text-emerald-500 group-hover:text-white group-focus:text-white">
                            {{ item.totalNumber }}
                            <span class="text-base text-gray-900 group-hover:text-white group-focus:text-white ml-1.5">件</span>
                        </p>
                      </div>
                    </button>
                  </div>
                </div>
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

<script>
import { ref } from "vue";
import { useVModel } from "@vueuse/core";

export default {
  props: {
      // 設定開關
      modelValue: Boolean,
      icon: String,
      title: String,
  },
  data() {
    return {
      selectOptions: [
        { value: '1', label: '清日' },
        { value: '2', label: '清清' },
        { value: '3', label: '清原' },
        { value: '4', label: '清玉' },
      ],
    };
  },
  setup(props) {
  const isOpen = useVModel(props)
  
  const openModal = () => {
      isOpen.value = true
  }

  const closeModal = () => {
      isOpen.value = false
  }

  const company = ref([
      { 
        id: 1,
        title: '清日', 
        totalNumber: 78
      },
      { 
        id: 2,
        title: '清清', 
        totalNumber:20
      },
    ])

  return { company,isOpen, openModal, closeModal }
}
}
</script>