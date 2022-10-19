//Important functions in string

console.log("!!IMPORTANT STRING FUNCTION EXERCISE!!");

let s = "I Love JavaScript";

console.log(s);

//1.length = number of characters
let len = s.length;
console.log("length is ", len);		

//2.concat
let s1 = "and Java";
let ans = s.concat(" ", s1);
console.log(ans);

//3.charAt(index)
let ch = s.charAt(7);
console.log(ch);

//4.indexOf()
let inx = s.indexOf("v");
console.log(inx);

//5.lastIndexOf()
let inx1 = s.lastIndexOf("v");
console.log(inx1);

//6.toUpperCase()
console.log(s.toUpperCase() + " " + s1.toUpperCase());

//7.toLowerCase()
console.log(s.toLowerCase() + " " + s1.toLowerCase());

//8.substring(start, end)
let sub = s.substring(7, 17);
console.log(sub);

//9.startsWith
console.log(s.startsWith("I Lo"));
console.log(s.startsWith("i love javas")); 	//case sensitive

//10.endsWith
console.log(s.endsWith("pt"));
console.log(s1.endsWith("java")); 			//case sensitive

//11.split
let splt = s.split(" ");
let splt1 = s1.split(" ");
console.log(typeof splt);
console.log(typeof splt1);
console.log(splt + " " + splt1);
console.log(splt[2] + " " + splt1[1]);

//12.trim
let s2 = "			my content";
console.log(s2);
let s3 = s2.trim();
console.log(s3);