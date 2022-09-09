<style lang="scss">
* {
    box-sizing: border-box;
}

body {
    background: #111;
}

#app {
    @apply h-screen;

    @apply flex;
    @apply flex-col;
    @apply items-center;

    color: white;

    -webkit-font-smoothing: antialiased;
}
</style>

<template>
    <header class=" container relative z-10 md:px-4 xl:px-20 2xl:px-40 w-full sticky top-0 backdrop-filter backdrop-blur-3xl" style="background: rgb(16 16 16 / 65%)">
        <TopBar/>
    </header>
    <router-view class="container flex-1 px-2 md:px-4 xl:px-20 2xl:px-40" />
    <footer
        class="container px-2 md:px-4 xl:px-20 2xl:px-40 pt-8 pb-20 flex flex-col sm:flex-row justify-between items-center text-gray-400 border-t border-gray-800">
        <div class="mb-2">
            Copyright © {{ new Date().getFullYear() }} <a href="https://github.com/haojen" target="_blank">HAOZHEN MA</a>
        </div>
        <div class="text-sm mb-2">
            <router-link class="px-2 mx-2" to="/">HOME</router-link>
            <router-link to="/privacy">PRIVACY</router-link>
            <router-link class="px-2 mx-2" to="/privacy">ABOUT ME</router-link>
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
