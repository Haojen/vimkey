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

.fade-enter-active,
.fade-leave-active{
    transition: opacity .18s ease-in;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>

<template>
    <transition name="fade">
        <router-view class="container flex-1 px-2 md:px-4 xl:px-20 2xl:px-40" />
    </transition>
    <footer class="container px-2 md:px-4 xl:px-20 2xl:px-40 font-semibold py-10">
        <hr class="border-gray-800 flex-1 mb-6" style="height: 1px; "/>
        <article class="flex-1 flex sm:justify-between flex-wrap justify-center mx-10">
            <div class="text-sm mb-4 flex items-center">
                <router-link class="mx-2 border-b-4 border-transparent" :class="currentPageState === 'Home' && 'border-blue-500'" to="/">HOME</router-link>
                <router-link class="mx-2 border-b-4 border-transparent" :class="currentPageState === 'Privacy' && 'border-blue-500'" to="/privacy">PRIVACY</router-link>
                <router-link class="mx-2 border-b-4 border-transparent" :class="currentPageState === 'Support' && 'border-blue-500'" to="/support">SUPPORT</router-link>
                <a class="mx-2 border-b-4 border-transparent" href="https://github.com/Haojen/vimkey" target="_blank">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M12 2C6.475 2 2 6.475 2 12a9.994 9.994 0 0 0 6.838 9.488c.5.087.687-.213.687-.476 0-.237-.013-1.024-.013-1.862-2.512.463-3.162-.612-3.362-1.175-.113-.288-.6-1.175-1.025-1.413-.35-.187-.85-.65-.013-.662.788-.013 1.35.725 1.538 1.025.9 1.512 2.338 1.087 2.912.825.088-.65.35-1.087.638-1.337-2.225-.25-4.55-1.113-4.55-4.938 0-1.088.387-1.987 1.025-2.688-.1-.25-.45-1.275.1-2.65 0 0 .837-.262 2.75 1.026a9.28 9.28 0 0 1 2.5-.338c.85 0 1.7.112 2.5.337 1.912-1.3 2.75-1.024 2.75-1.024.55 1.375.2 2.4.1 2.65.637.7 1.025 1.587 1.025 2.687 0 3.838-2.337 4.688-4.562 4.938.362.312.675.912.675 1.85 0 1.337-.013 2.412-.013 2.75 0 .262.188.574.688.474A10.016 10.016 0 0 0 22 12c0-5.525-4.475-10-10-10z" fill="rgba(255,255,255,1)"/></svg>
                </a>
            </div>
            <div class="text-xs sm:text-sm text-gray-400">
                Copyright © {{ new Date().getFullYear() }} <a href="https://github.com/haojen" target="_blank">HAOZHEN MA</a>
            </div>
        </article>
    </footer>
</template>
<script lang="ts">
import 'tailwindcss/tailwind.css'
import { defineComponent } from 'vue'
import { currentPageState } from './refs'

export default defineComponent({
    name: 'App',
    setup() {
        return {
            currentPageState
        }
    }
})

</script>
