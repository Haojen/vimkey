<style lang="scss" scoped>
 main {
   //color: #fff;
   .banner {
     background: url("../assets/guy-working-at-home-2127164-0.svg") no-repeat;
     //background-size: 100% 100%;
     background-position: right bottom;
   }

   .text-description {
     @apply py-6;
     @apply pr-16;
     @apply text-lg;

     width: 600px;
     text-shadow: 0 0 2px rgba(255, 255, 255, 1);
   }
 }
</style>

<template>
  <main class="flex flex-col">
    <header class="flex justify-between items-center border-b">
      <aside class="flex items-center">
        <img alt="Vue logo" src="../assets/logo.png" style="width: 55px">
        <span>Vimkey</span>
      </aside>
      <aside class="font-bold flex items-center">
        <router-link class="px-2" to="/privacy">FAQ</router-link>
        <router-link class="px-2" to="/privacy">CONTACT</router-link>
        <router-link class="px-2 flex items-center" to="/privacy">
          <svg width="17" height="17" t="1632301313575" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4005"><path d="M913.408 368.64v-2.048c-62.0544-164.0448-217.856-278.5792-400.384-278.5792a427.1616 427.1616 0 0 0-399.36 275.6608l-1.024 2.9184v2.048a413.184 413.184 0 0 0-25.1904 143.36c0 51.4048 9.216 100.7104 26.112 146.2784L112.64 655.36v2.048c62.1056 164.0448 217.856 278.5792 400.384 278.5792a427.1616 427.1616 0 0 0 399.4112-275.6096l1.024-2.9696v-2.048a413.184 413.184 0 0 0 25.1392-143.36c0-51.4048-9.216-100.7104-26.112-146.2784l0.9728 2.9184z m-732.16 228.352A326.5024 326.5024 0 0 1 170.24 512c0-30.208 3.9936-59.4944 11.5712-87.3472l-0.5632 2.3552H261.12a720.128 720.128 0 0 0 0.3584 173.4656L261.12 596.992H181.248z m35.84 86.016H276.48c11.264 41.7792 25.9584 78.1824 44.3392 112.3328l-1.3312-2.7648a343.6544 343.6544 0 0 1-101.5296-108.032l-0.8704-1.536zM276.48 340.992H217.088a344.5248 344.5248 0 0 1 99.2768-108.8512L317.44 231.424a500.3776 500.3776 0 0 0-40.192 105.984l-0.768 3.584z m192.512 499.712a270.848 270.848 0 0 1-103.0656-155.8528l-0.3584-1.8432h103.424v157.696z m0-243.712H347.136a617.9328 617.9328 0 0 1 0.3584-173.2608l-0.3584 3.2768h121.856v169.984z m0-256H365.568a271.2576 271.2576 0 0 1 102.7072-157.184l0.7168-0.512v157.696z m337.92 0H747.52a515.328 515.328 0 0 0-44.3392-112.3328l1.3312 2.7648a343.6544 343.6544 0 0 1 101.5296 108.032l0.8704 1.536z m-251.904-157.696a270.848 270.848 0 0 1 103.0656 155.8528l0.3584 1.8432h-103.424V183.296z m0 657.408v-157.696h103.424a271.2576 271.2576 0 0 1-102.7072 157.184l-0.7168 0.512z m121.856-243.712h-121.856V427.008h121.856a617.9328 617.9328 0 0 1-0.4096 173.2608l0.4096-3.2768z m29.696 195.584a501.3504 501.3504 0 0 0 41.1648-105.984l0.8192-3.584h60.416a343.9616 343.9616 0 0 1-101.2224 108.8512l-1.1776 0.7168z m135.168-195.584H762.88c3.2768-25.1904 5.12-54.272 5.12-83.8656v-1.1776-0.768c0-29.696-1.8432-58.88-5.4784-87.552l0.3584 3.3792h78.848c6.9632 25.4976 11.008 54.784 11.008 84.992 0 30.208-3.9936 59.4944-11.5712 87.3472l0.5632-2.3552z" fill="#000000" p-id="4006"></path></svg>
          <span class="mx-1">LANGUAGE</span>
        </router-link>
      </aside>
    </header>
    <article class="banner flex flex-col justify-center py-24">
      <h2 class="font-bold text-6xl">Vimkey</h2>
      <p class="text-description">
        <span>一个 Safari 浏览器插件，使用键盘控制浏览器跳转、滚动、切换标签页等,支持 macOS 和 iPadOS</span>
        <br>
        <span>
          无任何隐私收集,支持平缓滚动,无障碍友好.
        </span>
      </p>
      <section class="mt-14">
        <button>
          <img src="../assets/Download_on_the_App_Store_Badge_US-UK_RGB_wht_092917.svg" alt="">
        </button>
        <button class="ml-6">
          <img src="../assets/Download_on_the_Mac_App_Store_Badge_US-UK_RGB_wht_092917.svg" alt="">
        </button>
      </section>
    </article>
    <article class="my-12">
      <h3 class="font-bold text-xl pb-2">Features</h3>
      <ul class="flex" style="height: 200px">
        <li class="flex-1 border-2 rounded-xl p-4 flex flex-col justify-center items-center">
          <svg width="60" height="60" t="1632275868771" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="65057"><path d="M817.856928 588.065391c-17.563826 21.303652-58.494145 88.160464-73.638957 135.286725s-42.570203 92.605217-67.969855 146.558145-100.433623 119.54829-192.578783 124.022725-219.90029-10.388406-277.51884-78.914783-56.869101-150.201507-56.639073-197.298087c0.192928-40.811594 0.051942-133.565217 0-157.629217V249.84858a39.646609 39.646609 0 0 1 79.300638 0V532.99942a399.10771 399.10771 0 0 1 45.31571-16.881159V108.922435a45.31571 45.31571 0 0 1 90.624 0V498.643478a462.729275 462.729275 0 0 1 39.646609-1.81055V75.100754a45.31571 45.31571 0 0 1 90.624 0v430.013217c16.465623 3.027478 33.495188 7.056696 50.977391 12.050551V120.208696a45.31571 45.31571 0 0 1 90.624 0v452.222145c20.309333 15.293217 33.984928 26.913391 33.984928 26.913391s38.103188-81.022145 96.293101-118.375884 76.243478-35.090551 101.954783-5.63942-33.443246 91.432812-50.999652 112.736463z" p-id="65058"></path></svg>
          <p class="pt-3">
            无任何隐私收集
          </p>
          <p>
            要求的权限只为提供相应的功能
          </p>
          <p>
            可自定义页面启用规则
          </p>
        </li>
        <li class="flex-1 border-2 rounded-xl p-4 mx-4 flex flex-col justify-center items-center">
          <svg width="60" height="60" t="1632276258398" class="icon" viewBox="0 0 1280 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="70335"><path d="M1256.82 522.14L1226 513.26a31.76 31.76 0 0 0-39.1 20.32C1145.7 659.52 1023.28 864 928 864c-104.18 0-174.82-187.54-243.06-368.9C605.12 283.16 522.62 64 352 64 174.3 64 35.54 356.92 1.56 461.38a32 32 0 0 0 21.62 40.46L54 510.72a31.74 31.74 0 0 0 39.1-20.3C134.3 364.48 256.72 160 352 160c104.18 0 174.82 187.54 243.06 368.9C674.88 740.84 757.38 960 928 960c177.7 0 316.46-292.92 350.44-397.4a32 32 0 0 0-21.62-40.46z" p-id="70336"></path></svg>
          <p class="pt-3">
            平滑滚动
          </p>
          <p>
            类似原生般的丝滑滚动
          </p>
          <p>
            提供精细的滚动速度调整设置
          </p>
        </li>
        <li class="flex-1 border-2 rounded-xl p-4 flex flex-col justify-center items-center">
          <svg width="60" height="60" t="1632276087674" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="65341"><path d="M512 224a112 112 0 1 1 112-112 112.12 112.12 0 0 1-112 112z" p-id="65342"></path><path d="M864 225.6l-0.9 0.24-0.84 0.26c-2 0.56-4 1.16-6 1.78-37.22 10.92-217.86 61.84-345.12 61.84-118.26 0-282.56-44-335.12-58.94a147.58 147.58 0 0 0-16-5.16c-38-10-64 28.6-64 63.88 0 34.94 31.4 51.58 63.1 63.52v0.56l190.44 59.48c19.46 7.46 24.66 15.08 27.2 21.68 8.26 21.18 1.66 63.12-0.68 77.76l-11.6 90-64.38 352.38q-0.3 1.44-0.54 2.94l-0.46 2.54c-4.64 32.3 19.08 63.64 64 63.64 39.2 0 56.5-27.06 64-63.88s56-315.14 84-315.14 85.68 315.14 85.68 315.14c7.5 36.82 24.8 63.88 64 63.88 45.04 0 68.76-31.48 64-63.88a114.34 114.34 0 0 0-1.52-8.12L658 602.54l-11.58-90c-8.38-52.42-1.64-69.74 0.64-73.8a2.18 2.18 0 0 0 0.16-0.3c2.16-4 12-12.96 34.96-21.58l178.56-62.42a33.8 33.8 0 0 0 3.24-1.04c32-12 64-28.6 64-63.86S902 215.62 864 225.6z" p-id="65343"></path></svg>
          <p class="pt-3">无障碍友好</p>
          <p>
            语音播报每一步的操作
          </p>
          <p>
            降低页面背景干扰
          </p>
        </li>
      </ul>
    </article>
<!--    <footer class="flex-1 flex flex-col justify-center items-center text-gray-800" style="min-height: 100px;">-->
<!--      <div class="mb-0.5">-->
<!--        Vimkey Copyright © <a href="https://github.com/haojen" target="_blank">Haojen</a> 2021-->
<!--      </div>-->
<!--      <div class="text-sm">-->
<!--        <a href="https://iconscout.com/illustrations/guy" target="_blank">Guy working at home Illustration </a>-->
<!--        <span class="mx-1">by</span>-->
<!--        <a href="https://iconscout.com/contributors/iconscout" target="_blank">Iconscout Store</a>-->
<!--      </div>-->
<!--    </footer>-->
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
// import HelloWorld from '@/components/HelloWorld.vue' // @ is an alias to /src

export default defineComponent({
    name: 'Home',
    components: {
    }
})
</script>
