var d = new Date();							//current date and time
console.log(d);
console.log(d.toDateString());				//display an abbreviated date string
console.log(d.toLocaleDateString());		//display a localized date string
console.log(d.toISOString());				//display the ISO standardized date string
console.log(d.toUTCString());				//display a date string converted to UTC time
console.log(d.toString());					//display the full date string with local timezone
console.log(`Date ${d.getDate()}`);			//current date
console.log(`Month ${d.getMonth()+1}`);		//current month
console.log(`Day ${d.getDay()+1}`);			//current day
console.log(`Year ${d.getFullYear()}`);		//current year

var d1 = new Date(1996, 9, 19);
console.log(d1);