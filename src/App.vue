<template>
    <div class="app">
        <ThemeController :is-dark="isDark">
            <div class="hello">
                <h1>Hola mundo :)</h1>
                <button @click="toggleTheme">Alternar tema</button>
            </div>
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
        toggleTheme () {
            this.isDark = !this.isDark
        }
    },
    data () {
        return {
            isDark: false,
        }
    }
}
</script>

<style lang="scss">
.app {
    .hello {
        display: flex;
        height: 100vh;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        h1 {
            font-size: 2em;
            margin: .5em;
        }
        button {
            display: block;
            margin: .5em;
            font-size: 1em;
            padding: .6em 1em;
            outline: 0;
            border: 0;
            border-radius: 2em;
            cursor: pointer;
        }
    }
}
</style>
