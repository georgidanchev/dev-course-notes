import Vue from 'vue';
import App from './App.vue';

// bind (el, binding, vnode) -> is called once the directive is attached.
// inserted(el, binding, vnode) -> inserted in Parent Node.
// update(el, binding, vnode) -> once component is Update (without children).
// componentUpdated(el,binding,vnode,oldVnode) -> once component is updated (with children).
// unbind(el, binding, vnode) -> once directive is removed.

// Global Directive
Vue.directive('highlight', {
  bind(el, binding, vnode) {
    // el.style.backgroundColor = 'green';
    // el.style.backgroundColor = binding.value;

    var delay = 0;
    if (binding.modifiers['delayed']) {
      delay = 3000;
    }

    setTimeout(() => {
      if (binding.arg == 'background') {
        el.style.backgroundColor = binding.value;
      } else {
        el.style.color = binding.value;
      }
    }, delay);
  },
});

new Vue({
  el: '#app',
  render: (h) => h(App),
});
