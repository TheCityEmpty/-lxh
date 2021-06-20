<template>
    <div>
        <div 
            class="refresh"
            :style="`${bodyActive}${touchParams.bodyEnd}`"
            @touchstart="onTouchStart"
            @touchmove="onTuchMove"
            @touchend="onTouchEnd">
            <div class="refresh_header" ref="headerEl">
                <template v-if="handleing">
                    <img
                        class="refresh_header-loading"
                        src="@/assets/imgs/r.svg"
                        :style="iconStyle"
                    >
                </template>
                <template v-else>
                    <span>松开刷新</span>
                    <img
                        class="refresh_header-icon"
                        src="@/assets/imgs/refresh_icon.svg"
                        :style="iconStyle"
                    >
                </template>
            </div>

            <div
                class="refresh_body"
                >
                <slot></slot>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import {
    defineComponent,
    reactive,
    ref,
    computed,
    toRefs,
    watch
} from 'vue'

interface RefreshProps {
    loading: boolean
}

export default defineComponent({
    name: 'refresh',
    emits: ['loosen', 'update:loading', 'ok'],
    props: {
        loading: {
            type: Boolean,
            default: false
        }
    },
    setup(props: RefreshProps, { emit }) {
        const handleing = ref(false)
        const { loading } = toRefs(props)
        const headerEl: any = ref(null)
        const touchParams = reactive({
            // 开始位置
            startX: 0,
            startY: 0,
            // 移动时的位置
            deltaX: 0,
            deltaY: 0,
            // 移动的距离
            offsetX: 0,
            offsetY: 0,
            bodyEnd: ''
        })
        watch(loading, (nVal) => {
            if (!nVal) {
                // 数据加载结束
                setTimeout(() => {
                    touchParams.bodyEnd = 'transform: translate3d(0, 0, 0);transition: all .3s ease-in;';
                }, 300)
                // 所有的都结束
                setTimeout(() => {
                    handleing.value = false
                    emit('ok')
                }, 300 + 300)
            }
        })
        const resetTouchStatus = () => {
            touchParams.bodyEnd = ''
            touchParams.startX = 0
            touchParams.startY = 0
            touchParams.deltaX = 0
            touchParams.deltaY = 0
            touchParams.offsetX = 0
            touchParams.offsetY = 0
        }
        const onScroll = (e: any) => {
            console.log(e)
        }
        const getScrollTop = (el: any): number => {
            return 'scrollTop' in el ? el.scrollTop : el.pageYOffset;
        }
        const onTouchStart = (e: any): void => {
            console.log(e)
            if (getScrollTop(e.target) > 0) return
            if (handleing.value) return
            resetTouchStatus()
            touchParams.startX = e.touches[0].clientX
            touchParams.startY = e.touches[0].clientY
        }
        const onTuchMove = (e: any): void => {
            console.log(getScrollTop(e.target))
            if (getScrollTop(e.target) > 0) return
            if (handleing.value) return
            const touch = e.touches[0]
            touchParams.deltaX = touch.clientX - touchParams.startX
            touchParams.deltaY = touch.clientY - touchParams.startY
            touchParams.offsetX = touchParams.deltaX > 0 ? touchParams.deltaX : 0
            touchParams.offsetY = touchParams.deltaY > 0 ? touchParams.deltaY : 0
        }
        const onTouchEnd = (e: any): void => {
            if (getScrollTop(e.target) > 0) return
            if (handleing.value) return
            const h = headerEl.value.clientHeight
            if (touchParams.offsetY >= h) {
                handleing.value = true
                emit('loosen')
                emit('update:loading', true)
                touchParams.bodyEnd = `transform: translate3d(0, ${h}px, 0);transition: all .3s ease-in;`;
                return
            }
            touchParams.bodyEnd = 'transform: translate3d(0, 0, 0);transition: all .3s ease-in;';
        }
        const bodyActive = computed(() => {
            if (headerEl.value) {
                let distance = touchParams.offsetY
                const hh = headerEl.value.clientHeight
                if (distance > hh) {
                    if (distance < hh * 2) {
                        distance = hh + (distance - hh) / 2
                    } else {
                        distance = hh * 1.5 + (distance - hh * 2) / 4
                    }
                }
                 console.log(hh, distance)
                return `transform: translate3d(0, ${distance}px, 0);`
            }
        })
        const iconStyle = computed(() => {
            if (headerEl.value) {
                let deg = (180 / (headerEl.value.clientHeight * 2)) * touchParams.offsetY
                deg = deg >= 180 ? 180 : deg
                return `transform: rotate(${deg}deg);`
            }
        })
        return {
            onTouchStart,
            onTuchMove,
            onTouchEnd,
            onScroll,
            bodyActive,
            iconStyle,
            headerEl,
            touchParams,
            handleing
        }
    },
})
</script>

<style lang="less" scoped>
.refresh {
    position: relative;
    &_header {
        display: flex;
        flex-direction: column;
        align-items: center;
        position: absolute;
        left: 0;
        width: 100%;
        transform: translateY(-100%);
    }
    &_header-icon {
        width: 50px;
    }
    &_header-loading {
        width: 40px;
        margin: 10px 0;
        animation: rotate 1s infinite linear;
    }
}
</style>

<style>
@keyframes rotate {
    0% {
        transform: rotate(0)
    }
    100% {
        transform: rotate(360deg)
    }
}
</style>