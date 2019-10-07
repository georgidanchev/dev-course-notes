new Vue({
  el: '#exercise',
  data: {
    effectClasses: {
      highlight: false,
      shrink: true,
    },
    float: 'float',
    userClass: '',
    isVisible: true,
    myStyle: {
      width: '100px',
      height: '150px',
      backgroundColor: 'gray',
    },
    progressBar: {
      width: '0px',
      backgroundColor: 'red',
    },
  },
  methods: {
    startEffect() {
      const vm = this;
      setInterval(() => {
        vm.effectClasses.highlight = !vm.effectClasses.highlight;
        vm.effectClasses.shrink = !vm.effectClasses.shrink;
      }, 500);
    },
    startProgress() {
      const vm = this;
      let width = 0;
      setInterval(() => {
        width = width + 10;
        vm.progressBar.width = width + 'px';

        if (width > 100) {
          width = 0;
        }
      }, 500);
    },
  },
});
