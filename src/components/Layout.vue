<template>
  <Navbar class="z-10" />

  <!-- 內容區塊 -->
  <section class="h-full bg-bg">
    <div class="container px-4 py-6 mx-auto sm:px-6 lg:px-8 lg:py-10">
      <slot></slot>
    </div>
  </section>
</template>

<script>
export default {
};
</script>