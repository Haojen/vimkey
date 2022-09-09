<template>
    <main class="hidden sm:flex justify-between items-center py-4">
        <router-link to="/" class="flex items-center">
            <strong class="text-4xl" style="color: #d00;font-family: serif;">Vimkey</strong>
        </router-link>
        <aside class="font-bold flex items-center">
            <router-link class="px-2 mx-2" to="/">HOME</router-link>
            <router-link class="px-2 mx-2" to="/support">DOCUMENT</router-link>
<!--            <router-link class="px-2 mx-2" to="/privacy">CHANGELOG</router-link>-->
            <a class="px-2 mx-2" href="https://github.com/Haojen/vimkey" target="_blank">GITHUB</a>
            <button class="mx-2 px-2.5 py-1.5 flex border rounded-lg text-gray-900 bg-gray-100">
                <span class="mr-1 font-bold">DOWNLOAD</span>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M12 13.172l4.95-4.95 1.414 1.414L12 16 5.636 9.636 7.05 8.222z" fill="gray"/></svg>
            </button>
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
