<template>
  <div class="page-header f f-jc-sb">
    <div class="left-header f f-ai-c">
      <img :src="currentPageInfo.imgUrlActive" class="header-img" />
      {{ currentPageInfo.title }}
    </div>
    <div class="right-header f f-jc-fe">
      <div v-if="search" class="input-box">
        <input v-model="searchKey" type="text" class="input-inner" placeholder="搜索..." />
        <img src="@/assets/imgs/search.svg" class="search-icon" />
      </div>
    </div>
  </div>
</template>

<script>
  import { leftBarArr } from '@/common/config.js'
  import { useRoute } from 'vue-router'
  import { reactive, ref, toRefs } from 'vue'
  export default {
    props: {
      search: {
        type: Boolean,
        default: true
      }
    },
    setup(props) {
      const { path } = useRoute()
      const currentPageUrl = /\/([\w-]+)\//.exec(path)
      let currentPageInfo = reactive(leftBarArr.find((item) => item.name === currentPageUrl[1]))

      const searchKey = ref('')
      return {
        currentPageInfo,
        searchKey,
        ...toRefs(props)
      }
    }
  }
</script>

<style lang="less" scoped>
  .page-header {
    .left-header {
      font-size: 30px;
      font-weight: 300;
      color: #7d521a;
      width: 50%;
    }
    .header-img {
      width: 28px;
      height: 28px;
      margin-right: 10px;
    }

    .right-header {
      flex: 1;
    }

    .input-box {
      width: 50%;
      max-width: 328px;
      position: relative;
    }

    .input-inner {
      border-radius: 60px;
      padding-left: 20px;
      padding-right: 60px;
      border: 1px solid #b58c58;
      color: #b58c58;
      height: 42px;
      background-color: #fffcf8;
      width: 100%;
      box-sizing: border-box;

      &::placeholder {
        color: #ecdac2;
      }
    }
    .search-icon {
      width: 20px;
      height: 20px;
      position: absolute;
      right: 0px;
      top: 0;
      padding: 11px 20px;
      cursor: pointer;
    }
  }
</style>
