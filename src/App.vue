<template>
    <div class="app">
        <ThemeController :is-dark="true">
            <router-link name="{ name: 'timeline' }">Timeline</router-link>
            <router-link name="{ name: 'login' }">Login</router-link>



            <nav class="navbar" role="navigation" aria-label="main navigation">
                <div class="navbar-brand">
                    <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    </a>
                </div>

                <div id="navbarBasicExample" class="navbar-menu">
                    <div class="navbar-start">
                        <a @click="linkTo({ name: 'timeline' })" class="navbar-item">
                            Timeline
                        </a>
                        <a @click="linkTo({ name: 'login' })" class="navbar-item">
                            Login
                        </a>
                    </div>
                </div>
            </nav>



            <router-view />
        </ThemeController>
    </div>
</template>
<script>
import ThemeController from '@/shared/layouts/ThemeController'
export default {
    name: 'App',
    components: {
        ThemeController
    },
    methods: {
        linkTo (route) {
            this.$router.push(route)
        },
        toggleTheme () {
            this.isDark = !this.isDark
        }
    },
}
</script>

<style lang="scss">
.app {
}
</style>
