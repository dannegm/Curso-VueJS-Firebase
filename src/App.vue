<template>
    <div class="app">
        <router-view />
    </div>
</template>
<script>
import { mapActions } from 'vuex'
export default {
    name: 'App',
    methods: {
        ...mapActions('login', [
            'checkLogin',
        ])
    },
    async mounted () {
        await this.checkLogin ()
    },
}
</script>
<style lang="scss">
body {
    background-color: #fafafa;
}
</style>

