import Vue from "vue";
import VueRouter from "vue-router";
import AddCity from "../views/AddCity.vue";
import Weather from "../views/Weather.vue";
import Admin from "../views/admin.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "AddCity",
    component: AddCity,
  },
  {
    path: "/weather/:city",
    name: "Weather",
    component: Weather,
  },
  {
    path: "/admin",
    name: "Admin",
    component: Admin,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
