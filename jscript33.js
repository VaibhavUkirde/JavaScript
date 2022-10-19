//for_in loop
let student = {
	name:'John',
	phone:123456789,
	address:'NYC',
	};

for(let k in student){
	console.log(k);
}

for(let k in student){
	console.log(`${k}=>${student[k]}`);
}

let arr = ["ABC", "LMN", "PQR", "XYZ"];
for(var i in arr){
	console.log(i);
	console.log(arr[i]);
}