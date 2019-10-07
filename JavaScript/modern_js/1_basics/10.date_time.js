let val;

const today = new Date();

// set whole date manually.
const birthday = new Date('9-10-1981 11:25:00');
const birthday2 = new Date('September 10 1981');
const birthday3 = new Date('9/10/1981');

// get month 0 to 11.
val = today.getMonth();
// get the date.
val = today.getDate();
// get current day.
val = today.getDay();
// get hours.
val = today.getHours();
// get minutes.
val = today.getMinutes();
// get milliseconds.
val = today.getMilliseconds();
// time since beging of getTime.
val = today.getTime();

// set date manually, by peace.
birthday.setFullYear(1985);
birthday.setMonth(2);
birthday.setDate(12);
birthday.setHours(3);
birthday.setMinutes(30);
birthday.setSeconds(25);

console.log(birthday);
console.log(val);