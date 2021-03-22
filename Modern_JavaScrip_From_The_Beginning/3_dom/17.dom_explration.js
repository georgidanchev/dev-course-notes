/* eslint-disable */

let val;

val = document;

// get all elements on the page.
val = document.all;
val = document.all.lenght;
val = document.head;
val = document.body;
val = document.doctype;
val = document.domain;
val = document.URL;
val = document.characterSet;
val = document.contentType;

// get list of all forms.
val = document.forms;
val = document.forms[0];
val = document.forms[0].id;
val = document.forms[0].method;
val = document.forms[0].action;

// get a list of all links.
val = document.links;
val = document.links[0];
val = document.links[0].id;
val = document.links[0].className;
val = document.links[0].classList[0];

// get a list of all images.
val = document.images;

// get a list of all scripts.
val = document.scripts;
val = document.scripts[2].getAttribute('src');

// by default we get HTML_selection.
let scripts = document.scripts;
let scriptsArray = Array.from(scripts)

// loop over each script and log the src.
scriptsArray.forEach((script) => {
  console.log(script.getAttribute('src'))
})


console.log(scripts);
