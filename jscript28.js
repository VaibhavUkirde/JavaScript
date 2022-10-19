//Arrow function in JavaScript

const toCelsius = (fahrenheit) => {
	let result = (5/9) * (fahrenheit - 32);
	return result;
};

let x = toCelsius(105);
console.log("The Celsius temperature is ", x);