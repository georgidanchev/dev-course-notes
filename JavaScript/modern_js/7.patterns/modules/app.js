/* eslint-disable func-names */

//
// Basic/Standard Module Pattern
//

(function () {
  // declare private variables and functions here.
  return {
    // Declare public var and functions.
  };
}());

// This is the standard modules pattern.
const UICtrl = (function () {
  // Private stuff, unaccessible from outside.
  const text = 'Hello world';
  const changeText = function () {
    const element = document.querySelector('h1');
    element.textContent = text;
  };

  // Allows stuff to be public.
  return {
    callChangeText() {
      changeText();
      console.log(text);
    },
  };
}());

UICtrl.callChangeText();
console.log(UICtrl.text);

//
// Revealing module pattern
//

const ItemCtrl = (function () {
  const data = [];

  function add(item) {
    data.push(item);
    console.log('Item added...');
  }

  function get(id) {
    return data.find(item => item.id === id);
  }

  return {
    add,
    get,
  };
}());

// Add object into the module.
ItemCtrl.add({ id: 1, name: 'john' });

// Get the module from inside.
console.log(ItemCtrl.get(1));
