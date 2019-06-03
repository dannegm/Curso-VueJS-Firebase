<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">

    <div class="typer">
      <h1>Type your <em>Hello</em> message:</h1>
      <input v-model="helloMessage" />
    </div>

    <HelloWorld :msg="helloMessage"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  },
  data () {
    return {
      helloMessage: 'Welcome to Your Vue.js App',
    }
  }
}
</script>
