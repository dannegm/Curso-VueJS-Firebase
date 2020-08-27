<template>
  <nav class="navbar">
    <div class="navbar-brand">
      <a class="navbar-burger burger">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div class="navbar-menu">
      <div class="navbar-start">
        <a class="navbar-item" @click="linkTo({ name: 'timeline' })">
          Inicio
        </a>
      </div>
    </div>
    <div class="navbar-end">
      <div class="navbar-item">
        <div class="buttons">
          <Action type="light" :dispatch="requestOut">
            Log out
          </Action>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import Action from "@/shared/components/Action";

export default {
  name: "NavBar",
  components: {
    Action,
  },
  setup() {
    const store = useStore();
    const router = useRouter();

    const requestOut = () => store.dispatch("login/requestOut");
    const linkTo = (route) => router.push(route);

    return {
      requestOut,
      linkTo,
    };
  },
};
</script>
