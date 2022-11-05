console.log("ARROW FUNCTION");

//argument => expression

//(arg1, arg2) => expression

//(arguments) => {
//	return test;
//}

function square(x){
	return x*x;
};

//x => x*x;			<<this is arrow function

const squareA = (x) => x*x;

console.log(square(3));

console.log(squareA(10));

let a = [1, 2, 3, 4, 5];
a.forEach(e=>console.log(e));