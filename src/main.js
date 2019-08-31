// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/store'
import BootstrapVue, {BTabs, TabsPlugin} from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
// import 'bootstrap-vue/dist/bootstrap-vue.css'
import {library} from '@fortawesome/fontawesome-svg-core'
import {faCircle, faCircleNotch, faCog, faUserSecret} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'
import {faFacebookF, faInstagram, faTwitter} from '@fortawesome/free-brands-svg-icons'
import carousel from 'vue-owl-carousel'


import {VueTabs} from 'vue-nav-tabs'
import VTab from 'v-tab'
import 'v-tab/dist/v-tab.css'
//you can also import this in your style tag
import 'vue-nav-tabs/themes/vue-tabs.css'
import VueTypedJs from 'vue-typed-js'
import VueTyperPlugin, {VueTyper} from 'vue-typer'
import {IntegerPlusminus} from 'vue-integer-plusminus'
import VueToast from 'vue-toast-notification';
import 'vue-toast-notification/dist/index.css';
import {ApiService} from "./services/api.service";

import { VueperSlides, VueperSlide } from 'vueperslides'

import 'vueperslides/dist/vueperslides.css'
Vue.use(TabsPlugin);

Vue.use(VTab);
Vue.use(BootstrapVue);

Vue.component('b-tabs', BTabs);

Vue.use(VueTypedJs);

Vue.use(VueToast, {
  position: 'top'
});
Vue.component('IntegerPlusminus', IntegerPlusminus);

Vue.use(VueTyperPlugin);

library.add(faUserSecret, faFacebookF, faTwitter, faInstagram, faCircle, faCircleNotch, faCog);
Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.config.productionTip = false;
ApiService.init('http://167.71.249.56/api/v1');

if (store.dispatch('isLoggedIn'))
  ApiService.setHeader(store.getters.GET_AUTH_TOKEN);
else
  store.dispatch('UNSET_USER').then(() => {
  });
export {
  IntegerPlusminus
}

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
    VueperSlides, VueperSlide,
  VueTyper,
  IntegerPlusminus,
  'vue-typer': VueTyper,
  carousel,
  VueTabs,
  VTab,
  store,
  components: {App},
  template: '<App/>'
});
