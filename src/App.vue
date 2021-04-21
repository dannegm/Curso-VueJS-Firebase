<template>
  <div class="app">
    <ThemeProvider :is-dark="isDarkMode">
      <router-view></router-view>
      <button @click="toggleDarkMode">{{ computedButtonLabel }}</button>
    </ThemeProvider>
  </div>
</template>
<script>
import ThemeProvider from "@/shared/layout/ThemeProvider";
export default {
  name: "App",
  components: {
    ThemeProvider,
  },
  data() {
    return {
      isDarkMode: false,
    };
  },
  computed: {
    computedButtonLabel() {
      return this.isDarkMode ? "Desactivar Dark Mode" : "Activar Dark Mode";
    },
  },
  methods: {
    toggleDarkMode() {
      this.isDarkMode = !this.isDarkMode;
    },
  },
};
</script>
