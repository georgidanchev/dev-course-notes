const moment = require('moment');

let val;

val = moment().format('YYYY-MM-DD');

val = moment().format('MMMM Do YYYY, h:mm:ss a');

val = moment('2005-03-05').format('MMMM Do YYYY');

val = moment().format('dddd');

val = moment().format('[The year is] YYYY');

val = moment('20001031', 'YYYYMMDD').fromNow();

val = moment().startOf('day').fromNow();

val = moment().endOf('day').fromNow();

val = moment().subtract(6, 'days').calendar();



console.log(val);