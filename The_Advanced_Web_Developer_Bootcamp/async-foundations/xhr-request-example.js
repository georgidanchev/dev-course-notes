// Old school AJAX... the XHR request

var XHR = new XMLHttpRequest()

XHR.onreadystatechange = function () {
  // Console log the different status states
  console.log("READY STATE IS..." + XHR.readyState)

  if (XHR.readyState == 4) {
    if (XHR.status == 200) {
      // Console log the response
      console.log(XHR.responseText)

      // Template the response to the page
      document.body.innerHTML = XHR.responseText
    } else {
      // If we have an error
      console.log("There was a problem")

      document.body.innerHTML = "There was XHR problem"
    }
  }
}

XHR.open("GET", "https://api.github.com/zen")

XHR.send()
