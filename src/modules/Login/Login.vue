<template>
  <div class="login">
    <h1>Bienvenido a mi Twitter personal</h1>
    <button class="button is-danger" @click.prevent="requestLogin">
      Iniciar sesión con Google
    </button>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "Login",
  methods: {
    ...mapActions("login", ["requestLogin"]),
  },
};
</script>

<style lang="scss">
.login {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  flex-direction: column;
  min-height: 100vh;

  h1 {
    font-size: 2rem;
  }
}
</style>
