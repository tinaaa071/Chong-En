<template>
  <Layout>
    <!-- 卡片 -->
    <div class="grid gap-6 mb-10 lg:grid-cols-3">
      <InfoCard v-for="item in cards" :key="item.id"
      :icon="item.icon"
      :title="item.title"
      :show-select="isSelectVisible"
      >

      <template #info>
        <!-- 按鈕 -->
        <button type="button" class="flex items-center justify-between w-full px-6 py-4 rounded-2xl" :style="{ 'background-color': item.bgColor }"
        @click="showModal = true">
          <div class="flex items-center">
              <fa-dot-circle-o class="mr-3" :style="{ 'color': item.buttonText }" />
              <p>全體</p>
          </div>
          <div>
              <p class="text-3xl " :style="{ 'color': item.buttonText }">
                  {{ item.totalNumber }}
                  <span class="text-base text-gray-900 ml-1.5">件</span>
              </p>
          </div>
        </button>

        <!-- 圖表 -->
        <div></div>
      </template>
      </InfoCard>
    </div>

    <!-- 表格 -->
    <Card title="表單填寫完整率">
      <template #tag>
        <div class="flex space-x-5">
          <div class="flex items-center">
            <fa6-solid-circle-check class="mr-2 text-emerald-500" />
            已完成
          </div>
          <div class="flex items-center">
            <fa6-solid-circle-xmark class="mr-2 text-red-500" />
            尚有缺件
          </div>
        </div>
      </template>
      
      <template #info>
        <Table :columns="columns" :data="data">
        </Table>
      </template>
    </Card>
  </Layout>

  <!-- Drawer -->
  <Drawer 
  v-model="showModal" 
  class="z-20">
    <template #title>
      當月團體活動數量
    </template>
  </Drawer>
    
</template>

<script>
import { ref } from "vue";


export default {
  
  setup() {
    const showModal = ref(false)
    const isSelectVisible= ref(true)
    const cards = ref([
      { 
        id: 1,
        icon:'calendar-alt', 
        title: '團體活動數量', 
        bgColor: '#A7F3D0',
        buttonText:'#10B981', 
        totalNumber: 78
      },
      {
        id:2,
        icon:'bed', 
        title: '整體機構佔床數',
        bgColor: '#FDE68A',
        buttonText:'#F59E0B', 
        totalNumber: 20
      },
      { 
        id:3,
        icon:'user-minus', 
        title: '整體機構空床率', 
        bgColor: '#FBCFE8',
        buttonText:'#EC4899', 
        totalNumber: 33
      },
    ])
      const drawer = ref([
      { icon: 'title', title: '標題' },
      { icon: 'visits', title: '瀏覽次數' },
      { icon: 'created_at', title: '建立日期' },
    ])

    // 欄位
    const columns = ref([
        { key: 'title', label: '' },
        { key: '1', label: '清日' },
        { key: '2', label: '清清' },
        { key: '3', label: '清原' },
        { key: '4', label: '清玉' },
        { key: '5', label: '清松' },
        { key: '6', label: '清森' },
        { key: '7', label: '清星' },
        { key: '8', label: '清月' },
        { key: '9', label: '清處' },
        { key: '10', label: '清水' },
        { key: '11', label: '清流' },

    ])
    // 資料
    const data = ref([
        { 
          id: 1,
          title: '72 小時評估單',
        },
        { 
          id: 2,
          title: '入住適應評估單',
        },
    ])
      
    return {
      cards, 
      drawer, 
      showModal, 
      isSelectVisible, 
      columns,
      data
    }
  }
  
};
</script>