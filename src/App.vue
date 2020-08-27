<template>
  <div class="app">
    <router-view />
  </div>
</template>
<script>
import { onMounted, computed, watch } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";

export default {
  name: "App",
  setup() {
    const store = useStore();
    const router = useRouter();

    const isAuth = computed(() => store.state.login.auth.is);

    const handleAuth = () => {
      if (isAuth.value) {
        router.push({ name: "timeline" });
      } else {
        router.push({ name: "login" });
      }
    };

    watch(() => isAuth, handleAuth);

    onMounted(() => {
      store.dispatch("login/checkLogin");
      handleAuth();
    });
  },
};
</script>
<style lang="scss">
body {
  background-color: #fafafa;
}
</style>
