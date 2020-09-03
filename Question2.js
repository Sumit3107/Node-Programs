// Q2 Create a javascript function which takes array of numbers num[] as an argument and
// returns the list of all even numbers as even[] array and odd numbers as odd[] array. Display
// both the arrays on the console. (Use higher order functions like filter and map)


arr=[0,1,2,3,4,5,6,7,8,9];
even = [];
odd = [];
var a = 0, b = 0;
function evenFunction(num) {
if (num % 2 == 0) {
even[a] = num;
a++;
}
else {
odd[b] = num;
b++;
}
}
rangedArray = (num) => {
num.map(evenFunction);
}
rangedArray(arr);
console.log("array: " + arr);
console.log("even: " + even);
console.log("odd: " + odd);