<style lang="scss" scoped>
    .markdown::v-deep {
        * {
            all: revert;
        }
    }

</style>
<template>
  <main class="flex-1">
      <VueMarkdown class="markdown p-2 mt-20" :source="readme" :html="true"/>
  </main>
</template>

<script lang="js"> // Because vue3-markdown-it is not support TS yet, so we only can use js lang
import { defineComponent } from 'vue'
import readme from '../../DOCUMENT.md'
import VueMarkdown from 'vue3-markdown-it'

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
