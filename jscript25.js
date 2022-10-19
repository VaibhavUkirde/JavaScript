let names = ["John","Peter", "Sam", "Smith", "Edward", "Albert"];
console.log(names);
console.log(names.length);

for(i=0; i<=5; i++) {
	console.log(names[i]);
};
	
names.forEach(function(item, index) {
		console.log(index, "=>", item);
});

names.push("Shyam");	//push function adds the element at last position in array 
console.log(names);

names.pop();			//pop function removes the last element in array
console.log(names);

names.shift();			//shift function removes the first element in array
console.log(names);

names.unshift("Josheph");//unshift function adds the element at first position in array
console.log(names);

let posi = names.indexOf("Sam");//indexOf function used to find the index of element in array
console.log(posi);

//splice(position, n)
console.log(names.splice(1, 2));//splice function use to remove element of any position in array
console.log(names);

let cpy = names.slice();	//slice function use to copy the array
console.log(cpy);

console.log(names.length); //length is not a fuction, it is a property
let str = "Length is not a function, it is a property";
console.log(str.length);	//it must be use without parenthesis i.e., ()
