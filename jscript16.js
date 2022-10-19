var globalvariable = "Hello World!";
console.log(globalvariable);				//global variable
function myfun() {
	console.log(globalvariable);
	console.log(globalvariable);
};
myfun();

function myfun1() {
	var a = 11;								//local or function scope
	console.log(a);
};
myfun1();

console.log(isNaN(globalvariable));