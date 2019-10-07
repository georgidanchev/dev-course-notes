new Vue({
  el: '#exercise',
  data: {
    value: 0,
  },
  methods: {},
  computed: {
    result() {
      return this.value >= 37 ? 'done' : 'note done';
    },
  },
  watch: {
    result() {
      const vm = this;
      setTimeout(() => {
        vm.value = 0;
      }, 5000);
    },
  },
});
