<template>
    <div class="app">
        <ThemeController>
            <router-view />
        </ThemeController>
    </div>
</template>
<script>
import ThemeController from '@/shared/layouts/ThemeController'
export default {
    name: 'App',
    components: {
        ThemeController,
    },
}
</script>
