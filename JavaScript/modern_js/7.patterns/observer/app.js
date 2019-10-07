class EventObserver {
  constructor() {
    this.observers = [];
  }

  subscribe(fn) {
    this.observers.push(fn);
    console.log(`You are now subscribed to ${fn.name}`);
  }

  unsubscribe(fn) {
    // Filter out from the list whatever matches the
    // callback function. If there is no match, the
    // callback gets to stay on the list. THe filter
    // returns a new list and reassigns the list of
    // observers.
    this.observers = this.observers.filter((item) => {
      if (item !== fn) {
        return item;
      }
      return false;
    });
    console.log(`You are now unsubscribed from ${fn.name}`);
  }

  fire() {
    this.observers.forEach(item => item.call());
  }
}

const click = new EventObserver();

// Click handler
const getCurMilliseconds = function () {
  console.log(`Current Miliseconds: ${new Date().getMilliseconds()}`);
};

// Event Listeners
document.querySelector('.sub-ms').addEventListener('click', () => {
  click.subscribe(getCurMilliseconds);
});

document.querySelector('.unsub-ms').addEventListener('click', () => {
  click.subscribe(getCurMilliseconds);
});

document.querySelector('.fire').addEventListener('click', () => {
  click.fire();
});
