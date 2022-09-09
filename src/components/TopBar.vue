<template>
    <main class="hidden sm:flex justify-between items-center py-4">
        <router-link to="/" class="flex items-center">
            <strong class="text-4xl" style="color: #d00;font-family: serif;">Vimkey</strong>
        </router-link>
        <aside class="font-bold flex items-center">
            <router-link class="px-2 mx-2" to="/support">DOCUMENT</router-link>
<!--            <router-link class="px-2 mx-2" to="/privacy">CHANGELOG</router-link>-->
            <a class="px-2 mx-2" href="https://github.com/Haojen/vimkey" target="_blank">GITHUB</a>
            <button class="mx-2 px-4 py-2.5 border rounded-lg font-bold text-gray-900 bg-gray-100">DOWNLOAD</button>
        </aside>
    </main>
    <main class="flex justify-between items-center border-b sm:hidden p-1">
        <router-link to="/" class="flex items-center">
            <img alt="Vue logo" src="../assets/logo.png" style="width: 50px">
        </router-link>
        <aside class="font-bold text-sm">
            <router-link class="pr-2" to="/support">SUPPORT</router-link>
            <router-link to="/privacy">PRIVACY</router-link>
        </aside>
    </main>
</template>
