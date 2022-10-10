import Vue from "vue";
import Router from "vue-router";
import Home from "@/views/Home";
import About from "@/views/About";
import Error from "@/views/Error";
import CoinDetail from "@/views/CoinDetail";

//! Configurando las rutas

Vue.use(Router);

export default new Router({
  mode: "history",

  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/about",
      name: "about",
      component: About,
    },

    {
      path: "/coin/:id",
      name: "coin-detail",
      component: CoinDetail,
    },
    //URL que no existe
    {
      path: "*",
      name: "Error",
      component: Error,
    },
  ],
});
