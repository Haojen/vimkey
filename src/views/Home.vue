<style lang="scss" scoped>
main {
    .text-description {
        max-width: 550px;
        text-shadow: 0 0 2px rgba(255, 255, 255, 1);
    }

    @screen sm {
        .banner {
            background: url("../assets/guy-working-at-home-2127164-0.svg") no-repeat;
            background-position: right bottom;

            @apply py-24;
        }
    }

    .features {
        @apply my-12;

        svg {
            filter: drop-shadow(5px 4px 2px rgba(0, 0, 0, 0.1));
        }

        p {
            text-shadow: 0 0 12px rgba(0, 0, 0, 0.4);
        }
    }
}
</style>

<template>
    <main class="flex flex-col">
        <article class="pt-12 banner relative flex flex-col justify-center">
            <h2 class="font-bold text-6xl mb-5">Vimkey</h2>
            <p class="text-description text-xl text-gray-800 font-medium">
                A browser extension, use keyboard control browser jump, scroll, switch tab and more.
            </p>
            <p class="text-description pt-2 text-gray-800 font-mono tracking-tight">Support browser: Chrome, Edge, Safari(macOS & iPadOS)</p>
            <section class="mt-10 flex">
                <a href="itms-apps://itunes.apple.com/app/id1585682577">
                    <img src="../assets/Download_on_the_App_Store_Badge_US-UK_RGB_wht_092917.svg" alt="">
                </a>
                <a href="itms-apps://itunes.apple.com/app/id1585682577" class="ml-6">
                    <img src="../assets/Download_on_the_Mac_App_Store_Badge_US-UK_RGB_wht_092917.svg" alt="">
                </a>
            </section>
            <section class="mt-10 flex">
                <a href="https://chrome.google.com/webstore/detail/vimkey/eeeandejdamjifbgmmmmonggidbccnnj">
                    <img src="../assets/chrome-webstore.svg" class="border bg-white" alt="" style="width: 300px">
                </a>
            </section>
        </article>
        <article class="features">
            <h3 class="font-bold text-xl pb-2">Features</h3>
            <ul class="flex flex-col sm:flex-row text-center">
                <li class="p-4 mb-2 w-full overflow-hidden bg-gradient-to-b from-yellow-400 to-yellow-500 text-white flex-1 border-2 border-yellow-400 shadow rounded-xl flex flex-col justify-center items-center ">
                    <div class="bg-gradient-to-b from-yellow-400 to-yellow-500 shadow rounded-2xl p-2 flex justify-center items-center">
                        <svg fill="#fff" width="50" height="50" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="65057"><path d="M817.856928 588.065391c-17.563826 21.303652-58.494145 88.160464-73.638957 135.286725s-42.570203 92.605217-67.969855 146.558145-100.433623 119.54829-192.578783 124.022725-219.90029-10.388406-277.51884-78.914783-56.869101-150.201507-56.639073-197.298087c0.192928-40.811594 0.051942-133.565217 0-157.629217V249.84858a39.646609 39.646609 0 0 1 79.300638 0V532.99942a399.10771 399.10771 0 0 1 45.31571-16.881159V108.922435a45.31571 45.31571 0 0 1 90.624 0V498.643478a462.729275 462.729275 0 0 1 39.646609-1.81055V75.100754a45.31571 45.31571 0 0 1 90.624 0v430.013217c16.465623 3.027478 33.495188 7.056696 50.977391 12.050551V120.208696a45.31571 45.31571 0 0 1 90.624 0v452.222145c20.309333 15.293217 33.984928 26.913391 33.984928 26.913391s38.103188-81.022145 96.293101-118.375884 76.243478-35.090551 101.954783-5.63942-33.443246 91.432812-50.999652 112.736463z" p-id="65058"></path></svg>
                    </div>
                    <section class="text-center">
                        <p class="pt-3 mb-2">No collect Privacy</p>
                        <p class="text-sm">Requested permissions are only used for the corresponding features</p>
                        <p class="text-sm">Customizable page enable rules</p>
                    </section>
                </li>
                <li class="mb-2 sm:mx-2 w-full overflow-hidden bg-gradient-to-b from-green-400 to-green-500 text-white border-2 border-green-400 shadow flex-1 rounded-xl p-4 flex flex-col justify-center items-center">
                    <div class="bg-gradient-to-b from-green-400 to-green-500 shadow rounded-2xl p-2 flex justify-center items-center">
                        <svg fill="#fff" width="50" height="50" class="icon" viewBox="0 0 1280 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="70335"><path d="M1256.82 522.14L1226 513.26a31.76 31.76 0 0 0-39.1 20.32C1145.7 659.52 1023.28 864 928 864c-104.18 0-174.82-187.54-243.06-368.9C605.12 283.16 522.62 64 352 64 174.3 64 35.54 356.92 1.56 461.38a32 32 0 0 0 21.62 40.46L54 510.72a31.74 31.74 0 0 0 39.1-20.3C134.3 364.48 256.72 160 352 160c104.18 0 174.82 187.54 243.06 368.9C674.88 740.84 757.38 960 928 960c177.7 0 316.46-292.92 350.44-397.4a32 32 0 0 0-21.62-40.46z" p-id="70336"></path></svg>
                    </div>
                    <p class="pt-3 mb-2">Smooth scroll</p>
                    <p class="text-sm">Provide scroll speed adjustment settings</p>
                    <p class="text-sm">Silky smooth scrolling</p>
                </li>
                <li class="mb-2 overflow-hidden bg-gradient-to-b from-blue-400 to-blue-500 text-white flex-1 border-2 border-blue-400 shadow rounded-xl p-4 flex flex-col justify-center items-center">
                    <div class="bg-gradient-to-b from-blue-400 to-blue-500 shadow rounded-2xl p-2 flex justify-center items-center">
                        <svg fill="#fff" width="50" height="50" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="65341"><path d="M512 224a112 112 0 1 1 112-112 112.12 112.12 0 0 1-112 112z" p-id="65342"></path><path d="M864 225.6l-0.9 0.24-0.84 0.26c-2 0.56-4 1.16-6 1.78-37.22 10.92-217.86 61.84-345.12 61.84-118.26 0-282.56-44-335.12-58.94a147.58 147.58 0 0 0-16-5.16c-38-10-64 28.6-64 63.88 0 34.94 31.4 51.58 63.1 63.52v0.56l190.44 59.48c19.46 7.46 24.66 15.08 27.2 21.68 8.26 21.18 1.66 63.12-0.68 77.76l-11.6 90-64.38 352.38q-0.3 1.44-0.54 2.94l-0.46 2.54c-4.64 32.3 19.08 63.64 64 63.64 39.2 0 56.5-27.06 64-63.88s56-315.14 84-315.14 85.68 315.14 85.68 315.14c7.5 36.82 24.8 63.88 64 63.88 45.04 0 68.76-31.48 64-63.88a114.34 114.34 0 0 0-1.52-8.12L658 602.54l-11.58-90c-8.38-52.42-1.64-69.74 0.64-73.8a2.18 2.18 0 0 0 0.16-0.3c2.16-4 12-12.96 34.96-21.58l178.56-62.42a33.8 33.8 0 0 0 3.24-1.04c32-12 64-28.6 64-63.86S902 215.62 864 225.6z" p-id="65343"></path></svg>
                    </div>
                    <p class="pt-3 mb-2">Accessibility</p>
                    <p class="text-sm">Play voice of step of the operation</p>
                    <p class="text-sm">Reduce page background interference</p>
                </li>
            </ul>
        </article>
    </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
// import HelloWorld from '@/components/HelloWorld.vue' // @ is an alias to /src

export default defineComponent({
    name: 'Home',
    components: {
        // TopBar
    }
})
</script>
