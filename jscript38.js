console.log("NEW FEATURES OF JAVASCRIPT");

//two new keywords introduced in javascript, i.e., new features in ES-6 1.let 2.const

//var compName = "Test"; 
//function scope

//let x = 112;
//const y = 45;
//block scope

function test() {
	if(3>2){
		var x = 12;
		console.log("value of x is "+x);
	};
	console.log("value of x outside block is "+x);
};
test();


let x1 = 112;
console.log(x1);

x1 = 1120000000;
console.log(x1);