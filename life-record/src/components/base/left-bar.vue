<template>
  <div class="left-bar">
    <a class="logo">
      <img src="@/assets/imgs/logo.png" />
    </a>

    <ul class="left-bar__list">
      <li
        v-for="(item, index) in LeftBarList"
        :key="index"
        :class="['f f-ai-c f-d-c', { active: item.active }]"
        @click="gotoPage(item)"
      >
        <span
          :class="['icon', item.className]"
          :style="{ backgroundImage: `url(${item.active ? item.imgUrlActive : item.imgUrl})` }"
        />
        {{ item.title }}
      </li>
    </ul>
  </div>
</template>

<script>
  import { reactive } from 'vue'
  import { useRouter } from 'vue-router'
  import { leftBarArr } from '@/common/config.js'
  export default {
    name: 'LeftBar',

    setup() {
      const _$router = useRouter()

      const LeftBarList = reactive(leftBarArr)

      const handleActive = (url, lastActiveIndex) => {
        LeftBarList.forEach((item, index) => {
          if (url === item.url) {
            item.active = true
          } else {
            if (lastActiveIndex !== index) {
              item.active = false
            }
          }
        })
      }
      const gotoPage = ({ url }) => {
        handleActive(url)
        _$router.push({
          path: url
        })
      }

      return {
        LeftBarList,
        gotoPage
      }
    }
  }
</script>

<style lang="less" scoped>
  .left-bar {
    padding: 20px;
    box-shadow: 3px 0px 6px rgb(0 0 0 / 5%);
    background-color: #fff;
    border-color: rgba(151, 151, 151, 0.3);
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    z-index: 1030;
    width: 200px;
    height: auto;
    box-sizing: border-box;
    overflow-y: auto;

    .logo {
      display: block;
      padding: 20px 0;
    }

    &__list {
      margin: 20px 0 50px 0;
      li.active {
        color: #7d521a;
      }

      & > li {
        text-align: center;
        padding: 10px 20px;
        color: #858585;
        font-size: 14px;
        letter-spacing: 2px;
        margin-bottom: 25px;
        cursor: pointer;

        &:last-child {
          margin-bottom: 0;
        }

        &:hover {
          color: #7d521a;
        }
        &:hover .book {
          background-image: url(@/assets/imgs/book-active.png) !important;
        }
        &:hover .remark {
          background-image: url(@/assets/imgs/remark-active.png) !important;
        }
        &:hover .life {
          background-image: url(@/assets/imgs/life-active.png) !important;
        }
        &:hover .music {
          background-image: url(@/assets/imgs/music-active.png) !important;
        }
      }

      .icon {
        background-repeat: no-repeat;
        width: 28px;
        height: 28px;
        background-size: 100%;
        display: block;
        margin: 6px 0;
      }
    }
  }
</style>
