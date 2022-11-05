//destructuring assignments
console.log(`DESTRUCTURING ASSIGNMENTS`);

let myarr = [22, 55];
let [x, y] = myarr;		//destructuring Object
console.log(x);
console.log(y);

let obj={
	name: 'javascript',
	dbName: 'abcd'
};

let {name, dbName} = obj;		//destructuring object
console.log(name);
console.log(dbName);

let myarr1 = [11, 22, 33, 44, 55, 66];
let [a, b,...rest] = myarr1;		//destructuring object
console.log(a);
console.log(b);
console.log(rest);
