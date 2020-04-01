import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/info",
    name: "info",
    component: () =>
      import( "../views/info.vue")
  },
  {
    path: "/myinfo",
    name: "myinfo",
    component: Home
  },
  {
    path:"/signup",
    name: "signup",
    component: ()=>
       import("../views/signup.vue")
  },
  {
    path:"/signin",
    name: "signin",
    component: ()=>
       import("../views/login.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
