//promise in javascript

let prom = new Promise((resolve, reject)=>{
	//server call-asynchronous work
	//asynchronous work time consuming
	setTimeout(()=>{
	let flag = true;
	if (flag){
		resolve();
	} else{
		reject();
	}
	},5000);
});

prom
.then(()=>{
	console.log("promise is resolved");
})
.catch(()=>{
	console.log("promise is rejected");
});


console.log("first line after creating promise");
console.log("second line after creating promise");
console.log("third line after creating promise");
console.log("fourth line after creating promise");

