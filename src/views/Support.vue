<style lang="scss" scoped>
    .markdown::v-deep {
        * {
            all: revert;
        }
    }
</style>
<template>
  <main class="flex-1">
      <VueMarkdown class="markdown " :source="readme"/>
  </main>
</template>

<script lang="js"> // Because vue3-markdown-it is not support TS yet, so we only can use js lang
import { defineComponent } from 'vue'
import VueMarkdown from 'vue3-markdown-it'
import readme from '../../README.md'

/*
* 1。解释个别网站按键冲突的问题
* 2。 建议用户关闭预加载
* */
export default defineComponent({
    name: 'Support',
    components: {
        VueMarkdown
    },
    setup() {
        return {
            readme
        }
    }
})
</script>
