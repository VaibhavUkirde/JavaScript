//type conversion in javascript
let a = 555;
console.log(typeof a);
let aStr = String(a);  			 //1.string conversion
console.log(typeof aStr);
console.log(aStr.length);
console.log(a.toString());
console.log(String(false));

let value = "125";		
console.log(value + 6);
let value1 = Number(value);		//2.number conversion
console.log(value1 + 5);

let f1 = "15.25";
let f2 = Number(f1);			//2.number conversion
console.log(f2);
console.log(typeof f2);

let pint = parseInt(value);
console.log(pint);
console.log(typeof pint);		//output is number

console.log(parseFloat(f1));

console.log(Number(false));    		//0
console.log(Number(undefined));		//NaN
console.log(Number(true));			//1
console.log(Number(null));			//0

let ex = "false";
console.log(typeof ex);
let exb = Boolean(ex);			//3.Boolean conversion
console.log(typeof exb);
console.log(exb);