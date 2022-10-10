import Vue from "vue";
import App from "./App.vue";
import "@/assets/css/tailwind.css"; //Tailwind
import "@/router";
import router from "@/router"; // Router
import { dollarFilter, percentFilter } from "@/filter";
import { VueSpinners } from "@saeris/vue-spinners"; //Spinners
import { Chart } from "chart.js";
import Chartick from "vue-chartkick";

Vue.use(VueSpinners);
Vue.use(Chartick.use(Chart));
Vue.filter("dollar", dollarFilter);
Vue.filter("percent", percentFilter);

Vue.config.productionTip = false;

new Vue({
  router: router, // router config
  render: (h) => h(App),
}).$mount("#app");
