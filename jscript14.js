  // program to find difference between "==" and "===" operators
 
 let a = 2;					//number
 let b = 2;					//number
 console.log(typeof a);
 console.log(typeof b);
 
 console.log(a==b);			//true
 
 let c = "2";				//string
 console.log(typeof c);
 
 console.log(a==c);					//"==" compares only values
 console.log(a===c);				//"===" compares values as well as data types
 
 console.log(isNaN(c));			//NaN-> Not a Number, indicates a value which is not a legal number