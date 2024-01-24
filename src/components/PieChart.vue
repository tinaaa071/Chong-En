<template>
  <canvas ref="pieChartEl"></canvas>
</template>

<script>
  import { ref, onMounted } from "vue";
  import { usePieChart } from '@/composables/useChart'
  
  export default {
    setup(props) {
      const pieChartEl = ref()
      
      onMounted(() => {
        usePieChart(
          pieChartEl
        )
      })
      
      return { pieChartEl }
    }
  };
</script>