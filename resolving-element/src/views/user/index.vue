<template>
    <div class="user">
        用户页面 {{ aa }}啊实打实大
        <Test>{{aa}}</Test>

        <button @click="goto">goto config</button>
    </div>
</template>

<script lang="jsx">
export default {
    components: {
        Test: {
            render () {
                const $that = this._self;
                const $slotText = $that.$slots.default[0].text;
                return <div>asdasd{$slotText}asdasd</div>
            }
        }
    },
    data () {
        return {
            aa: 111
        }
    },

    created () {
        setTimeout(() => {
          this.aa = 2213123  
        }, 3000);
    },

    methods: {
        goto () {
            this.$router.push('/config')
        }
    }
}
</script>

<style lang="less" scoped>
.user {
    background: red;
}
</style>