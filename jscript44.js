//enhanced Object literals

let student = {
	name: "Peter",
	city: "Delhi",
	display: function(){
		console.log(this.name+" "+this.city);
	}
};
console.log(student);

let name1 = "Aditya",
city1 = "Pune";			
let student1 = {
	name1, 				//enhanced feature
	city1,
	display1: function(){
		console.log(this.name1+" "+this.city1);
	}
};
console.log(student1);
student1.display1();

function createObject(a, b, c){
	return{a, b, c};
};
let ob1 = createObject(11, 22, 55);
console.log(ob1);


