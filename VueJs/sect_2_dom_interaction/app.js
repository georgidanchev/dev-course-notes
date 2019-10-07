new Vue({
  el: '#app',
  data: {
    counter: 0,
    x: 0,
    y: 0,
    name: 'hello',
    secondCounter: 0,
  },
  methods: {
    increase(step, event) {
      this.counter += step;
    },
    decrease(step, event) {
      this.counter -= step;
    },
    updateCoords(event) {
      this.x = event.clientX;
      this.y = event.clientY;
    },
    dummy(e) {
      e.stopPropagation();
    },
    alertMe() {
      alert('Alert!');
    },
    result() {
      console.log('method');
      return this.counter > 5 ? 'Greater 5' : 'Smaller 5';
    },
  },
  watch: {
    counter(value) {
      const vm = this;
      setTimeout(() => {
        console.log('yayy');
        vm.counter = 0;
      }, 2000);
    },
  },
  computed: {
    // The code is analysed
    // Gets called only 1
    // Result gets catched
    output() {
      console.log('computed');
      return this.counter > 5 ? 'Greater 5' : 'Smaller 5';
    },
  },
});

new Vue({
  el: '#app2',
  data: {
    attachRed: false,
    color: 'green',
    width: 200,
  },
  computed: {
    divClasses() {
      return {
        red: this.attachRed,
        blue: !this.attachRed,
      };
    },
    myStyle() {
      return {
        backgroundColor: this.color,
        width: `${this.width}px`,
      };
    },
  },
});
