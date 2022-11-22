<style lang="scss" scoped>
main {
    .text-description {
        max-width: 45%;
    }

    @screen sm {
        //.banner {
        //
        //    @apply py-24;
        //}
    }

    .features {
        @apply my-12;

        text-align: center;

        ul li {
            max-width: 360px;
            @apply rounded-3xl;
            @apply px-4;

            h3 {
                @apply mt-10 mb-4;
                @apply text-2xl;
            }

            img {
                @apply rounded-2xl;
                @apply mt-5;
            }
        }

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
    <main class="flex flex-col relative">
        <img class="absolute left-0 top-0 z-0 w-full filter blur-3xl border border-red-500" src="../../public/assets/background-dark.jpg" alt="">
        <article class="flex flex-col justify-center items-center p-4 relative">
            <img src="../../public/assets/logo-256.png" alt="" style="width: 120px; margin-top: 12%;">
            <h2 class="text-3xl font-bold my-2">Vimkey</h2>
            <p class="text-2xl sm:w-8/12 text-center mt-3 mb-4 " style="text-shadow: 0 0 15px black">
                <span class="font-bold ">Use the keyboard to control browser, navigation, scroll, open new page, trigger click button etc.</span>
                <span class="text-gray-300 font-semibold"> reduce your reliance on the mouse & trackpad.</span>
            </p>
            <section class="mt-10 text-center">
                <div class="flex flex-wrap justify-center items-center">
                    <a class="mx-3 my-3 sm:my-0"  href="itms-apps://itunes.apple.com/app/id1585682577">
                        <img src="../../public/assets/Download_on_the_App_Store_Badge_US-UK_RGB_blk_092917.svg" style="height: 44px">
                    </a>
                    <a
                        class="flex items-center border border-gray-400 rounded-lg backdrop-filter backdrop-blur-3xl px-2 bg-black"
                        style="padding-top: 3px; padding-bottom: 3px;"
                        href="https://chrome.google.com/webstore/detail/vimkey/eeeandejdamjifbgmmmmonggidbccnnj"
                    >
                        <img src="../../public/assets/chrome-icon.svg" style="height: 32px">
                        <div class="flex flex-col text-left ml-1">
                            <p class="text-xs -mb-1">Download on the</p>
                            <p class="font-semibold">Chrome Web Store</p>
                        </div>
                    </a>
                </div>
                <footer class="text-gray-400 mt-1.5">
                    More browser support coming soon..
                </footer>
            </section>
        </article>
        <article class="relative z-10 my-4 p-6">
            <img src="../../public/assets/Vimkey-macOS-store-f.png" alt="" class="rounded-3xl">
        </article>
        <article class="features">
            <h3 class="font-bold text-xl mb-8 pb-4 text-3xl border-b border-gray-800 text-center">Introduce</h3>
            <ul class="flex justify-center items-center flex-col lg:flex-row lg:items-stretch">

                <li class="flex flex-1 flex-col justify-between items-center bg-blue-500 py-4 px-2">
                    <div>
                        <h3 class="text-xl font-bold">Features</h3>
                        <ul class="mt-2 text-black font-semibold">
                            <li>Trigger button or open new link</li>
                            <li>Navigation, switch tab</li>
                            <li>Quick scroll, custom steps</li>
                            <li>Media Control</li>
                            <li>Search & Open URLs</li>
                        </ul>
                    </div>
                    <img src="../../public/assets/Vimkey-macOS-store-grid.png">
                </li>
                <li class="flex flex-1 flex-col justify-between items-center bg-white py-4 px-2 text-black my-4 lg:my-0 lg:mx-6">
                    <div>
                        <h3 class="text-xl font-bold">Beautiful Interface</h3>
                        <ul class="mt-2 font-bold text-black">
                            <li>Cool Animation.</li>
                            <li>Simple and intuitive user interface.</li>
                            <li>Friendly new guide to help you get started with Vimkey quickly.</li>
                        </ul>
                    </div>
                    <img src="../../public/assets/Vimkey-macOS-store-search&open.png">
                </li>
                <li class="flex flex-1 flex-col justify-between items-center bg-purple-500 py-4 px-2">
                    <div class="text-center mb-2">
                        <h3 class="text-xl font-bold">Friendly Settings</h3>
                        <ul class="mt-2 font-bold font-semibold">
                            <li>Custom key binding.</li>
                            <li>Custom rules to disable Vimkey.</li>
                            <li>Smooth scrolling optimized for 120Mhz/ProMotion high rate screen.</li>
                            <li>Support export & import config.</li>
                            <li>Accessibility friendly.</li>
                        </ul>
                    </div>
                    <img src="../../public/assets/Vimkey-macOS-store-setting.jpg" alt="">
                </li>
            </ul>
        </article>
    </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({ name: 'Home' })

/**
 *  Remove Shader effect.
 *  const canvasEl = ref<HTMLCanvasElement>()
 *
 *         let shadertoyInstance: ShadertoyTransform
 *
 *         onMounted(() => {
 *             shadertoyInstance = new ShadertoyTransform({
 *                 canvas: canvasEl.value!,
 *                 contextAttributes: {},
 *                 devicePixelRatio: window.devicePixelRatio * 0.8,
 *                 precision: 'lowp',
 *                 fs: fragmentShaderSource,
 *                 vs: vertexShaderSource,
 *             })
 *
 *             shadertoyInstance.componentDidMount()
 *         })
 *
 *         onUnmounted(() => {
 *             shadertoyInstance.componentWillUnmount()
 *         })
 */
</script>
