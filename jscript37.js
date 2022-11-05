//math object operations

//area of circle
function area_of_circle(r) {
	let area = Math.PI * r * r;
	return area;
}
console.log(`area of circle with radius 5 is ${area_of_circle(5)}`);
console.log(Math.PI);

//absolute value
let a = -125;
console.log(Math.abs(a));

//random number generator
let ran = Math.random();
let three_digit_random_number = ran*1000;
console.log(ran*1000);  //multiplying by 1000 to get 3 digit number
console.log(Math.trunc(three_digit_random_number));  //Math.trunc to discard decimal

//square root
console.log(Math.sqrt(64));

//ceil
console.log(Math.ceil(3.1));
console.log(Math.ceil(-9.75));

//floor
console.log(Math.floor(3.2));

//min and max
console.log(Math.min(2, 8, 4, 1));
console.log(Math.max(2, 8, 4, 1));

//power
console.log(Math.pow(5, 3));

//trigonometry
console.log(Math.sin(90));
console.log(Math.cos(45*(Math.PI/180)));  //converting into radian value

//roundoff or approximate value
console.log(Math.round(4.9999));

//functions in math Object
console.log(Math);  //open in console