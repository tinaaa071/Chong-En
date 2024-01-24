<template>
  <div class="items-center justify-center hidden overflow-hidden shadow-lg lg:flex rounded-2xl bg-white/40">
        <!-- 月份 -->
        <div class="px-6 py-1 text-center bg-emerald-100 text-emerald-800">
        <h4 class="text-xl">22</h4>
        <p class="text-sm whitespace-nowrap">一月</p>
        </div>
        
        <div class="flex gap-6 px-6">
        <!-- 時間 -->
        <p class="flex items-center text-xl">
            09:53
            <span class="ml-2 text-base">AM</span>
        </p>
        <div class="self-stretch w-px h-8 my-auto bg-white"></div>
        <!-- 氣象 -->
        <div class="flex items-center">
            <img src="@/assets/sun.png" alt="" class="scale-75">
            <p class="text-xl">24°C</p>
        </div>
        </div>
    </div>
</template>

<script>
export default {
};
</script>