<template>
    <div>
        <Refresh v-model:loading="isLoading" @loosen="loosen" @ok="ok">
            <div class="content" >
                123213
                <div style="height: 50%;background: #67C23A;"></div>
                <div style="height: 50%;background: #E6A23C;"></div>
            </div>
        </Refresh>
    </div>
</template>

<script lang="ts">
import Refresh from '@/packages/refresh'
import {
    defineComponent,
    reactive,
    ref
} from 'vue'

export default defineComponent({
    components: {
        Refresh
    },
    setup() {
        const isLoading = ref(false)

        const queryData = () => {
            setTimeout(() => {
                isLoading.value = false
            }, 1000)
        }

        const loosen = () => {
            console.log('loosen')
            queryData()
        }
        const ok = () => {
            alert('刷新完成')
        }
        return {
            isLoading,
            loosen,
            ok
        }
    },
})
</script>

<style lang="less" scoped>
.content {
    height: 2400px;
}
</style>