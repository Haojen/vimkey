<style lang="scss">
* {
    box-sizing: border-box;
}

#app {
    @apply h-screen;
    @apply min-w-min;

    @apply flex;
    @apply flex-col;
    @apply items-center;
}
</style>

<template>
    <header class="container md:px-4 xl:px-20 2xl:px-40">
        <TopBar/>
    </header>
    <router-view class="container flex-1 md:px-4 xl:px-20 2xl:px-40" />
    <footer class="flex flex-col justify-center items-center w-full bg-gray-900 text-white text-opacity-90" style="min-height: 100px;">
        <div class="mb-0.5">
            Copyright © <a href="https://github.com/haojen" target="_blank">Haojen</a> 2021
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
import TopBar from '@/components/TopBar.vue'

export default defineComponent({
    name: 'App',
    components: {
        TopBar
    }
})

</script>
