import { unref } from 'vue'
import { Chart } from 'chart.js'

export function usePieChart(target, labels, datasets, options) {
  const el = unref(target)
  
  const pieChart = new Chart(el, {
    type: 'pie',
    data: {
      labels: [
      'Red',
      'Blue',
      'Yellow'
    ],
    datasets: [{
      label: 'My First Dataset',
      data: [300, 50, 100],
      backgroundColor: [
        'rgb(255, 99, 132)',
        'rgb(54, 162, 235)',
        'rgb(255, 205, 86)'
      ],
      hoverOffset: 4
    }]
    },
    
    options: Object.assign({
      responsive: true,
      maintainAspectRatio: true,
      interaction: {
        mode: 'index',
        intersect: false,
      },
      plugins: {
        responsive: true,
        legend: true,
        tooltip: true,
      }
    }, options),
  })
  return pieChart
}