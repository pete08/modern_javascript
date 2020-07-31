var moment = require("moment") ;
// var chart = require("chart") ;

console.log("hello!") ;


var previousDate = moment().subtract(3, 'days').calendar() ;

console.log(previousDate) ;

var endOfDay = moment().endOf('day').fromNow();

console.log("It only " + endOfDay + " from end of day !!!!!!!!!!!!!!!!!!!!!") ;


let x = "cat";
let y = "fish";
console.log(`${x}${y}`);