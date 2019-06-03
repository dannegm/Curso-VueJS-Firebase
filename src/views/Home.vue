<template>
    <div class="home">
        <img alt="Vue logo" src="../assets/logo.png">

        <Typer @input="onInput" />
        <HelloWorld :msg="helloMessage"/>
    </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import Typer from '@/components/Typer.vue'

export default {
    name: 'home',
    components: {
        HelloWorld,
        Typer,
    },
    methods: {
        onInput (value) {
            this.helloMessage = value
        }
    },
    data () {
        return {
            helloMessage: 'Welcome to Your Vue.js App',
        }
    }
}
</script>
