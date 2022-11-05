console.log("DEFAULT PARAMETERS");

const sum = (x, y) => x + y;
let s=sum(10, 20);
console.log(s);

let a=sum();
console.log(a);			//output NaN

const sum1 = (m=1, n=2) => m + n;
let b=sum1(10, 10);
console.log(b);