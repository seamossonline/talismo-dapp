import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    alias: "/home",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/profile-search",
    name: "Profile Search",
    component: () =>
      import(
        /* webpackChunkName: "profile-search" */ "../views/publicViews/ProfileSearchView.vue"
      ),
  },
  {
    path: "/utility-search",
    name: "Utility Search",
    component: () =>
      import(
        /* webpackChunkName: "utility-search" */ "../views/publicViews/UtilitySearchView.vue"
      ),
  },
  {
    path: "/nft-search",
    name: "NFT Search",
    component: () =>
      import(
        /* webpackChunkName: "nft-search" */ "../views/publicViews/NftSearchView.vue"
      ),
  },
  {
    path: "*",
    name: "NotFound",
    component: () =>
      import(/* webpackChunkName: "404" */ "../views/NotFound.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
