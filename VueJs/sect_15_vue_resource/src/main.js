import Vue from 'vue';
import VueResource from 'vue-resource';
import App from './App.vue';

Vue.use(VueResource);

Vue.http.options.root = 'https://vuejs-http-ee83a.firebaseio.com/';

// Vue.http.interceptors.push((request, next) => {
//   console.log(request);
//   next((res) => {
//     res.json = () => {
//       return {
//         messages: res.body,
//       };
//     };
//   });
// });

new Vue({
  el: '#app',
  render: (h) => h(App),
});
