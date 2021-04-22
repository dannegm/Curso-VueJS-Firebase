<template>
  <div class="app">
    <Navbar :routes="routes" @login="onLogin" />
    <ThemeProvider :is-dark="isDarkMode">
      <router-view></router-view>
    </ThemeProvider>
  </div>
</template>
<script>
import { mapState, mapActions } from "vuex";

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
    ...mapState({
      isDarkMode: (s) => s.isDark,
    }),

    computedButtonLabel() {
      return this.isDarkMode ? "Desactivar Dark Mode" : "Activar Dark Mode";
    },
  },
  methods: {
    ...mapActions(["toggleDarkMode"]),

    onLogin() {
      alert("Se ha ejecutado el login");
    },
  },
};
</script>
