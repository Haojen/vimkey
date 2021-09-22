<style lang="scss">
  * {
    box-sizing: border-box;
  }

  #app {
    @apply h-screen;

    @apply flex;
    @apply flex-col;
    @apply items-center;
    //@apply justify-between;
    //@apply pb-4;
  }
</style>

<template>
  <router-view class="container px-4 xl:px-20 2xl:px-40 min-w-min"/>
  <footer class="flex-1 flex flex-col justify-center items-center w-full bg-black text-white" style="min-height: 140px;">
    <div class="mb-0.5">
      Vimkey Copyright © <a href="https://github.com/haojen" target="_blank">Haojen</a> 2021
    </div>
    <div class="text-sm">
      <a href="https://iconscout.com/illustrations/guy" target="_blank">Guy working at home Illustration </a>
      <span class="mx-1">by</span>
      <a href="https://iconscout.com/contributors/iconscout" target="_blank">Iconscout Store</a>
    </div>
  </footer>
</template>
<script lang="ts">
import 'tailwindcss/tailwind.css'
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'App'
})

</script>
