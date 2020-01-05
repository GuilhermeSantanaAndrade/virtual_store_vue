import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

Vue.filter("currency", (aValue: Number) => {
  const value = aValue ? aValue : 0;
  return value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
});

export let EventBus = new Vue();

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
