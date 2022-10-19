//Important string operations

console.log("!! 5 IMPORTANT STRING OPERATIONS !!");

//1.To check equality
let str1 = "Javascript";
let str2 = "Javascript";		//creating a string using string literal
console.log(str1 === str2);
if(str1 == str2) {
	console.log("both strings are equal");
};

let str3 = new String("JavaScript");
let str4 = new String("JavaScript");		//creating a string using string() constructor
console.log(str3);
console.log(str4);
console.log(str3 == str4);  	//both string having different address

//2.Comparing two strings
let s1 = "A";
let s2 = "B";
let result = s1.localeCompare(s2);
console.log(result);

//3.Replace certain word with another word
let oldString = "I love javascript";
let newString = oldString.replace("love", "hate");
console.log(newString);

//4.Accessing characters
console.log(oldString.charAt(2));
console.log(newString[5]);

//5.Converting string to array using split function
let as = oldString.split(" ");
console.log(as);
let ch = oldString.split("");
console.log(ch);