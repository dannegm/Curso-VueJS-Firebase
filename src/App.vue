<template>
  <div class="app">
    <router-view></router-view>
  </div>
</template>
<script>
import { mapActions } from "vuex";
export default {
  name: "App",
  mounted() {
    this.checkLogin();
  },
  methods: {
    ...mapActions("login", ["checkLogin"]),
  },
};
</script>
