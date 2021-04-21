<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <slot name="brand" />

      <a
        role="button"
        class="navbar-burger"
        aria-label="menu"
        aria-expanded="false"
        data-target="navbar"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div id="navbar" class="navbar-menu">
      <div class="navbar-start">
        <template v-for="item in routes" :key="item.name">
          <a :href="item.path" class="navbar-item">
            {{ item.display }}
          </a>
        </template>
      </div>

      <div class="navbar-end">
        <div class="navbar-item">
          <div class="buttons">
            <a class="button is-light" @click="onLogin"> Log in </a>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
  props: {
    routes: {
      type: Array,
      default() {
        return [];
      },
      validator(value) {
        const requiredKeys = ["name", "display", "path"];
        const validated = value.every((item) => {
          const keys = Object.keys(item);
          const exists = requiredKeys.every((key) => keys.includes(key));
          return exists;
        });
        return validated;
      },
    },
  },
  methods: {
    onLogin() {
      this.$emit("login");
    },
  },
};
</script>
