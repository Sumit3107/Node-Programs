// Q4. Create a console based node.js application that should open and read from a file name “
// test.txt” , if file is empty then it should print on console that “ File is Empty” otherwise
// content should be appended into file “test1.txt” and printed on the console.


fs = require('fs')
//Reading from file
fs.readFile('test.txt', 'utf8', function (err, data) {
//if test file is empty
if (data == "") {
console.log("file is empty");
}
//if test file is not empty
else {
//now writing file test1.txt with data of test.txt
fs.writeFile('test1.txt', data, err => {
//reading appended file test1.txt
fs.readFile('test1.txt', 'utf8', function (err, data1) {
console.log(data1);
});
})
}
});