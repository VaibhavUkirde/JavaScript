let a = [1, "aditya", 3.14, 4, "vaibhav", 6, [5, 1.1], 8, 9];
console.log(typeof a[6]);
console.log(typeof a[4]);
console.log(typeof a[2]);
console.log(a[1]);

a.forEach(function(item, index){
console.log(index, "=>", item);
});