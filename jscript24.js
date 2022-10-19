//Array in javascript exercise
let arr = [12, 56, 11, 8, 90];
console.log(arr);
console.log(typeof arr);		//object
console.log(arr[0]);

let names = new Array("Mahesh", "Rajshekhar", "Salim", "Akshay", "Balraj");
console.log(names);
names.push("Salim");		//to add new data
console.log(names);
console.log("size of names is ", names.length);

const myDetails = ["Vaibhav", 8855, 84.55, ["77",'xyz']];
console.log(myDetails);
console.log(myDetails[3][1]);

arr.forEach(function(item, index){
	console.log(index, "=>", item);
});