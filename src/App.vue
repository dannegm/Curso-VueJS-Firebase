<template>
    <div class="app">
        <ThemeController :is-dark="true">
            <NavBar />
            <router-view />
        </ThemeController>
    </div>
</template>
<script>
import ThemeController from '@/shared/layouts/ThemeController'
import NavBar from '@/shared/layouts/NavBar'
export default {
    name: 'App',
    components: {
        ThemeController,
        NavBar,
    },
}
</script>
