import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)
Vue.config.productionTip = false

axios.defaults.baseURL = '/api';
axios.defaults.timeout = 8000;
//请求拦截
axios.interceptors.request.use(function (response) {
  let res = response.data;
  if (res.status === 0) {
    return res.data;
  } else if (res.status === 10) {
    window.location.href = '/#/login';
  } else {
    alert(res.msg);
  }
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
