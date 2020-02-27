/*
Variables using var let & const
 */

var country = "MX";
var year = 2020;
let newVar = "";

var car = "honda";

if (true) {
  let car2 = "Toyota";
  console.log(car); //will show honda
  console.log(car2); //will show toyota
}
console.log(car); //will show honda
//console.log(car2);//error: car2 is not defined

const ip = "someIP";
console.log(ip);
/* is not possible to run
ip="otherIP"; //brings error : assigment to constant varialbe
console.log(ip);
*/
