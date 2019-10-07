// WINDOW METHODS / OBJECTS / PROPERTIES

// alert - popup alret.
// alert('Hello World');

// prompt - enter data.
// const input = prompt();
// alert(input);


// Confirm - confirm box.
// if (confirm('are you sure')) {
//   console.log('yes');
// } else {
//   console.log('no');
// }


let val;

// Windowd outter height and width.
val = window.outerHeight;
val = window.outerWidth;

// Window inner height and width.
val = window.innerHeight;
val = window.innerWidth;

// Scroll points.
val = window.scrollX;
val = window.scrollY;

// Location Object.
val = window.location;
val = window.location.hostname;
val = window.location.port;
val = window.location.href;
val = window.location.search;

// Redirect the page.
// window.location.href = 'http://google.com';

// Reload the page.
// window.location.reload();

// History Object
// window.history.go(-1);

// how many hops have we
// taken to reach this page.
val = window.history.length;

// get browser verison.
val = window.navigator.appVersion;
val = window.navigator.userAgent;
val = window.navigator.platform;
val = window.navigator.vendor;
val = window.navigator.language;


console.log(val);