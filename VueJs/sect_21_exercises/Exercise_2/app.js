new Vue({
  el: '#exercise',
  data: {
    value: '',
  },
  methods: {
    alertFunc() {
      alert('HEEEELLLOOWWWW!');
    },
    inputUpdate(e) {
      this.value = e.target.value;
    },
  },
});
