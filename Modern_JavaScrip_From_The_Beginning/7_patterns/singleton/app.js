/* eslint-disable no-new-object */

const Singleton = (() => {
  let instance;
  const createInstance = () => {
    const object = new Object({ name: 'Brad' });
    return object;
  };

  return {
    getInstance: () => {
      if (!instance) {
        instance = createInstance();
      }
      return instance;
    },
  };
})();

const instanceA = Singleton.getInstance();
const instanceB = Singleton.getInstance();

console.log(instanceA);
console.log(instanceA === instanceB);
