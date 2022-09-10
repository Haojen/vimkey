<template>
    <main class="hidden sm:flex flex justify-between items-center py-4">
        <router-link to="/" class="flex items-center">
            <strong class="text-4xl font-serif tracking-tighter" style="color: #d00;">Vimkey</strong>
        </router-link>
        <aside class="font-bold flex items-center">
            <router-link class="mx-2" to="/">Home</router-link>
            <router-link class="mx-2" to="/support">Document</router-link>
            <router-link class="mx-2" to="/privacy">Changelog</router-link>
            <a class="mx-2" href="https://github.com/Haojen/vimkey" target="_blank">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M12 2C6.475 2 2 6.475 2 12a9.994 9.994 0 0 0 6.838 9.488c.5.087.687-.213.687-.476 0-.237-.013-1.024-.013-1.862-2.512.463-3.162-.612-3.362-1.175-.113-.288-.6-1.175-1.025-1.413-.35-.187-.85-.65-.013-.662.788-.013 1.35.725 1.538 1.025.9 1.512 2.338 1.087 2.912.825.088-.65.35-1.087.638-1.337-2.225-.25-4.55-1.113-4.55-4.938 0-1.088.387-1.987 1.025-2.688-.1-.25-.45-1.275.1-2.65 0 0 .837-.262 2.75 1.026a9.28 9.28 0 0 1 2.5-.338c.85 0 1.7.112 2.5.337 1.912-1.3 2.75-1.024 2.75-1.024.55 1.375.2 2.4.1 2.65.637.7 1.025 1.587 1.025 2.687 0 3.838-2.337 4.688-4.562 4.938.362.312.675.912.675 1.85 0 1.337-.013 2.412-.013 2.75 0 .262.188.574.688.474A10.016 10.016 0 0 0 22 12c0-5.525-4.475-10-10-10z" fill="rgba(255,255,255,1)"/></svg>
            </a>
        </aside>
    </main>
    <main class="flex justify-between items-center sm:hidden p-2 relative">
        <router-link to="/" class="flex items-center">
            <strong class="text-2xl" style="color: #d00;font-family: serif;">Vimkey</strong>
        </router-link>
        <aside class="font-bold text-sm" @click="onToggleMobileMenu = !onToggleMobileMenu">
            <svg width="24" height="24" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.94971 11.9497H39.9497" stroke="#fff" stroke-width="3" stroke-linecap="round" stroke-linejoin="miter"/><path d="M7.94971 23.9497H39.9497" stroke="#fff" stroke-width="3" stroke-linecap="round" stroke-linejoin="miter"/><path d="M7.94971 35.9497H39.9497" stroke="#fff" stroke-width="3" stroke-linecap="round" stroke-linejoin="miter"/></svg>
        </aside>
        <article class="absolute left-0 w-full bg-black flex flex-col p-2.5" style="top: 100%" v-if="onToggleMobileMenu">
            <router-link class="py-2 " to="/" @click="onToggleMobileMenu = false">Home</router-link>
            <router-link class="py-2" to="/support" @click="onToggleMobileMenu = false">Document</router-link>
            <router-link class="py-2" to="/privacy" @click="onToggleMobileMenu = false">Changelog</router-link>
            <a class="py-2" href="https://github.com/Haojen/vimkey" target="_blank" @click="onToggleMobileMenu = false">
                Github
            </a>
        </article>
    </main>
</template>
<script lang="ts" setup>
import { ref } from 'vue'

const onToggleMobileMenu = ref(false)

</script>
