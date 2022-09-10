// AJAX but not really... Say hello to XHR :D

var btn = document.querySelector("#btn")
var photo = document.querySelector("#photo")

function makePhotoRequest() {
  var XHR = new XMLHttpRequest()

  XHR.onreadystatechange = function () {
    if (XHR.readyState == 4 && XHR.status == 200) {
      var url = JSON.parse(XHR.responseText).message
      console.log(url)
      photo.src = url
    }
  }

  XHR.open("GET", "https://dog.ceo/api/breeds/image/random")

  XHR.send()
}

// Listen for clicks
btn.addEventListener("click", (e) => {
  e.preventDefault()

  makePhotoRequest()
})

makePhotoRequest()
