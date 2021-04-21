<template>
  <div class="theme-provider" :class="darkModeClass">
    <slot />
  </div>
</template>

<script>
export default {
  name: "ThemeProvider",
  props: {
    isDark: {
      type: Boolean,
      default: false,
    },
  },

  computed: {
    darkModeClass() {
      return {
        "theme-provider--darkmode": this.isDark,
      };
    },
  },
};
</script>

<style lang="scss" scoped>
.theme-provider {
  background: white;
  color: black;
  min-height: 100vh;
  overflow: hidden;

  &--darkmode {
    background: black;
    color: white;
  }
}
</style>
