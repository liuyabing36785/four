import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ElementUI from 'element-ui';
import Vant from "vant"
import axios from "axios"
import 'element-ui/lib/theme-chalk/index.css';
import 'vant/lib/index.css';

Vue.use(ElementUI);
Vue.use(Vant);
Vue.prototype.axios = axios;
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  ElementUI,
  Vant,
  axios,
  render: h => h(App)
}).$mount("#app");
