<template>
    <div class="app">
        <ThemeController>
            <router-view />
        </ThemeController>
    </div>
</template>
<script>
import { mapActions } from 'vuex'
import ThemeController from '@/shared/layouts/ThemeController'
export default {
    name: 'App',
    components: {
        ThemeController,
    },
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
