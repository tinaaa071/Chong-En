<template>
  <div class="relative top-0 z-20 flex flex-col items-center justify-between flex-shrink-0 w-full px-6 py-3 text-white md:px-20 sm:flex-row bg-emerald-600 sm:sticky">
      <!-- Logo -->
      <div class="flex items-center justify-between w-full px-3 sm:w-fit ">
        <RouterLink to="/" class="w-40 aspect-auto">
          <img src="@/assets/logo(lg).png" alt="" class="">

        </RouterLink>

        <!-- 手機選單按鈕 -->
        <button type="button" 
        class="w-8 h-8 ml-auto sm:hidden"
        @click="toggleMenu">
          <heroicons-outline-menu class="w-5 h-5" />
        </button>
      </div>

      <div class="flex items-center justify-center gap-10">
        <!-- 主要選單 -->
        <div 
        class="sm:flex sm:flex-col sm:justify-between"
        :class="showMenu ? '' : 'hidden'">
          <ul class="flex flex-col sm:flex-row">
            <li v-for="item in menuItems" :key="item.to">
              <RouterLink :to="item.to" 
              class="flex items-center px-3 py-3 lg:text-lg sm:px-5 whitespace-nowrap"
              :class="isActive(item.to) ? 'text-white' : 'text-emerald-300  hover:text-white'">
                {{ item.text }}
              </RouterLink>
            </li>
          </ul>
        </div>
        
        <div class="self-stretch hidden w-px h-8 my-auto bg-white lg:block"></div>

        <!-- 時間＆氣象 -->
        <div class="items-center justify-center hidden overflow-hidden shadow-lg lg:flex rounded-2xl bg-white/40">
          <!-- 月份 -->
          <div class="px-6 py-1 text-center bg-emerald-100 text-emerald-800">
            <h4 class="text-2xl">22</h4>
            <p class="text-sm whitespace-nowrap">一月</p>
          </div>
          
          <div class="flex gap-6 px-6">
            <!-- 時間 -->
            <p class="flex items-center text-2xl">
              09:53
              <span class="ml-2 text-base">AM</span>
            </p>
            <div class="self-stretch w-px h-8 my-auto bg-white"></div>
            <!-- 氣象 -->
            <div class="flex items-center">
              <img src="@/assets/sun.png" alt="" class="scale-75">
              <p class="text-2xl">24°C</p>
            </div>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
import { computed, ref } from "vue";
import { useRoute, useRouter } from 'vue-router';

export default {
  setup() {
    const route = useRoute()
    const router = useRouter()

    const showMenu = ref(false)
    // 在 setup 內操作 value 需加上「.value」
    const toggleMenu = () => showMenu.value = !showMenu.value

    // 「主選單按鈕」功能
    const menuItems = [
      { to: '/', text: '社工' },
      { to: '/nutrition', text: '營養' },
      { to: '/admin', text: '行政' },
      { to: '/care', text: '護理' },
    ]

    // 「個人資料區按鈕」功能
    const userMenuItems = [
      {
        tag: 'RouterLink',
        to: '/setting',
        text: '個人資料'
      },
      {
        tag: 'button',
        text: '登出',
        mobile: true,
        onClick: () => {
          // 路由
          router.push('/login')
        }
      }
    ]

    // 建立變數 activeItem 判斷哪個選項和當前匹配
    // 若有子項目時，可用 startsWith 判斷是否在前一個路徑下
    const activeItem = computed(() => 
      [...menuItems]
        .reverse()
        .find(item => route.path.startsWith(item.to))
    )

    // 判斷當前路徑目標的 to 是否等於 activeItem 的 to
    const isActive = to => to === activeItem.value.to

    return { showMenu, toggleMenu, menuItems, isActive, userMenuItems }
  }
}
</script>

