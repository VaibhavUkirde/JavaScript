//object operations
console.log("OBJECT OPERATIONS");
let obj = {
	name:'Mohan',
	age:30,
	address:'Delhi',
	phone:1155,
	lastName:'Singh',
	display:function(){
		console.log("display properties...");
		console.log(this.name);
		console.log(this.lastName);
		console.log(this.age);
	}
};

console.log(obj);
console.log(typeof obj);

//accessing the properties of Object (method 1)
console.log(obj.phone);
console.log(obj.address);

//accessing the properties of object  (method 2)
console.log(obj['name']);
console.log(obj['age']);

obj.display();

for(let key in obj){
	console.log(key + " " + obj[key]);
}

obj["display"]();

//changing values of property
obj.name = "John";
console.log(obj.name);

console.log(obj);

//dymanic adding properties
obj['email'] = "johnsingh@gmail.com";
console.log(obj);

//deleting property
delete obj['lastName'];
console.log(obj);