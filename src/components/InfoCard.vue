<template>
    <div class="relative p-6 overflow-hidden text-center bg-white border-gray-200 shadow rounded-2xl">
      <!-- 標題 -->
      <div class="flex items-center justify-between mb-6">
          <div class="flex items-center">
              <div class="mr-2 text-emerald-600">
                  <fa-solid-calendar-alt v-if="icon === 'calendar-alt'" />
                  <fa-solid-bed v-else-if="icon === 'bed'" />
                  <fa-solid-user-minus v-else-if="icon === 'user-minus'" />
              </div>
              
              <h2 class="text-xl">
                  {{ title }}
              </h2>
          </div>
          
          <Select v-if="showSelect" :options="selectOptions" />
          <slot></slot>
      </div>
      
      <!-- 按鈕 -->
      <slot name="info"></slot>
      
      <!-- 圓餅圖 -->
      <div>
        <button @click="showModal = true">
          <canvas ref="pieChartEl" class="mt-4"></canvas>
        </button>
      </div>
  
      <!-- Modal -->
      <Modal 
        v-model="showModal"
        title="當月活動數量"
        >
        <template #content>
          <canvas ref="pieChartEl"></canvas>
        </template>
      </Modal>
    </div>
  </template>
  
  <script>
  import { ref, onMounted } from "vue";
  import { usePieChart } from '@/composables/useChart'
  
  export default {
    props: {
        icon: String,
        title: String,
        bgColor: String,
        buttonText: String,
        showSelect: Boolean,
    },
    data() {
      return {
        selectOptions: [
          { value: 'daily', label: '每日' },
          { value: 'monthly', label: '每月' },
        ],
      };
    },
    setup(props) {
      const showModal = ref(false)
      const pieChartEl = ref()
      
      onMounted(() => {
        usePieChart(
          pieChartEl
        )
      })
      
      return { showModal, pieChartEl }
    }
  };
  </script>