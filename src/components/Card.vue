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

        <slot name="tag"></slot>
    </div>
    
    <!-- 內容 -->
    <slot name="info"></slot>
    
  </div>
</template>

<script>
export default {
  props: {
      icon: String,
      title: String,
      buttonText: String
  },
  
};
</script>