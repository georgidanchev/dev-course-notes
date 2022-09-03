/* Example 1: Basic callback example */

function callback() {
  console.log("Coming from callback")
}

function higherOrder(fn) {
  console.log("About to call callback")
  fn()
  console.log("Call back has been invoked")
}

higherOrder(callback)

/* Example 2: Duplicate code without callbacks */

function sendMessageConsole(message) {
  console.log(message)
}

function sendMessageAlert(message) {
  alert(message)
}

function sendMessageConfirm(message) {
  return confirm(message)
}

sendMessageAlert("Lots of duplication")

/* Example 3: reuse code with callbacks */

function sendMessage(message, callback) {
  return callback(message)
}

sendMessage("Message for console", console.log)

sendMessage("Message for alert", alert)

var answer = sendMessage("Are you sure??", confirm)

/* Example 4: Callbacks with function declarations */

function greet(name, formatter) {
  return "Hello, " + formatter(name)
}

function upperCaseName(name) {
  return name.toUpperCase()
}

console.log(greet("Tim", upperCaseName))

/* Example 5: Callbacks with anonymous functions */

function greet(name, formatter) {
  return "Hello, " + formatter(name)
}

console.log(
  greet("Tim", function (name) {
    return name.toUpperCase()
  })
)

console.log(
  greet("Tim", function (name) {
    return name + "!!!!!"
  })
)
