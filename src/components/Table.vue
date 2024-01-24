<template>
    <div class="flex-col overflow-x-auto rounded-2xl lg:flex lg:flex-row">
      <table class="w-full">
          <thead class=" bg-emerald-50">
              <tr class="border-b border-gray-200">
                  <!-- 標題 -->
                  <th 
                  v-for="column in columns" 
                  :key="column.key"
                  class="px-5 py-3 text-sm font-medium tracking-wider text-center text-gray-900 whitespace-nowrap"
                  
                  >
                      {{ column.label }}
                  </th>
                  
                  <th class="px-5 py-3 text-sm font-medium tracking-wider text-left text-gray-400 whitespace-nowrap"></th>
              </tr>
          </thead>
          <tbody>
            <tr v-for="record in data" :key="record.key">
                <td class="p-5 text-center bg-emerald-50">
                    {{ record.title }}
                </td>
                <td 
                class="p-5"
                >
                    <button 
                    class="text-center"
                    >
                        <Status 
                        :done="false"
                        @click="showModal = true"
                        />
                        <!-- <Status 
                        :done="true"
                        class="cursor-default" 
                        /> -->
                    </button>
                </td>
                
            </tr>
          </tbody>
      </table>

      <!-- Modal -->
        <Modal 
            v-model="showModal"
            title="當月活動數量"
            class="z-20"
            >
            <template #content>
                <PieChart />
            </template>
        </Modal>
    </div>
  </template>
  
  <script>
  import { ref } from "vue";
  
  export default {
      props: {
          columns: {
              type: Array,
              required: true
          },
          data: {
              type: Array,
              required: true
          },
          button: {
              type: Boolean,
              required: true
          }
      },
      setup(props) {
        const showModal = ref(false)

        return { showModal }
        }
  }
  </script>