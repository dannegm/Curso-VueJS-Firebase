import { createRouter, createWebHistory } from "vue-router";

import { Routes } from "@/modules";

export default createRouter({
  history: createWebHistory(),
  routes: [...Routes],
});
