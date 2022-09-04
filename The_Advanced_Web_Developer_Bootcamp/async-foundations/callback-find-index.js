// Our array of integers
var arr = [2,5,9,5,3,1]

// Our call back function
function callback(current, index, callbackTrigger) {
  if(current == callbackTrigger) {
    return index
  }
}

// Find index of array function
function findIndex(arr, callbackTrigger) {
  for (var i = 0; i < arr.length; i++) {
    if (callback(arr[i], i, callbackTrigger)) {
      return i
    }
  }
  // we cound't find matching index
  return -1
}

// log the array index search
console.log(findIndex(arr, 3))
