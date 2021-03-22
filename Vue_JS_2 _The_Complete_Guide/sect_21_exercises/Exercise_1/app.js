new Vue({
  el: '#exercise',
  data() {
    return {
      name: 'Georgi',
      age: 24,
      gSrc: 'https://images.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    };
  },
  methods: {
    randNum() {
      return Math.random();
    },
  },
});
