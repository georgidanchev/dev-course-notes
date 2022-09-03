/*
  Print array values doubled
  Example 1: refactoring code Sample
 */

var arr = [1, 2, 3, 4, 5, 6]
function double(arr) {
  for(var i = 0; i < arr.length; i++) {
    console.log(arr[i] * 2)
  }
}

double(arr)

/*
  Example 2: refactored with for each loop
 */

var arr = [1,2,3,4,5,6]

arr.forEach(function(number){
  console.log(number * 2)
})

/*
  Example 3: for each with all callback params
*/

var string = ["My", "forEach", "example"]

var result = ""

string.forEach(function(str, index, array) {
  // Are we on the last iteration of the array
  if (array.length - 1 !== index) {
    result += str + " "
  } else {
    result += str + "!!!"
  }
})

console.log(result)

