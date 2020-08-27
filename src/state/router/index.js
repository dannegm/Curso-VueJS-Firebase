import { createRouter, createWebHistory } from "vue-router";

import { Routes } from "@/modules/config";

export default createRouter({
  history: createWebHistory(),
  routes: [...Routes],
});
