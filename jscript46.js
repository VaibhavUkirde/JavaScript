//javascript classes
//class is the template for creating object
class Student {
	constructor(firstName, lastName, city)
	{
		this.firstName = firstName;
		this.lastName = lastName;
		this.city = city;
		console.log("OBJECT CREATED");
	}
	display(){
		console.log(`${this.firstName} ${this.lastName} lives in ${this.city}.`);
	}
};

let student1 = new Student("Ram", "Singh", "Haryana");
let student2 = new Student("Pooja", "Sharma", "Delhi");

student1.display();
student2.display();