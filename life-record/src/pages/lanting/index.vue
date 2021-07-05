<template>
  <div class="lanting">
    <PagesHeader></PagesHeader>
    <Box v-for="(item, index) in list" :key="index"> {{ index }} </Box>
  </div>
</template>

<script>
  import { reactive, h } from 'vue'
  import PagesHeader from '@/components/common/page-header/index.vue'
  export default {
    components: {
      PagesHeader,
      Box: {
        render() {
          return h('div', null, 'ccc')
        }
      }
    },

    setup() {
      return {
        list: reactive([
          {
            title: '阿斯顿',
            desc: 'asdjlasdlasjdlkasjkld',
            date: '2020-10-2'
          },
          {
            title: '阿斯顿',
            desc: 'asdjlasdlasjdlkasjkld',
            date: '2020-10-2'
          },
          {
            title: '阿斯顿',
            desc: 'asdjlasdlasjdlkasjkld',
            date: '2020-10-2'
          },
          {
            title: '阿斯顿',
            desc: 'asdjlasdlasjdlkasjkld',
            date: '2020-10-2'
          },
          {
            title: '阿斯顿',
            desc: 'asdjlasdlasjdlkasjkld',
            date: '2020-10-2'
          },
          {
            title: '阿斯顿',
            desc: 'asdjlasdlasjdlkasjkld',
            date: '2020-10-2'
          }
        ])
      }
    }
  }
</script>
