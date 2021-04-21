<template>
  <div class="app">
    <Navbar :routes="routes" @login="onLogin"> </Navbar>

    <ThemeProvider :is-dark="isDarkMode">
      <router-view></router-view>
      <button @click="toggleDarkMode">
        {{ computedButtonLabel }}
      </button>
    </ThemeProvider>
  </div>
</template>
<script>
import Navbar from "@/shared/layout/Navbar";
import ThemeProvider from "@/shared/layout/ThemeProvider";
export default {
  name: "App",
  components: {
    Navbar,
    ThemeProvider,
  },
  data() {
    return {
      isDarkMode: false,
      routes: [
        {
          path: "/",
          display: "Inicio",
          name: "home.root",
        },
        {
          path: "/example",
          display: "Example",
          name: "example.root",
        },
      ],
    };
  },
  computed: {
    computedButtonLabel() {
      return this.isDarkMode ? "Desactivar Dark Mode" : "Activar Dark Mode";
    },
  },
  methods: {
    onLogin() {
      alert("Se ha ejecutado el login");
    },
    toggleDarkMode() {
      this.isDarkMode = !this.isDarkMode;
    },
  },
};
</script>
