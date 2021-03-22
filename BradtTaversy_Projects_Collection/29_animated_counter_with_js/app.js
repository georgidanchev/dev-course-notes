const counters = document.querySelectorAll('.counter');
const speed = 250;

counters.forEach(counter => {
  const updateCount = () => {
    // convert string to number by adding plus sign
    const target = +counter.getAttribute('data-target');

    // get current text and convert to number
    const count = +counter.innerText;

    // divide target number by speed
    const inc = target / speed;

    // if count is smaller then target number
    if(count < target) {
      // add counter plus increment
      counter.innerText = Math.ceil(count + inc);

      // wait 1 millisecond and call back
      setTimeout(updateCount, 1);
    } else {
      // update counter html text
      count.innerText = target;
    }
  }

  updateCount();
});