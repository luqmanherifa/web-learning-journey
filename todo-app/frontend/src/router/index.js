import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const indexRoutes = [
  {
    path: "/",
    component: () => import("@/views/About.vue"),
    name: "About",
    props: {
      title: "I'm Programmer",
    },
    meta: {
      name: "about page",
    },
  },
];
const router = new VueRouter({
  mode: "history",
  routes: indexRoutes,
});

export default router;
