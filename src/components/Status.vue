<template>
    <div v-if="done" class="flex items-center self-end font-medium text-green-500">
        <fa6-solid-circle-check />
    </div>
    <div v-else class="flex items-center self-end font-medium text-red-500">
        <fa6-solid-circle-xmark />
    </div>
  </template>
  
  <script>
  export default {
    props: {
      done: {
        type: Boolean,
        default: true,
      },
    },
  }
  </script>